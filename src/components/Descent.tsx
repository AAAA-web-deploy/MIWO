import { scenes } from '../config/scenes';
import styles from './Descent.module.css';

const CANDLES = [
  { id: 'a', x: '8%', h: 36, up: true },
  { id: 'b', x: '18%', h: 58, up: false },
  { id: 'c', x: '30%', h: 44, up: true },
  { id: 'd', x: '42%', h: 72, up: true },
  { id: 'e', x: '54%', h: 40, up: false },
  { id: 'f', x: '66%', h: 64, up: false },
  { id: 'g', x: '78%', h: 48, up: true },
  { id: 'h', x: '88%', h: 30, up: false },
];

export function Descent() {
  return (
    <section className={styles.descent} aria-label="Sinking from the surface">
      <img className={styles.surface} src={scenes.oceanWide} alt="" />
      <div className={styles.candles} aria-hidden="true">
        {CANDLES.map((candle) => (
          <span
            key={candle.id}
            className={candle.up ? styles.up : styles.down}
            style={{ left: candle.x, height: candle.h }}
          />
        ))}
      </div>
      <div className={styles.story}>
        <p className={styles.lineA}>Whales move millions. MIWO moves emotionally.</p>
        <p className={styles.lineB}>I can&apos;t move the market. The market moves me.</p>
        <p className={styles.note}>Decorative crests. Not a live chart.</p>
      </div>
    </section>
  );
}
