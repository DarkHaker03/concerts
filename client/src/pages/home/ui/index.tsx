import clsx from 'clsx';
import { useState } from 'react';
import { icons } from 'shared/ui/icons';
import { Main } from 'pages/home/ui/main';
import { Filter } from 'pages/home/ui/filter';
import styles from './styles.module.scss';

const Home = () => {
  const [search, setSearch] = useState('');
  const [filterIsOpen, setFilterIsOpen] = useState(false);
  const close = () => setFilterIsOpen(false);
  const open = () => setFilterIsOpen(true);

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <icons.Logo height="14px" width="94px" />
        <div className={styles.whereUser}>События</div>
        <div className={styles.typesConcertsContainer}>
          <div className={styles.active}>Музыка</div>
          <div>Stand-up</div>
          <div>Театр</div>
        </div>
        <div
          style={{
            display: 'flex',
            maxWidth: '430px',
            width: '40%',
            justifyContent: 'space-between',
          }}
        >
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Поиск билетов"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <icons.Search
              inlineStyles={{
                position: 'absolute',
                right: '20px',
                top: 'calc(50% - 11px)',
              }}
            />
          </div>
          <icons.Bell />
        </div>
      </header>
      <div style={{ display: 'flex' }}>
        <aside className={styles.aside}>
          <div>
            <div className={clsx(styles.page, styles.active)}>
              <icons.Home />
              <span>Главная</span>
            </div>
            <div className={styles.page}>
              <icons.Ticket />
              <span>Билеты</span>
            </div>
            <div className={styles.page}>
              <icons.Love />
              <span>Избранное</span>
            </div>
            <div className={styles.page}>
              <icons.Settings />
              <span>Настройки</span>
            </div>
          </div>
        </aside>
        <Main open={open} />
      </div>
      {filterIsOpen && <Filter close={close} />}
    </div>
  );
};

export { Home };
