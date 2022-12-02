import { useState } from 'react';
import clsx from 'clsx';
import { icons } from 'shared/ui/icons';
import img from 'shared/assets/img/img--2.jpg';
import styles from './styles.module.scss';

type Props = {
  mobileVertical?: boolean;
  infoOnImg?: { pc: boolean; mobile: boolean };
  type?: 'short' | 'long';
};

const EventCard = ({ mobileVertical, infoOnImg, type = 'short' }: Props) => {
  const [isSelect, setIsSelected] = useState(false);
  return (
    <div
      className={clsx(
        styles.container,
        mobileVertical && styles.mobileVertical,
        type === 'short' && styles.short,
        type === 'long' && styles.long
      )}
    >
      <img className={clsx(styles.img)} src={img} alt="" />
      <div
        className={clsx(
          styles.information,
          infoOnImg?.mobile && styles.infoOnImgMobile,
          infoOnImg?.pc && styles.infoOnImgPc
        )}
      >
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
export type { Props };
