import { icons } from '../icons';

const AutorizationSocials = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <a
      href="http://localhost:3000/registration"
      style={{ marginRight: '96px' }}
    >
      <icons.IconWithText text="Facebook" icon={<icons.Facebook />} />
    </a>
    <a href="http://localhost:3000/registration">
      <icons.IconWithText text="Google" icon={<icons.Google />} />
    </a>
  </div>
);

export { AutorizationSocials };
