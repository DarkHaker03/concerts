import { useNavigate } from 'react-router';
import { TextContainer } from 'shared/ui/text-container';
import { AutorizationSocials } from 'shared/ui/autorizationSocials';
import { icons } from 'shared/ui/icons';
import { TextAndTextButton } from 'shared/ui/text-and-text-button';
import { Fields } from './fields';
import styles from './styles.module.scss';

const Registration = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div>
        <TextContainer
          icon={<icons.ArrowLeft />}
          text="Регистрация"
          onClick={() => navigate('/welcome')}
        />
        <Fields />
      </div>
      <div>
        <button type="button" className={styles.button}>
          Зарегистрироваться
        </button>
        <AutorizationSocials />
        <TextAndTextButton
          text="Есть аккаунт ?"
          textButton=" Войти"
          onClick={() => navigate('/autorization')}
        />
      </div>
    </div>
  );
};

export { Registration };
