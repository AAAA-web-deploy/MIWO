import { useState } from 'react';
import { scenes } from '../config/scenes';
import styles from './PostcardEnd.module.css';

type Props = {
  onReplay: () => void;
  note: string;
};

export function PostcardEnd({ onReplay, note }: Props) {
  const [heard, setHeard] = useState(false);
  const [panic, setPanic] = useState(false);

  return (
    <footer id="dream" className={styles.end}>
      <img
        className={styles.finale}
        src={scenes.sunset}
        alt=""
        loading="lazy"
      />
      <p className={styles.caption}>Someday, I'll be a whale.</p>
      <button type="button" className={styles.dream} onClick={() => setHeard(true)}>
        Still a micro bag. Still dreaming big.
      </button>
      {heard && <p role="status">Someday.</p>}
      <img
        className={styles.card}
        src={scenes.somedayCard}
        alt="Small earlier postcard of the someday idea"
        width={160}
        height={220}
        loading="lazy"
      />
      <div className={styles.tools}>
        <button type="button" onClick={onReplay}>Replay intro</button>
        <button type="button" onClick={() => setPanic(true)}>
          Department of Unnecessary Panic
        </button>
      </div>
      {panic && (
        <p className={styles.panic} role="status">
          Panic filed. No action required. Bag remains micro.
        </p>
      )}
      {note && <p role="status">{note}</p>}
      <p className={styles.fine}>
        MICRO PANIC is a meme. Nothing here is financial advice, a price, or a promise.
        Contract, chart, and social links stay quiet until they are real.
      </p>
      <img className={styles.logo} src={scenes.logo} alt="" width={72} height={72} loading="lazy" />
    </footer>
  );
}
