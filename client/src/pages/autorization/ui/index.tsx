import { useState } from 'react';
import { WelcomeScreen } from 'shared/ui/welcome-screen';
import arrowLeft from 'shared/assets/img/arrow-left.svg';
import emailIcon from 'shared/assets/img/email.svg';
import passwordIcon from 'shared/assets/img/password.svg';
import facebook from 'shared/assets/img/facebook.svg';
import google from 'shared/assets/img/google.svg';
import { Field } from 'shared/ui/field';
import { icons } from 'shared/ui/icons';
import { TextContainer } from 'shared/ui/text-container';
import { useNavigate } from 'react-router';
import styles from './styles.module.scss';

const Autorization = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
              text="Войти в аккаунт"
              onClick={() => navigate('/welcome')}
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
            <div style={{ textAlign: 'end' }}>
              <a
                href="http://localhost:3000/autorization"
                style={{ color: '#fff' }}
              >
                Забыли пароль?
              </a>
            </div>
          </div>
          <div>
            <div style={{ textAlign: 'center', marginTop: '100px' }}>
              <a
                style={{ color: '#fff' }}
                href="http://localhost:3000/autorization"
              >
                Войти с номером телефона
              </a>
            </div>
            <button type="button" className={styles.button}>
              Войти
            </button>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <a
                href="http://localhost:3000/autorization"
                style={{ marginRight: '96px' }}
              >
                <icons.IconWithText text="Facebook" icon={facebook} />
              </a>
              <a href="http://localhost:3000/autorization">
                <icons.IconWithText text="Google" icon={google} />
              </a>
            </div>
            <div className={styles.logIn}>
              Нет аккаунта?
              <button
                style={{ textDecoration: 'underline', marginLeft: '5px' }}
                type="button"
                onClick={() => navigate('/registration')}
              >
                Зарегистрироваться
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Autorization };
