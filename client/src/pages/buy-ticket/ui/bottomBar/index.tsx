import styles from './styles.module.scss';

type Props = {
  open: () => void;
};

const BottomBar = ({ open }: Props) => {
  console.log(3);
  return (
    <div className={styles.container}>
      <div style={{ display: 'flex', overflowX: 'scroll' }}>
        <div className={styles.ticket}>
          <div>1 рядб, 1 место </div>
          <div>Стол 67 </div>
          <div>12 000 Р</div>
        </div>
        <div className={styles.ticket}>
          <div>1 рядб, 1 место </div>
          <div>Стол 67 </div>
          <div>12 000 Р</div>
        </div>
        <div className={styles.ticket}>
          <div>1 рядб, 1 место </div>
          <div>Стол 67 </div>
          <div>12 000 Р</div>
        </div>
        <div className={styles.ticket}>
          <div>1 рядб, 1 место </div>
          <div>Стол 67 </div>
          <div>12 000 Р</div>
        </div>
      </div>
      <div className={styles.priceAndButtonContainer}>
        <div>2 билета: 24 000 Р</div>
        <button type="button" onClick={open} className={styles.button}>
          Далее
        </button>
      </div>
    </div>
  );
};

export { BottomBar };
