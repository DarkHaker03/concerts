import { Category } from 'entities/category';

const Home = () => (
  <>
    <div style={{ marginBottom: '60px' }}>
      <Category
        name="События"
        card={{
          name: 'event',
          configuration: {
            infoOnImg: { mobile: true, pc: false },
          },
        }}
      />
    </div>
    <div style={{ marginBottom: '60px' }}>
      <Category card={{ name: 'favorable' }} name="Специальные предложения" />
    </div>
  </>
);

export { Home };
