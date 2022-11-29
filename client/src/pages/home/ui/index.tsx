import { Category } from './category';
import styles from './styles.module.scss';

const Main = () => (
  <main className={styles.main}>
    <div className={styles.container}>
      <div style={{ marginBottom: '60px' }}>
        <Category text="События" />
      </div>
      <div style={{ marginBottom: '60px' }}>
        <Category isFavorableOffer text="Специальные предложения" />
      </div>
    </div>
  </main>
);

export { Main };
