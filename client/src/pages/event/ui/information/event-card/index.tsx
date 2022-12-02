import CSS from 'csstype';
import styles from './styles.module.scss';

type Props = { inlineStyles?: CSS.Properties };

const EventCard = ({ inlineStyles }: Props) => (
  <div className={styles.container} style={inlineStyles}>
    <div className={styles.date}>
      <div style={{ fontSize: '27px', fontWeight: 600 }}>19</div>
      апр
      <br />
      2023
    </div>
    <div>
      <div style={{ fontSize: '18px', fontWeight: 400 }}>СР 20:00</div>
      <div style={{ fontSize: '15px', color: '#6D6D6D', marginBottom: '10px' }}>
        Lotte Concert Hall
      </div>
      <button className={styles.button} type="button">
        Билеты от 35000 р
      </button>
    </div>
    <div className={styles.city}>Seoul</div>
  </div>
);

export { EventCard };
