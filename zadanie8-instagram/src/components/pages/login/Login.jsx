import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from 'components/layouts/main/Main';
import InputGroup from 'components/elements/input-group/InputGroup';
import Button from 'components/elements/button/Button';

import { loginUser } from 'services/firebase';
import { PublicRoute } from 'utils/AuthorizationRoutes';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [apiError, setApiError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // @TODO Walidacja

    loginUser(email, password)
      .then(() => {
        navigate('/dashboard');
      })
      .catch((error) => {
        setApiError(error.message);
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <PublicRoute>
      <Main>
        <form className="form" onSubmit={handleSubmit}>
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
          <Button btnType="submit">Sign in</Button>
          {apiError && <p>{apiError}</p>}
        </form>
      </Main>
    </PublicRoute>
  );
}

export default Login;
