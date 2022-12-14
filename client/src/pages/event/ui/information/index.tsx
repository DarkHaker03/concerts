import { EventCard } from './event-card';
import styles from './styles.module.scss';

const Information = () => (
  <div className={styles.container}>
    <div className={styles.type}>Музыкальный концерт</div>
    <div className={styles.name}>
      Большой концерт БАСТА
      <br /> от 80,000 W
    </div>
    <EventCard inlineStyles={{ marginBottom: '20px' }} />
    <EventCard inlineStyles={{ marginBottom: '20px' }} />
    <EventCard inlineStyles={{ marginBottom: '20px' }} />
    <div>Детали</div>
    <p className={styles.p}>
      Баста, в жизни — Василий Вакуленко, давно закрепил статус народного
      исполнителя. Его песни разбирают на цитаты — как новые, так и давно
      написанные композиции. Благодаря разнообразию используемых жанров и миксов
      стилей, он полюбился широкой аудитории.
    </p>
    <button type="button" className={styles.button}>
      Купить билет
    </button>
  </div>
);

export { Information };
