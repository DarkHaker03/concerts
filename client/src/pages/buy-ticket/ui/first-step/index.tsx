import styles from './styles.module.scss';

type Props = {
  onClick: React.Dispatch<React.SetStateAction<number>>;
};

const FirstStep = ({ onClick }: Props) => (
  <>
    <div className={styles.name}>Оформление заказа</div>
    <div
      style={{
        marginTop: '30px',
        fontWeight: 600,
        fontSize: '22px',
      }}
    >
      Проверьте данные для получения билета
    </div>
    <div className={styles.fields}>
      <input type="text" placeholder="Имя и фамилия" />
      <input type="text" placeholder="Имя и фамилия" />
      <input type="text" placeholder="Имя и фамилия" />
    </div>
    <button type="button" onClick={() => onClick(1)} className={styles.button}>
      Далее
    </button>
    <div className={styles.offerConsent}>
      Нажимая «Далее», вы соглашаетесь с условиями приобретения и офертой
    </div>
  </>
);

export { FirstStep };
