import { WelcomeScreen } from '../welcome-screen';
import styles from './styles.module.scss';

type Props = {
  children: JSX.Element;
};

const LayoutForRegistrationAndregistration = ({ children }: Props) => (
  <div style={{ display: 'flex' }}>
    <div className={styles.welcomeScreen}>
      <WelcomeScreen />
    </div>
    <div className={styles.form}>{children}</div>
  </div>
);

export { LayoutForRegistrationAndregistration };
