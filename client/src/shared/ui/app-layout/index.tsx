import { Sidebar } from 'widgets/sidebar/ui';
import { Header, Props as HeaderConfiguration } from 'widgets/header/ui';
// import { Notifications } from 'entities/notifications';
import styles from './styles.module.scss';

type Props = {
  children: JSX.Element;
  headerConfiguration?: HeaderConfiguration;
};

const AppLayout = ({ children, headerConfiguration }: Props) => (
  <div className={styles.wrapper}>
    {/*  eslint-disable-next-line */}
    <Header {...headerConfiguration} />
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main className={styles.main}>{children}</main>
    </div>
    {/* <Notifications /> */}
  </div>
);

export { AppLayout };
