import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from 'components/layouts/main/Main';
import InputGroup from 'components/elements/input-group/InputGroup';
import Button from 'components/elements/button/Button';

import { RestrictedRoute } from 'utils/AuthorizationRoutes';

function AddPost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [apiError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate('/dashboard');
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <RestrictedRoute>
      <Main>
        <form className="form" onSubmit={handleSubmit}>
          <InputGroup
            id="title"
            type="text"
            label="title"
            handleChange={handleTitleChange}
            inputValue={title}
          />
          <InputGroup
            id="description"
            type="text"
            label="description"
            handleChange={handleDescriptionChange}
            inputValue={description}
          />
          <Button btnType="submit">Create post</Button>
          {apiError && <p>{apiError}</p>}
        </form>
      </Main>
    </RestrictedRoute>
  );
}

export default AddPost;
