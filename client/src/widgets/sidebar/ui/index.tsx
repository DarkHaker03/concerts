import { icons } from 'shared/ui/icons';
import clsx from 'clsx';
import { useLocation, useNavigate } from 'react-router';
import styles from './styles.module.scss';

type Configuration = {
  page: string;
  text: string;
  iconName: string;
};

const configuration: Configuration[] = [
  {
    page: 'home',
    text: 'Главная',
    iconName: 'Home',
  },
  {
    page: 'tickets',
    text: 'Билеты',
    iconName: 'Ticket',
  },
  {
    page: 'favourites',
    text: 'Избранное',
    iconName: 'Love',
  },
  {
    page: 'settings',
    text: 'Настройки',
    iconName: 'Settings',
  },
];

const iconWithProps = (name: string, isSelected: boolean) => {
  if (name === 'Home') {
    return <icons.Home fill={isSelected ? '#fff' : undefined} />;
  }
  if (name === 'Ticket') {
    return <icons.Ticket fill={isSelected ? '#fff' : undefined} />;
  }
  if (name === 'Love') {
    return <icons.Love fill={isSelected ? '#fff' : undefined} />;
  }
  if (name === 'Settings') {
    return <icons.Settings fill={isSelected ? '#fff' : undefined} />;
  }
  return null;
};

const Sidebar = () => {
  const navigate = useNavigate();
  const currentPage = useLocation().pathname;

  return (
    <aside className={styles.aside}>
      {configuration.map(({ iconName, page, text }) => {
        const isSelected: boolean = currentPage === `/${page}`;
        return (
          <button
            onClick={() => navigate(`/${page}`)}
            type="button"
            className={clsx(styles.page, isSelected && styles.active)}
          >
            {iconWithProps(iconName, isSelected)}
            <span>{text}</span>
          </button>
        );
      })}
    </aside>
  );
};

export { Sidebar };
