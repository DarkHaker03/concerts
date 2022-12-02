import { Outlet } from 'react-router';
import img from 'shared/assets/img/img.jpg';
import styles from './styles.module.scss';

const Settings = () => (
  <div className={styles.container}>
    <div
      style={{
        maxWidth: '415px',
        width: '95%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img className={styles.img} src={img} alt="" />
      <div className={styles.name}>John Doe</div>
      <div className={styles.email}>johndoe@gmail.com</div>
      <Outlet />
    </div>
  </div>
);

export { Settings };
