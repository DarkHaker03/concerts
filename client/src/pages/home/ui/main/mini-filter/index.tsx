import filter from 'shared/assets/img/filter.svg';
import arrowBottom from 'shared/assets/img/arrow-bottom.svg';
import { Category } from 'pages/home/ui/main/category';
import styles from './styles.module.scss';

type Props = {
  open: () => void;
};

const isPC = false;

const MiniFilter = ({ open }: Props) => (
  <div style={isPC ? { maxWidth: '416px' } : {}} className={styles.filter}>
    {isPC ? (
      <>
        <img
          src={filter}
          alt=""
          onClick={open}
          role="none"
          style={{ cursor: 'pointer' }}
        />
        <div style={{ position: 'relative' }}>
          <select name="" id="">
            <option value="1">1111</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <img
            src={arrowBottom}
            alt=""
            style={{
              position: 'absolute',
              right: '5px',
              top: 'calc(50% - 3px)',
            }}
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
            style={{
              position: 'absolute',
              right: '5px',
              top: 'calc(50% - 3px)',
            }}
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
            style={{
              position: 'absolute',
              right: '5px',
              top: 'calc(50% - 3px)',
            }}
          />
        </div>
      </>
    ) : (
      <Category />
    )}
  </div>
);

export { MiniFilter };
