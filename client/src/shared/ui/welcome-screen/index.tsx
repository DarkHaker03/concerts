import img from 'shared/assets/img/consert-img.jpg';
import { icons } from '../icons';
import styles from './styles.module.scss';

const WelcomeScreen = () => (
  <div className={styles.container}>
    <div style={{ zIndex: 1 }}>
      <icons.Logo
        inlineStyles={{
          height: '20px',
          width: '140px',
        }}
      />
    </div>
    <img src={img} alt="" className={styles.img} />
    <div style={{ zIndex: 1 }}>
      <div className={styles.text}>
        Билет на концерт твоей мечты в пару кликов
      </div>
      <div className={styles.containerOfConsertsType}>
        <div className={styles.concertType}>Музыка</div>
        <div className={styles.concertType}>Stand-up</div>
        <div className={styles.concertType}>Театр</div>
      </div>
    </div>
  </div>
);

export { WelcomeScreen };
