$ErrorActionPreference = 'Continue'
try { $null = [Console]::In.ReadToEnd() } catch {}

$root = (Resolve-Path (Join-Path $PSScriptRoot '..\..')).Path
Set-Location $root
$log = Join-Path $env:TEMP 'miwo-autodeploy.log'

function Write-Log([string]$message) {
  Add-Content -Path $log -Value ("{0} {1}" -f (Get-Date -Format o), $message)
}

function Finish {
  Write-Output '{}'
  exit 0
}

if (-not (Test-Path (Join-Path $root '.git'))) {
  Write-Log 'no git repo'
  Finish
}

$porcelain = @(git status --porcelain)
if ($porcelain.Count -eq 0) {
  Finish
}

$secret = $porcelain | Where-Object { $_ -match '(^|\s)(\.env|credentials\.json|id_rsa)(\.|$|\s)' }
if ($secret) {
  Write-Log 'skipped because a secret file is present'
  Finish
}

git add -A
if ($LASTEXITCODE -ne 0) {
  Write-Log 'git add failed'
  Finish
}
git reset -q -- .env .env.* 2>$null
$staged = @(git diff --cached --name-only)
if ($staged.Count -eq 0) {
  Finish
}

git -c user.name=AAAA-web-deploy -c user.email=338318608+AAAA-web-deploy@users.noreply.github.com commit -m "Update MICRO PANIC site."
if ($LASTEXITCODE -ne 0) {
  Write-Log 'commit failed'
  Finish
}

Add-Type @"
using System;
using System.Runtime.InteropServices;
public class MiwoCredRead {
  [DllImport("advapi32.dll", SetLastError=true, CharSet=CharSet.Unicode)]
  public static extern bool CredRead(string target, int type, int reservedFlag, out IntPtr credentialPtr);
  [DllImport("advapi32.dll")]
  public static extern void CredFree(IntPtr cred);
  [StructLayout(LayoutKind.Sequential, CharSet=CharSet.Unicode)]
  public struct CREDENTIAL {
    public uint Flags; public uint Type; public string TargetName; public string Comment;
    public long LastWritten; public uint CredentialBlobSize; public IntPtr CredentialBlob;
    public uint Persist; public uint AttributeCount; public IntPtr Attributes;
    public string TargetAlias; public string UserName;
  }
}
"@

$ptr = [IntPtr]::Zero
$ok = [MiwoCredRead]::CredRead('gh:github.com:AAAA-web-deploy', 1, 0, [ref]$ptr)
if (-not $ok) {
  Write-Log 'credential unavailable'
  Finish
}
$cred = [Runtime.InteropServices.Marshal]::PtrToStructure($ptr, [type][MiwoCredRead+CREDENTIAL])
$blob = New-Object byte[] ([int]$cred.CredentialBlobSize)
[Runtime.InteropServices.Marshal]::Copy($cred.CredentialBlob, $blob, 0, [int]$cred.CredentialBlobSize)
[MiwoCredRead]::CredFree($ptr)
$token = [Text.Encoding]::UTF8.GetString($blob).Trim([char]0)
$blob = $null

$env:GIT_TERMINAL_PROMPT = '0'
$env:GCM_INTERACTIVE = 'Never'
$pushUrl = "https://x-access-token:${token}@github.com/AAAA-web-deploy/MIWO.git"
git -c credential.helper= -c credential.helper= push --quiet $pushUrl HEAD:main
if ($LASTEXITCODE -ne 0) {
  Write-Log 'push failed'
} else {
  Write-Log ("pushed " + (git rev-parse --short HEAD))
}
$token = $null
$pushUrl = $null
Finish
