import { icons } from 'shared/ui/icons';
import { EventCard } from 'pages/home/ui/main/category/event-card';
import { FavorableOfferCard } from 'pages/home/ui/main/category/favorable-offer-card';
import styles from './styles.module.scss';

type Props = {
  isFavorableOffer?: boolean;
};

const Category = ({ isFavorableOffer }: Props) => (
  <div>
    <div className={styles.name}>
      <span>Самые ожидаемые</span>
      <icons.ArrowRight />
    </div>
    <div className={styles.carousel}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 1, 1].map(() =>
        !isFavorableOffer ? <EventCard /> : <FavorableOfferCard />
      )}
    </div>
  </div>
);

export { Category };
