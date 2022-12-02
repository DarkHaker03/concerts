import { icons } from 'shared/ui/icons';
import { PopupLayout } from 'shared/ui/popup-layout';
import styles from './styles.module.scss';

const Notifications = () => (
  <PopupLayout>
    <>
      <div className={styles.name}>
        <button type="button" className={styles.arrowLeft}>
          <icons.ArrowLeft />
        </button>
        Уведомления
      </div>
      <div className={styles.notification}>
        <div className={styles.text}>Вы успешно приобрели билет!</div>
        <div className={styles.time}>1 час назад</div>
      </div>
      <div className={styles.notification}>
        <div className={styles.text}>Вы успешно приобрели билет!</div>
        <div className={styles.time}>1 час назад</div>
      </div>
      <div className={styles.notification}>
        <div className={styles.text}>Вы успешно приобрели билет!</div>
        <div className={styles.time}>1 час назад</div>
      </div>
    </>
  </PopupLayout>
);

export { Notifications };
