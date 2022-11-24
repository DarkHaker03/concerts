import img2 from 'shared/assets/img/img2.jpg';
import styles from './styles.module.scss';

const FavorableOfferCard = () => (
  <div style={{ marginRight: '20px', position: 'relative' }}>
    <img src={img2} alt="" style={{ borderRadius: '10px' }} />
    <div className={styles.container}>
      <span>3+1</span>
      <br />
      Купи два получи один в подарок
    </div>
  </div>
);

export { FavorableOfferCard };
