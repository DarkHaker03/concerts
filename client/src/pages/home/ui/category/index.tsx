import { icons } from 'shared/ui/icons';
import { EventCard } from 'entities/event-card';
import { FavorableOfferCard } from './favorable-offer-card';
import styles from './styles.module.scss';

type Props = {
  isFavorableOffer?: boolean;
  text?: string;
};

const Category = ({ isFavorableOffer, text }: Props) => (
  <div style={{ maxWidth: '100%' }}>
    {text && (
      <div className={styles.name}>
        <span>{text}</span>
        <icons.ArrowRight />
      </div>
    )}
    <div className={styles.carousel}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 1, 1].map(() =>
        !isFavorableOffer ? <EventCard /> : <FavorableOfferCard />
      )}
    </div>
  </div>
);

export { Category };
