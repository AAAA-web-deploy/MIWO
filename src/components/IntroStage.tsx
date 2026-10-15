import { useEffect, useRef, useState } from 'react';
import { CRITICAL_SCENES, EYE_PAIRS, scenes } from '../config/scenes';
import { timingsForViewport, type SceneTimings } from '../config/timings';
import { preloadImages } from '../lib/preload';
import styles from './IntroStage.module.css';

type Scene = 'loading' | 'eyes' | 'reveal' | 'dream' | 'splash';

const CAPTION: Record<Scene, string> = {
  loading: '',
  eyes: '',
  reveal: 'Meet MIWO.',
  dream: "Someday... I'll be a whale.",
  splash: '',
};

type Props = {
  active: boolean;
  fading: boolean;
  onDone: () => void;
};

export function IntroStage({ active, fading, onDone }: Props) {
  const [scene, setScene] = useState<Scene>('loading');
  const [progress, setProgress] = useState(6);
  const timings = useRef<SceneTimings>(timingsForViewport());
  const done = useRef(false);

  const finish = () => {
    if (done.current) return;
    done.current = true;
    onDone();
  };

  useEffect(() => {
    if (!active) return;
    let cancel = false;
    const timers: number[] = [];
    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timers.push(window.setTimeout(resolve, ms));
      });

    const T = timings.current;
    const started = performance.now();

    const sequence = async () => {
      const progressTimer = window.setInterval(() => {
        const spent = performance.now() - started;
        setProgress(Math.min(92, 8 + (spent / T.loadingMax) * 84));
      }, 80);

      await Promise.race([preloadImages(CRITICAL_SCENES), wait(T.loadingMax)]);
      window.clearInterval(progressTimer);
      if (cancel) return;
      const spent = performance.now() - started;
      if (spent < T.loadingMin) await wait(T.loadingMin - spent);
      if (cancel) return;
      setProgress(100);
      setScene('eyes');
      await wait(T.eyes);
      if (cancel) return;
      setScene('reveal');
      await wait(T.reveal);
      if (cancel) return;
      setScene('dream');
      await wait(T.dream);
      if (cancel) return;
      setScene('splash');
      await wait(T.splash);
      if (cancel) return;
      finish();
    };

    void sequence();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') finish();
    };
    window.addEventListener('keydown', onKey);

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onMotion = () => {
      if (motion.matches) finish();
    };
    motion.addEventListener('change', onMotion);

    return () => {
      cancel = true;
      timers.forEach((id) => window.clearTimeout(id));
      window.removeEventListener('keydown', onKey);
      motion.removeEventListener('change', onMotion);
    };
    // finish is stable for this mount; parent remounts the stage per replay
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const caption = CAPTION[scene];

  return (
    <div
      className={`${styles.stage} ${styles[scene]} ${fading ? styles.fading : ''}`}
      role="region"
      aria-label="Opening"
    >
      <div className={styles.eyeLayer} aria-hidden={scene === 'eyes' ? undefined : true}>
        {EYE_PAIRS.map((eye) => (
          <img
            key={eye.id}
            className={styles.eye}
            data-mood={eye.id}
            src={eye.src}
            alt={scene === 'eyes' ? eye.label : ''}
          />
        ))}
      </div>

      <div className={styles.spotlight} aria-hidden="true" />
      <img
        className={styles.bare}
        src={scenes.original}
        alt={scene === 'reveal' ? 'MIWO waving, lavender tie visible, no whale costume' : ''}
      />

      <img className={styles.dreamPlate} src={scenes.dream} alt="" />
      <img className={styles.splashPlate} src={scenes.splash} alt="" />

      {scene === 'loading' && (
        <div className={styles.loader}>
          <img className={styles.tinyEyes} src={scenes.eyes.curious} alt="" />
          <p>OPENING MIWO&apos;S LITTLE WORLD...</p>
          <div
            className={styles.track}
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
            aria-label="Loading MIWO"
          >
            <span style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}

      {caption && (
        <p className={styles.caption} aria-live="polite">
          {caption}
        </p>
      )}
    </div>
  );
}
