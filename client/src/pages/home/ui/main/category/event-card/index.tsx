import img from 'shared/assets/img/img.jpg';
import styles from './styles.module.scss';

const EventCard = () => {
  console.log(3);
  return (
    <div className={styles.container}>
      <img className={styles.img} src={img} alt="" />
      <div className={styles.information}>
        <div className={styles.date}>
          15 <br /> <span> окт</span>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.name2}>Скриптонит</div>
          <div className={styles.typesConcerts}>Хип-хоп • Рэп</div>
        </div>
      </div>
    </div>
  );
};

export { EventCard };
