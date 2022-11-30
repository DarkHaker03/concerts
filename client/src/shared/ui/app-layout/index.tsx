import { Sidebar } from 'widgets/sidebar/ui';
import { Header } from 'widgets/header/ui';
import styles from './styles.module.scss';

type Configuration = {
  onlyPageName?: boolean;
};

type Props = {
  children: JSX.Element;
  configuration?: Configuration;
};

const AppLayout = ({ children, configuration }: Props) => (
  <div className={styles.wrapper}>
    <Header />
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main className={styles.main}>{children}</main>
    </div>
  </div>
);

export { AppLayout };
