import { Category } from 'entities/category';

const Favourites = () => (
  <div>
    <Category
      mobileVertical
      card={{
        name: 'event',
        configuration: {
          type: 'long',
          infoOnImg: { mobile: true, pc: false },
        },
      }}
    />
  </div>
);

export { Favourites };
