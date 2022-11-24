import img from 'shared/assets/img/consert-img.jpg';
import logo from 'shared/assets/img/logo.svg';
import styles from './styles.module.scss';

const WelcomeScreen = () => (
  <div className={styles.container}>
    <img src={logo} alt="EVENTO" style={{ height: '20px', width: '142px' }} />
    <img src={img} alt="" className={styles.img} />
    <div className={styles.infoContainer}>
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
