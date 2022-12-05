import CSS from 'csstype';
import img from 'shared/assets/img/img--2.jpg';
import barcodeFakeImg from 'shared/assets/img/barcode-fake.png';
import { icons } from 'shared/ui/icons';
import { LineDashed } from 'shared/ui/line-dashed';
import styles from './styles.module.scss';

type Props = {
  inlineStyles?: CSS.Properties;
};

const Ticket = ({ inlineStyles }: Props) => (
  <div className={styles.container} style={inlineStyles}>
    <img src={img} className={styles.img} alt="" />
    <LineDashed />
    <div className={styles.name}>Скриптонит </div>
    <div className={styles.type}>Музыкальный концерт</div>
    <div className={styles.price}>375,000 KRW</div>
    <div className={styles.place}>
      <icons.PlaceBlack />
      <span>Olympic Park Stadium</span>
    </div>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div className={styles.block}>
        <div className={styles.category}>Категория</div>
        <div className={styles.text}>VIP</div>
      </div>
      <div className={styles.block}>
        <div className={styles.category}>Дата</div>
        <div className={styles.text}>29 Дек 2021</div>
      </div>
      <div className={styles.block}>
        <div className={styles.category}>Количество</div>
        <div className={styles.text}>2 билета</div>
      </div>
      <div className={styles.block}>
        <div className={styles.category}>Место</div>
        <div className={styles.text}>2 ряд, 22 место</div>
      </div>
    </div>
    <LineDashed />
    <img src={barcodeFakeImg} alt="" />
    <div style={{ textAlign: 'center', marginTop: '15px' }}>
      <button type="button" className={styles.ticketBack}>
        Возврат билета
      </button>
    </div>
  </div>
);

export { Ticket };
