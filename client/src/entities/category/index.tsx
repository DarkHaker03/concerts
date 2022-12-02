import clsx from 'clsx';
import { icons } from 'shared/ui/icons';
import {
  EventCard,
  Props as EventCardConfiguration,
} from 'entities/event-card';
import { FavorableOfferCard } from 'pages/home/ui/favorable-offer-card';
import styles from './styles.module.scss';

type CardType =
  | {
      name: 'event';
      configuration?: Omit<EventCardConfiguration, 'mobileVertical'>;
    }
  | {
      name: 'favorable';
    };

type Props = {
  name?: string;
  mobileVertical?: boolean;
  card: CardType;
};

const Category = ({ name, mobileVertical, card }: Props) => (
  <div style={{ maxWidth: '100%' }}>
    {name && (
      <div className={styles.name}>
        <span>{name}</span>
        <icons.ArrowRight />
      </div>
    )}
    <div
      className={clsx(styles.carousel, mobileVertical && styles.mobileVertical)}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 1, 1].map(() => {
        if (card.name === 'event') {
          return (
            <EventCard
              // eslint-disable-next-line
              {...card.configuration}
              mobileVertical={mobileVertical}
            />
          );
        }
        return <FavorableOfferCard />;
      })}
    </div>
  </div>
);

export { Category };
