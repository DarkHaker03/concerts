import { appSlice } from 'app/model';
import { useState } from 'react';
import { useAppDispatch } from 'shared/hooks/redux';
import { icons } from 'shared/ui/icons';
import styles from './styles.module.scss';

type Props = {
  logo?: boolean;
  pageName?: boolean;
  typeOfConcert?: boolean;
  searchInput?: boolean;
  notification?: boolean;
};

const Header = ({
  logo = false,
  pageName = false,
  typeOfConcert = false,
  searchInput = false,
  notification = false,
}: Props) => {
  const dispatch = useAppDispatch();
  const { toggle } = appSlice.actions;
  const open = () => dispatch(toggle());

  const [value, setValue] = useState('');
  return (
    <header className={styles.header}>
      {logo && <icons.Logo inlineClass={styles.logo} />}
      {pageName && <div className={styles.whereUser}>События</div>}
      {typeOfConcert && (
        <div className={styles.typesConcertsContainer}>
          <div className={styles.active}>Музыка</div>
          <div>Stand-up</div>
          <div>Театр</div>
        </div>
      )}
      <div className={searchInput ? styles.inputAndBellContainer : ''}>
        {searchInput && (
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Поиск билетов"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <icons.Search
              inlineStyles={{
                position: 'absolute',
                right: '20px',
                top: 'calc(50% - 11px)',
              }}
            />
          </div>
        )}
        {notification && (
          <button type="button" onClick={open}>
            <icons.Bell />
          </button>
        )}
      </div>
    </header>
  );
};

export { Header };
export type { Props };
