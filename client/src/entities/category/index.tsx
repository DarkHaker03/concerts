import clsx from 'clsx';
import { icons } from 'shared/ui/icons';
import { EventCard } from 'entities/event-card';
import { FavorableOfferCard } from 'pages/home/ui/favorable-offer-card';
import styles from './styles.module.scss';

type Props = {
  isFavorableOffer?: boolean;
  text?: string;
  mobileVertical?: boolean;
  infoOnImg?: boolean;
};

const Category = ({
  isFavorableOffer,
  text,
  mobileVertical,
  infoOnImg,
}: Props) => (
  <div style={{ maxWidth: '100%' }}>
    {text && (
      <div className={styles.name}>
        <span>{text}</span>
        <icons.ArrowRight />
      </div>
    )}
    <div
      className={clsx(styles.carousel, mobileVertical && styles.mobileVertical)}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 1, 1].map(() =>
        !isFavorableOffer ? (
          <EventCard mobileVertical={mobileVertical} infoOnImg={infoOnImg} />
        ) : (
          <FavorableOfferCard />
        )
      )}
    </div>
  </div>
);

export { Category };
