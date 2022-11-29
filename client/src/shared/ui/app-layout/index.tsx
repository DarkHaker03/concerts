import { useState } from 'react';
import { Filter } from 'pages/home/ui/filter';
import { Sidebar } from 'widgets/sidebar/ui';
import { Header } from 'widgets/header/ui';
import styles from './styles.module.scss';

type Props = {
  children: JSX.Element;
};

const AppLayout = ({ children }: Props) => {
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const close = () => setFilterIsOpen(false);
  const open = () => setFilterIsOpen(true);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        {children}
      </div>
      {filterIsOpen && <Filter />}
    </div>
  );
};

export { AppLayout };
