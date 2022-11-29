import { useState } from 'react';
import { icons } from 'shared/ui/icons';
import img from 'shared/assets/img/img.jpg';
import styles from './styles.module.scss';

const EventCard = () => {
  const [isSelect, setIsSelected] = useState(false);
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
      <div
        role="none"
        onClick={() => setIsSelected((prevState) => !prevState)}
        style={{ position: 'absolute', right: '15px', top: '15px' }}
      >
        <icons.Love stroke="#fff" fill={isSelect ? '#fff' : 'transparent'} />
      </div>
    </div>
  );
};

export { EventCard };
