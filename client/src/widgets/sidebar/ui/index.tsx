import { icons } from 'shared/ui/icons';
import clsx from 'clsx';
import styles from './styles.module.scss';

const Sidebar = () => {
  console.log(3);
  return (
    <aside className={styles.aside}>
      <div className={clsx(styles.page, styles.active)}>
        <icons.Home />
        <span>Главная</span>
      </div>
      <div className={styles.page}>
        <icons.Ticket />
        <span>Билеты</span>
      </div>
      <div className={styles.page}>
        <icons.Love />
        <span>Избранное</span>
      </div>
      <div className={styles.page}>
        <icons.Settings />
        <span>Настройки</span>
      </div>
    </aside>
  );
};

export { Sidebar };
