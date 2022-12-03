import { useState } from 'react';
import { Field } from 'shared/ui/field';
import { icons } from 'shared/ui/icons';

const Profile = () => {
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

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
    </>
  );
};
export { Profile };
