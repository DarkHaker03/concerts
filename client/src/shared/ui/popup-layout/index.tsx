import clsx from 'clsx';
import CSS from 'csstype';
import closeIcon from 'shared/assets/img/close.svg';
import styles from './styles.module.scss';

type Props = {
  children: JSX.Element;
  close: () => void;
  stylesForContainer?: CSS.Properties;
  classForContainer?: string;
};

const PopupLayout = ({
  children,
  close,
  stylesForContainer,
  classForContainer,
}: Props) => (
  <div>
    <div role="none" onClick={close} className={styles.background} />
    <div
      className={clsx(styles.container, classForContainer)}
      style={stylesForContainer}
    >
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
