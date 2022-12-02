import { useState } from 'react';
import { icons } from 'shared/ui/icons';
import img from 'shared/assets/img/slide-img.jpg';
import img2 from 'shared/assets/img/slide-img-2.jpg';
import img3 from 'shared/assets/img/slide-img-3.jpg';
import styles from './styles.module.scss';

const countSlides = 3;
const slideWidth = 100 / countSlides;

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const plus = () =>
    setCurrentSlide((prevState) =>
      prevState < countSlides - 1 ? prevState + 1 : prevState
    );
  const minus = () =>
    setCurrentSlide((prevState) => (prevState !== 0 ? prevState - 1 : 0));

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        <div
          className={styles.container}
          style={{
            width: `${100 * countSlides}%`,
            transform: `translateX(-${slideWidth * currentSlide}%)`,
          }}
        >
          <div className={styles.slide} style={{ width: `${slideWidth}%` }}>
            <img src={img} alt="" />
          </div>
          <div className={styles.slide} style={{ width: `${slideWidth}%` }}>
            <img src={img2} alt="" />
          </div>
          <div className={styles.slide} style={{ width: `${slideWidth}%` }}>
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.arrows}>
        <button type="button" onClick={minus} className={styles.arrow}>
          <icons.ArrowRight />
        </button>
        <button type="button" onClick={plus} className={styles.arrow}>
          <icons.ArrowRight />
        </button>
      </div>
      <button type="button" className={styles.back}>
        <icons.ArrowLeft />
      </button>
      <button type="button" className={styles.share}>
        <icons.Share />
      </button>
    </div>
  );
};

export { Slider };
