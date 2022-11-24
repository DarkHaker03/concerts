import { useState } from 'react';
import { WelcomeScreen } from 'shared/ui/welcome-screen';
import arrowLeft from 'shared/assets/img/arrow-left.svg';
import human from 'shared/assets/img/human.svg';
import emailIcon from 'shared/assets/img/email.svg';
import passwordIcon from 'shared/assets/img/password.svg';
import facebook from 'shared/assets/img/facebook.svg';
import google from 'shared/assets/img/google.svg';
import { Field } from 'shared/ui/field';
import { icons } from 'shared/ui/icons';
import { TextContainer } from 'shared/ui/text-container';
import { useNavigate } from 'react-router';
import styles from './styles.module.scss';

const Registration = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  return (
    <div style={{ display: 'flex' }}>
      <div className={styles.left}>
        <WelcomeScreen />
      </div>
      <div className={styles.container}>
        <div className={styles.container3}>
          <div>
            <TextContainer
              icon={arrowLeft}
              text="Регистрация"
              onClick={() => navigate('/welcome')}
            />
            <Field
              icon={human}
              value={login}
              onChange={setLogin}
              text="Имя пользователя"
            />
            <Field
              icon={emailIcon}
              value={email}
              onChange={setEmail}
              text="Адрес эл. почты"
            />
            <Field
              icon={passwordIcon}
              value={password}
              onChange={setPassword}
              text="Пароль"
            />
            <Field
              icon={passwordIcon}
              value={confirmPassword}
              onChange={setConfirmPassword}
              text="Подтвердить пароль"
            />
          </div>
          <div>
            <button type="button" className={styles.button}>
              Зарегистрироваться
            </button>
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
                <icons.IconWithText text="Facebook" icon={facebook} />
              </a>
              <a href="http://localhost:3000/registration">
                <icons.IconWithText text="Google" icon={google} />
              </a>
            </div>
            <div className={styles.logIn}>
              Есть аккаунт?
              <button
                style={{ textDecoration: 'underline', marginLeft: '5px' }}
                type="button"
                onClick={() => navigate('/autorization')}
              >
                Войти
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Registration };
