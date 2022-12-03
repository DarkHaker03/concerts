import CSS from 'csstype';
import { icons } from 'shared/ui/icons';
import styles from './styles.module.scss';

type Props = {
  text: string;
  icon: JSX.Element;
  inlineStyles?: CSS.Properties;
  onClick?: () => void;
};

const Block = ({ text, icon, inlineStyles, onClick }: Props) => (
  <button
    type="button"
    onClick={onClick}
    className={styles.container}
    style={inlineStyles}
  >
    <div style={{ width: '36px', display: 'flex', alignItems: 'flex-end' }}>
      {icon}
    </div>
    <div className={styles.textIconContainer}>
      <span>{text}</span>
      <icons.ArrowRight />
    </div>
  </button>
);

export { Block };
