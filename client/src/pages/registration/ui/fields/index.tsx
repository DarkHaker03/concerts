import { useState } from 'react';
import { Field } from 'shared/ui/field';
import { icons } from 'shared/ui/icons';

const Fields = () => {
  const [login, setLogin] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <>
      <Field
        icon={<icons.Human />}
        value={login}
        onChange={setLogin}
        text="Имя пользователя"
      />
      <Field
        icon={<icons.Email />}
        value={email}
        onChange={setEmail}
        text="Адрес эл. почты"
      />
      <Field
        icon={<icons.Password />}
        value={password}
        onChange={setPassword}
        text="Пароль"
      />
      <Field
        icon={<icons.Password />}
        value={confirmPassword}
        onChange={setConfirmPassword}
        text="Подтвердить пароль"
      />
    </>
  );
};

export { Fields };
