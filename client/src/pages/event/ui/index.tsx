import { Category } from 'entities/category';
import { Information } from './information';
import { Slider } from './slider';
import styles from './styles.module.scss';

const Event = () => (
  <>
    <div className={styles.container}>
      <Slider />
      <Information />
    </div>
    <div style={{ marginTop: '35px' }}>
      <Category card={{ name: 'favorable' }} name="Похожие события" />
    </div>
  </>
);

export { Event };
