import { Category } from 'pages/home/ui/main/category';
import { MiniFilter } from 'pages/home/ui/main/mini-filter';
import styles from './styles.module.scss';

type Props = {
  open?: () => void;
};

const Main = ({ open }: Props) => (
  <main className={styles.main}>
    <MiniFilter open={() => 1} />
    <div className={styles.container}>
      <div style={{ marginBottom: '60px' }}>
        <Category />
      </div>
      <div style={{ marginBottom: '60px' }}>
        <Category />
      </div>
      <div style={{ marginBottom: '60px' }}>
        <Category isFavorableOffer />
      </div>
    </div>
  </main>
);

export { Main };
