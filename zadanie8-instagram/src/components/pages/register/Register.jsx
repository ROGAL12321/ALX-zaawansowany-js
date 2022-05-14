import React, { useState } from 'react';
import Main from 'components/layouts/main/Main';
import InputGroup from 'components/elements/input-group/InputGroup';
import Button from 'components/elements/button/Button';

import { registerUser } from 'services/firebase';

import styles from './style.module.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // @TODO Walidacja

    registerUser(email, password);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Main>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <InputGroup
          id="email"
          type="text"
          label="email"
          handleChange={handleEmailChange}
          inputValue={email}
        />
        <InputGroup
          id="password"
          type="password"
          label="password"
          handleChange={handlePasswordChange}
          inputValue={password}
        />
        <Button btnType="submit">Sign up</Button>
      </form>
      Hello from Register
    </Main>
  );
}

export default Register;
