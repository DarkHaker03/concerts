import { Category } from 'entities/category';

const Home = () => (
  <>
    <div style={{ marginBottom: '60px' }}>
      <Category text="События" />
    </div>
    <div style={{ marginBottom: '60px' }}>
      <Category isFavorableOffer text="Специальные предложения" />
    </div>
  </>
);

export { Home };
