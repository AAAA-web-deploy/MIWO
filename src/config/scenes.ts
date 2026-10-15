const root = '/miwo-v2';

export const scenes = {
  eyes: {
    curious: `${root}/eyes/01_curious.webp`,
    suspicious: `${root}/eyes/02_suspicious.webp`,
    sideways: `${root}/eyes/03_sideways.webp`,
    startled: `${root}/eyes/04_startled.webp`,
    worried: `${root}/eyes/05_worried.webp`,
    angry: `${root}/eyes/06_angry.webp`,
    mocking: `${root}/eyes/07_mocking.webp`,
    smiling: `${root}/eyes/08_smiling.webp`,
  },
  original: `${root}/characters/MIWO_original.webp`,
  costume: `${root}/characters/MIWO_whale_costume.webp`,
  dream: `${root}/scenes/01_whale_dream_fullscene.webp`,
  splash: `${root}/scenes/02_costume_splash_transition_fullscene.webp`,
  ocean: `${root}/scenes/03_golden_whale_ocean_hero_fullscene.webp`,
  oceanWide: `${root}/scenes/04_whale_ocean_wide_alternate_fullscene.webp`,
  underwater: `${root}/scenes/05_luminous_underwater_fullscene.webp`,
  sunset: `${root}/scenes/06_someday_sunset_finale_fullscene.webp`,
  somedayCard: `${root}/references/someday_approved_reference.webp`,
  logo: `${root}/logo/MIWO_logo_no_text.png`,
  bubble: `${root}/fx/bubble.svg`,
  wave: `${root}/fx/wave_foreground.svg`,
  reactions: {
    calm: `${root}/reactions/calm_confidence.webp`,
    temptation: `${root}/reactions/temptation.webp`,
    suspicion: `${root}/reactions/suspicion.webp`,
    embarrassment: `${root}/reactions/embarrassment.png`,
    relief: `${root}/reactions/relief.webp`,
    delight: `${root}/reactions/delight.webp`,
    patience: `${root}/reactions/patience.webp`,
    focus: `${root}/reactions/exaggerated_focus.webp`,
  },
} as const;

export const EYE_PAIRS = [
  { id: 'curious', src: scenes.eyes.curious, label: 'Curious eyes' },
  { id: 'suspicious', src: scenes.eyes.suspicious, label: 'Suspicious eyes' },
  { id: 'sideways', src: scenes.eyes.sideways, label: 'Sideways glance' },
  { id: 'startled', src: scenes.eyes.startled, label: 'Startled eyes' },
  { id: 'worried', src: scenes.eyes.worried, label: 'Worried eyes' },
  { id: 'angry', src: scenes.eyes.angry, label: 'Angry eyes' },
  { id: 'mocking', src: scenes.eyes.mocking, label: 'Mocking eyes' },
  { id: 'smiling', src: scenes.eyes.smiling, label: 'Smiling eyes' },
] as const;

export const CRITICAL_SCENES = [
  ...EYE_PAIRS.map((eye) => eye.src),
  scenes.original,
  scenes.dream,
  scenes.splash,
  scenes.ocean,
];
