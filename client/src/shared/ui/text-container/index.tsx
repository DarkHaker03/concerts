import styles from './styles.module.scss';

type Props = {
  icon?: string;
  text: string;
  onClick?: any;
};

const TextContainer = ({ icon, text, onClick }: Props) => (
  <div className={styles.container}>
    <button
      type="button"
      onClick={onClick}
      style={{
        display: 'flex',
      }}
    >
      {icon && <img src={icon} alt="" />}
    </button>
    <span className={styles.text}>{text}</span>
  </div>
);

export { TextContainer };
