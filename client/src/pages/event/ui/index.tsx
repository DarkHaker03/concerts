import { Category } from 'entities/category';
import { Information } from './information';
import { Slider } from './slider';

const Event = () => (
  <>
    <div style={{ display: 'flex' }}>
      <Slider />
      <Information />
    </div>
    <div style={{ marginTop: '35px' }}>
      <Category text="Похожие события" />
    </div>
  </>
);

export { Event };
