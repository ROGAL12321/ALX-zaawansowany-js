import React, { useState } from 'react';

import Main from 'components/layouts/main/Main';
import InputGroup from 'components/elements/input-group/InputGroup';
import Button from 'components/elements/button/Button';

function MyProfile() {
  const [name, setName] = useState('');
  const [isError, setIsError] = useState(false);

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.length === 0) {
      setIsError(true);
      return;
    }

    console.log(name);
  };

  return (
    <Main>
      <h1>My profile</h1>
      <form onSubmit={handleSubmit}>
        <InputGroup
          id="name"
          type="text"
          label="Name"
          handleChange={handleInputChange}
          inputValue={name}
        />
        {isError && <p>The field shouldnt be empty</p>}
        <Button btnType="submit">Send</Button>
      </form>
    </Main>
  );
}

export default MyProfile;
