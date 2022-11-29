import { useNavigate } from 'react-router';
import { AutorizationSocials } from 'shared/ui/autorizationSocials';
import { TextContainer } from 'shared/ui/text-container';
import { icons } from 'shared/ui/icons';
import { TextAndTextButton } from 'shared/ui/text-and-text-button';
import { Fields } from './fields';
import { ForgotPassword } from './forgot-password';
import { LogInWithTelephone } from './log-in-with-telephone';
import styles from './styles.module.scss';

const Autorization = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div>
        <TextContainer
          icon={<icons.ArrowLeft />}
          text="Войти в аккаунт"
          onClick={() => navigate('/welcome')}
        />
        <Fields />
        <ForgotPassword />
      </div>
      <div>
        <LogInWithTelephone />
        <button type="button" className={styles.button}>
          Войти
        </button>
        <AutorizationSocials />
        <TextAndTextButton
          text="Нет аккаунта?"
          textButton=" Зарегистрироваться"
          onClick={() => navigate('/registration')}
        />
      </div>
    </div>
  );
};

export { Autorization };
