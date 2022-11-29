import styles from './styles.module.scss';

type Props = {
  text: string;
  textButton: string;
  // eslint-disable-next-line
  onClick: any;
};

const TextAndTextButton = ({ text, textButton, onClick }: Props) => (
  <div className={styles.logIn}>
    {text}
    <button
      style={{ textDecoration: 'underline', marginLeft: '5px' }}
      type="button"
      onClick={onClick}
    >
      {textButton}
    </button>
  </div>
);

export { TextAndTextButton };
