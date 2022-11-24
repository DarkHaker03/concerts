import CSS from 'csstype';
import logo from 'shared/assets/img/logo.svg';
import search from 'shared/assets/img/search.svg';
import bell from 'shared/assets/img/bell.svg';
import home from 'shared/assets/img/home.svg';
import ticket from 'shared/assets/img/ticket.svg';
import love from 'shared/assets/img/love.svg';
import settings from 'shared/assets/img/settings.svg';
import arrowRight from 'shared/assets/img/arrow-right.svg';
import styles from './styles.module.scss';

type Props = {
  icon: string;
  text: string;
  width?: string;
  height?: string;
  inlineStyles?: CSS.Properties;
};

const Logo = ({
  width,
  height,
  inlineStyles,
}: Pick<Props, 'width' | 'height' | 'inlineStyles'>) => (
  <img style={{ width, height }} src={logo} alt="eventoo" />
);
const Home = ({
  width,
  height,
  inlineStyles,
}: Pick<Props, 'width' | 'height' | 'inlineStyles'>) => (
  <img style={{ width, height }} src={home} alt="main" />
);

const Ticket = ({
  width,
  height,
  inlineStyles,
}: Pick<Props, 'width' | 'height' | 'inlineStyles'>) => (
  <img style={{ width, height }} src={ticket} alt="tickets" />
);
const Love = ({
  width,
  height,
  inlineStyles,
}: Pick<Props, 'width' | 'height' | 'inlineStyles'>) => (
  <img style={{ width, height }} src={love} alt="favorites" />
);
const Settings = ({
  width,
  height,
  inlineStyles,
}: Pick<Props, 'width' | 'height' | 'inlineStyles'>) => (
  <img style={{ width, height }} src={settings} alt="settings" />
);

const Search = ({
  width,
  height,
  inlineStyles,
}: Pick<Props, 'width' | 'height' | 'inlineStyles'>) => (
  <img src={search} alt="eventoo" style={inlineStyles} />
);
const Bell = () => <img src={bell} alt="eventoo" />;

const ArrowRight = ({
  width,
  height,
  inlineStyles,
}: Pick<Props, 'width' | 'height' | 'inlineStyles'>) => (
  <img src={arrowRight} alt="arrow right" style={inlineStyles} />
);

const IconWithText = ({ icon, text }: Pick<Props, 'icon' | 'text'>) => (
  <div className={styles.autorizationWithSocials}>
    <img src={icon} alt="" />
    <span>{text}</span>
  </div>
);

export {
  IconWithText,
  Logo,
  Search,
  Bell,
  Home,
  Love,
  Ticket,
  Settings,
  ArrowRight,
};
