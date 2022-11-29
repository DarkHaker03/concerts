import { useState } from 'react';
import { icons } from 'shared/ui/icons';
import { Field } from 'shared/ui/field';

const Fields = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
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

export { Fields };
