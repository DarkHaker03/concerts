import selectedIcon from 'shared/assets/img/select.svg';
import { PopupLayout } from 'shared/ui/popup-layout';
import styles from './styles.module.scss';

const Filter = () => (
  <PopupLayout>
    <div className={styles.container}>
      <div style={{ padding: '20px 55px 20px 20px ' }}>
        <h3 className={styles.h3}>Фильтр</h3>
        <ul>
          <li className={styles.type}>Дата</li>
          <li>Сегодня</li>
          <li>
            Завтра <img src={selectedIcon} alt="" />
          </li>
          <li>На этой неделе</li>
          <li>На этих выходных</li>
        </ul>
        <ul>
          <li className={styles.type}>Дата</li>
          <li>Сегодня</li>
          <li>Завтра</li>
          <li>На этой неделе</li>
          <li>На этих выходных</li>
        </ul>
      </div>
      <div className={styles.resetSettings}>Сбросить настройки</div>
      <button type="button">Применить</button>
    </div>
  </PopupLayout>
);

export { Filter };
