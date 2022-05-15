import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ENDPOINTS from 'consts/endpoints';

import Main from 'components/layouts/main/Main';
import InputGroup from 'components/elements/input-group/InputGroup';
import Button from 'components/elements/button/Button';

import { addFileToStorage, save } from 'services/firebase';

import { RestrictedRoute } from 'utils/AuthorizationRoutes';
import { MainContext } from 'contexts/main';

function AddPost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [apiError] = useState('');
  const { currentUser } = useContext(MainContext);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Ta funkcja bedzie pochodzic z serwisu firebase
    addFileToStorage(file)
      .then((url) => {
        const newPost = {
          title,
          description,
          image: url,
          author: {
            name: currentUser.displayName,
            avatar: currentUser.photoURL,
          },
        };

        return save(ENDPOINTS.posts, newPost);
      })
      .then(() => {
        navigate('/dashboard');
      });
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
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
          <InputGroup
            id="file"
            type="file"
            label="file"
            handleChange={handleFileChange}
          />
          <Button btnType="submit">Create post</Button>
          {apiError && <p>{apiError}</p>}
        </form>
      </Main>
    </RestrictedRoute>
  );
}

export default AddPost;
