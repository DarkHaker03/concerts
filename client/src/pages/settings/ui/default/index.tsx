import { useNavigate } from 'react-router';
import { icons } from 'shared/ui/icons';
import { Block } from '../block';

const Default = () => {
  const navigate = useNavigate();

  return (
    <>
      <Block
        icon={<icons.Human />}
        text="Личные данные"
        inlineStyles={{ marginBottom: '56px' }}
        onClick={() => navigate('profile')}
      />
      <Block
        icon={<icons.InformationCircle />}
        text="Помощь"
        inlineStyles={{ marginBottom: '56px' }}
        onClick={() => navigate('help')}
      />
      <Block
        icon={<icons.Exit />}
        text="Выйти с аккаунта"
        inlineStyles={{ marginBottom: '56px', color: '#F16459' }}
        onClick={() => navigate('/autorization')}
      />
    </>
  );
};

export { Default };
