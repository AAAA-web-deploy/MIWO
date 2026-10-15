import { useEffect, useRef } from 'react';
import { scenes } from '../config/scenes';
import { WHALE_MODE_MS } from '../config/timings';
import styles from './OceanHero.module.css';

const BUBBLES = [
  { l: '6%', b: '28%', s: 22, d: '0s', t: '9s' },
  { l: '18%', b: '46%', s: 14, d: '1s', t: '11s' },
  { l: '12%', b: '16%', s: 10, d: '2s', t: '8s' },
  { l: '30%', b: '62%', s: 16, d: '0.4s', t: '12s' },
  { l: '42%', b: '22%', s: 12, d: '1.6s', t: '10s' },
  { l: '70%', b: '18%', s: 18, d: '0.2s', t: '13s' },
  { l: '78%', b: '34%', s: 11, d: '2.2s', t: '9s' },
  { l: '86%', b: '48%', s: 20, d: '0.8s', t: '12s' },
  { l: '58%', b: '12%', s: 9, d: '1.2s', t: '8s' },
  { l: '24%', b: '72%', s: 13, d: '1.8s', t: '10s' },
  { l: '64%', b: '58%', s: 15, d: '0.6s', t: '11s' },
  { l: '90%', b: '14%', s: 8, d: '2.4s', t: '9s' },
];

type Props = {
  whaleOn: boolean;
  onWhale: (active: boolean) => void;
  onOpen: () => void;
};

export function OceanHero({ whaleOn, onWhale, onOpen }: Props) {
  const timer = useRef<number | null>(null);

  useEffect(() => () => {
    if (timer.current) window.clearTimeout(timer.current);
  }, []);

  const go = () => {
    onWhale(true);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => onWhale(false), WHALE_MODE_MS);
  };

  return (
    <section id="ocean" className={`${styles.hero} ${whaleOn ? styles.whaleOn : ''}`} aria-labelledby="miwo-title">
      <img className={styles.plate} src={scenes.ocean} alt="" />
      <div className={styles.lens} aria-hidden="true" />
      <div className={styles.bubbles} aria-hidden="true">
        {BUBBLES.map((bubble) => (
          <img
            key={`${bubble.l}-${bubble.b}`}
            src={scenes.bubble}
            alt=""
            className={styles.bubble}
            style={{
              left: bubble.l,
              bottom: bubble.b,
              width: bubble.s,
              animationDelay: bubble.d,
              animationDuration: bubble.t,
            }}
          />
        ))}
      </div>
      <div className={styles.copy}>
        <div className={styles.headline}>
          <button type="button" className={styles.buoy} onClick={onOpen} aria-label="Open the bag">
            <span className={styles.float} aria-hidden="true">
              <span className={styles.ring} />
              <span className={styles.body} />
            </span>
          </button>
          <h1 id="miwo-title">
            <span>MICRO</span>
            <span>PANIC</span>
          </h1>
        </div>
        <p className={styles.ticker}>$MIWO</p>
        <p className={styles.slogan}>
          Micro Bag.
          <br />
          Whale-Sized Feelings.
        </p>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.cta}
            onClick={() => go()}
            aria-pressed={whaleOn}
            aria-describedby="bag-label"
          >
            GO FULL WHALE
          </button>
          <p id="bag-label" className={styles.bag}>
            BAG: STILL MICRO
          </p>
        </div>
        {whaleOn && (
          <p className={styles.confidence} role="status">
            CONFIDENCE: 100
          </p>
        )}
      </div>
    </section>
  );
}
