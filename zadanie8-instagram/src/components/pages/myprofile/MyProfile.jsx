import React, { useState } from 'react';
import Main from 'components/layouts/main/Main';
import InputGroup from 'components/elements/input-group/InputGroup';
import { auth } from 'services/firebase';
import Button from 'components/elements/button/Button';

import { onAuthStateChanged, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function MyProfile() {
  const [currentUser, setCurrentUser] = useState(null);
  const [name, setName] = useState('');
  const [avatar, setAvatar] = useState('');
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    setCurrentUser(user);
  });

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAvatarChange = (event) => {
    setAvatar(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: avatar,
    })
      .then(() => {
        navigate('/dashboard');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  console.log(currentUser);

  return (
    <Main>
      <form className="form" onSubmit={handleSubmit}>
        <InputGroup
          id="name"
          type="text"
          label="name"
          handleChange={handleNameChange}
          inputValue={name}
        />
        <InputGroup
          id="avatar"
          type="text"
          label="avatar"
          handleChange={handleAvatarChange}
          inputValue={avatar}
        />
        <Button btnType="submit">Save</Button>
      </form>
    </Main>
  );
}

export default MyProfile;
