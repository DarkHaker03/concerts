import { icons } from 'shared/ui/icons';
import { Block } from '../block';

const Default = () => (
  <>
    <Block
      icon={<icons.Human />}
      text="Личные данные"
      inlineStyles={{ marginBottom: '56px' }}
    />
    <Block
      icon={<icons.InformationCircle />}
      text="Личные данные"
      inlineStyles={{ marginBottom: '56px' }}
    />
    <Block
      icon={<icons.Exit />}
      text="Выйти с аккаунта"
      inlineStyles={{ marginBottom: '56px', color: '#F16459' }}
    />
  </>
);

export { Default };
