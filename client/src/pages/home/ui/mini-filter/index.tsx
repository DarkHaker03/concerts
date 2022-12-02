import filter from 'shared/assets/img/filter.svg';
import { icons } from 'shared/ui/icons';
import { Category } from 'entities/category';
import styles from './styles.module.scss';

const isPC = false;

const MiniFilter = () => (
  <div style={isPC ? { maxWidth: '416px' } : {}} className={styles.filter}>
    {isPC ? (
      <>
        <img
          src={filter}
          alt=""
          onClick={() => 1}
          role="none"
          style={{ cursor: 'pointer' }}
        />
        <div style={{ position: 'relative' }}>
          <select name="" id="">
            <option value="1">1111</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div
            style={{
              position: 'absolute',
              right: '5px',
              top: 'calc(50% - 3px)',
            }}
          >
            <icons.ArrowBottom />
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <select name="" id="">
            <option value="1">1111</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div
            style={{
              position: 'absolute',
              right: '5px',
              top: 'calc(50% - 3px)',
            }}
          >
            <icons.ArrowBottom />
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <select name="" id="">
            <option value="1">1111</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div
            style={{
              position: 'absolute',
              right: '5px',
              top: 'calc(50% - 3px)',
            }}
          >
            <icons.ArrowBottom />
          </div>
        </div>
      </>
    ) : (
      <Category card={{ name: 'event' }} />
    )}
  </div>
);

export { MiniFilter };
