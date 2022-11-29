import { useNavigate } from 'react-router';
import { icons } from 'shared/ui/icons';
import styles from './styles.module.scss';

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <icons.Logo inlineStyles={{ marginTop: '242px', width: '100%' }} />
        <div className={styles.text}>
          Билет на концерт твоей мечты в пару кликов
        </div>
        <button
          onClick={() => navigate('/autorization')}
          type="button"
          className={styles.button}
        >
          Войти
        </button>
        <button
          onClick={() => navigate('/registration')}
          type="button"
          className={styles.button}
          style={{ backgroundColor: '#fff' }}
        >
          Зарегистрироваться
        </button>
      </div>
    </div>
  );
};

export { Welcome };
