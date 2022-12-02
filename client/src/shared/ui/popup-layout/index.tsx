import closeIcon from 'shared/assets/img/close.svg';
import styles from './styles.module.scss';

type Props = {
  children: JSX.Element;
};

const PopupLayout = ({ children }: Props) => (
  <div>
    <div role="none" onClick={() => 1} className={styles.background} />
    <div className={styles.container}>
      <img
        src={closeIcon}
        alt=""
        className={styles.closeIcon}
        onClick={() => 1}
        role="none"
      />
      {children}
    </div>
  </div>
);

export { PopupLayout };
