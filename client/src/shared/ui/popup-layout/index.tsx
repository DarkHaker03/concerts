import closeIcon from 'shared/assets/img/close.svg';
import styles from './styles.module.scss';

type Props = {
  children: JSX.Element;
  close: () => void;
};

const PopupLayout = ({ children, close }: Props) => (
  <div>
    <div role="none" onClick={close} className={styles.background} />
    <div className={styles.container}>
      <img
        src={closeIcon}
        alt=""
        className={styles.closeIcon}
        onClick={close}
        role="none"
      />
      {children}
    </div>
  </div>
);

export { PopupLayout };
