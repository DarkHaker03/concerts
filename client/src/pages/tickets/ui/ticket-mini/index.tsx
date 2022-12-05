import CSS from 'csstype';
import img from 'shared/assets/img/img--2.jpg';
import { icons } from 'shared/ui/icons';
import { LineDashed } from 'shared/ui/line-dashed';
import styles from './styles.module.scss';

type Props = {
  inlineStyles?: CSS.Properties;
};

const TicketMini = ({ inlineStyles }: Props) => (
  <div className={styles.container} style={inlineStyles}>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex' }}>
        <img src={img} alt="" className={styles.img} />
        <div>
          <div className={styles.name}>Скриптонит </div>
          <div className={styles.type}>Музыкальный концерт</div>
          <div className={styles.place}>
            <icons.PlaceBlack />
            <span>Olympic Park Stadium</span>
          </div>
        </div>
      </div>
      <div className={styles.price}>375,000 KRW</div>
    </div>
    <div style={{ position: 'relative' }}>
      <div className={styles.blackCircle} style={{ left: '-30px' }} />
      <LineDashed />
      <div className={styles.blackCircle} style={{ right: '-30px' }} />
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div className={styles.block}>
        <div className={styles.category}>Категория</div>
        <div className={styles.text}>VIP</div>
      </div>
      <div className={styles.block}>
        <div className={styles.category}>Количество</div>
        <div className={styles.text}>2 билета</div>
      </div>
      <div className={styles.block}>
        <div className={styles.category}>Дата</div>
        <div className={styles.text}>29 Дек 2021</div>
      </div>
    </div>
  </div>
);

export { TicketMini };
