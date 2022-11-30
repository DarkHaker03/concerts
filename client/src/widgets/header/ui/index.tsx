import { useState } from 'react';
import { icons } from 'shared/ui/icons';
import styles from './styles.module.scss';

type Props = {
  onlyPageName?: boolean;
};

const Header = ({ onlyPageName }: Props) => {
  const [search, setSearch] = useState('');
  return (
    <header className={styles.header}>
      <icons.Logo height="14px" width="94px" />
      <div className={styles.whereUser}>События</div>
      {!onlyPageName && (
        <>
          <div className={styles.typesConcertsContainer}>
            <div className={styles.active}>Музыка</div>
            <div>Stand-up</div>
            <div>Театр</div>
          </div>
          <div className={styles.inputAndBellContainer}>
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
        </>
      )}
    </header>
  );
};

export { Header };
