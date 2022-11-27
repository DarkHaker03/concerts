import selectedIcon from 'shared/assets/img/select.svg';
import closeIcon from 'shared/assets/img/close.svg';
import styles from './styles.module.scss';

type Props = {
  close: () => void;
};

const Filter = ({ close }: Props) => {
  console.log(3);
  return (
    <div>
      <div role="none" onClick={close} className={styles.background} />
      <div className={styles.container}>
        <img
          src={closeIcon}
          alt=""
          className={styles.closeIcon}
          onClick={close}
          role="none"
        />
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
    </div>
  );
};

export { Filter };
