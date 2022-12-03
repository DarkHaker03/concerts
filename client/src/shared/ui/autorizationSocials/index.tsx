import { icons } from '../icons';
import styles from './styles.module.scss';

const AutorizationSocials = () => (
  <div className={styles.container}>
    <a
      href="http://localhost:3000/registration"
      style={{ marginRight: '96px' }}
    >
      <icons.IconWithText text="Facebook" icon={<icons.Facebook />} />
    </a>
    <a href="http://localhost:3000/registration">
      <icons.IconWithText text="Google" icon={<icons.Google />} />
    </a>
  </div>
);

export { AutorizationSocials };
