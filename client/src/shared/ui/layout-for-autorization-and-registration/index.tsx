import { Outlet } from 'react-router';
import { WelcomeScreen } from '../welcome-screen';
import styles from './styles.module.scss';

const LayoutForRegistrationAndregistration = () => (
  <div style={{ display: 'flex' }}>
    <div className={styles.welcomeScreen}>
      <WelcomeScreen />
    </div>
    <div className={styles.form}>
      <Outlet />
    </div>
  </div>
);

export { LayoutForRegistrationAndregistration };
