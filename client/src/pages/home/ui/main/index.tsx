import { Category } from 'pages/home/ui/main/category';
import filter from 'shared/assets/img/filter.svg';
import arrowBottom from 'shared/assets/img/arrow-bottom.svg';
import styles from './styles.module.scss';

type Props = {
  open: () => void;
};

const Main = ({ open }: Props) => (
  <main className={styles.main}>
    <div className={styles.filter}>
      <img src={filter} alt="" onClick={open} role="none" />
      <div style={{ position: 'relative' }}>
        <select name="" id="">
          <option value="1">1111</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <img
          src={arrowBottom}
          alt=""
          style={{ position: 'absolute', right: '5px', top: 'calc(50% - 3px)' }}
        />
      </div>
      <div style={{ position: 'relative' }}>
        <select name="" id="">
          <option value="1">1111</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <img
          src={arrowBottom}
          alt=""
          style={{ position: 'absolute', right: '5px', top: 'calc(50% - 3px)' }}
        />
      </div>
      <div style={{ position: 'relative' }}>
        <select name="" id="">
          <option value="1">1111</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <img
          src={arrowBottom}
          alt=""
          style={{ position: 'absolute', right: '5px', top: 'calc(50% - 3px)' }}
        />
      </div>
    </div>
    <div className={styles.container}>
      <div style={{ marginBottom: '60px' }}>
        <Category />
      </div>
      <div style={{ marginBottom: '60px' }}>
        <Category />
      </div>
      <div style={{ marginBottom: '60px' }}>
        <Category isFavorableOffer />
      </div>
    </div>
  </main>
);

export { Main };
