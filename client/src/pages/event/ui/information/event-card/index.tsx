import { icons } from 'shared/ui/icons';
import styles from './styles.module.scss';

const EventCard = () => (
  <>
    <div style={{ marginBottom: '12px' }}>
      <icons.Calendar />
      <span className={styles.calendar}>Sunday, 14 February 2021</span>
    </div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '27px',
      }}
    >
      <span>
        <icons.Place />
        <span className={styles.place}>Lotte Concert Hall, Seoul</span>
      </span>
      <span
        style={{
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <span
          style={{
            fontSize: '16px',
            lineHeight: '16px',
            marginRight: '5px',
          }}
        >
          На карте
        </span>
        <icons.ArrowRight />
      </span>
    </div>
  </>
);

export { EventCard };
