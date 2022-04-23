import React, { useState, useEffect } from 'react';

import Button from 'components/elements/button/Button';
import InputGroup from 'components/elements/input-group/InputGroup';
import Main from 'components/layouts/main/Main';

import { observe, get, save } from 'services/firebase';
import styles from './App.module.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [personInputValue, setPersonInputValue] = useState('');
  const [messageInputValue, setMessageInputValue] = useState('');

  useEffect(() => {
    // funkcja zaawansowana. Nasluchiwanie na nowe wiadomosci
    observe('messages', setMessages);

    // Odczyt obecnego uzytkownika z bazy danych
    get('currentUser').then((user) => {
      if (user && user.name) {
        setPersonInputValue(user.name);
      }
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // @TODO: Add validation

    save('messages', {
      person: personInputValue,
      message: messageInputValue,
    });

    setMessageInputValue('');
  };

  const handleMessageChange = (event) => {
    setMessageInputValue(event.target.value);
  };

  return (
    <Main>
      <div>
        <h1>Chat</h1>
        <div className={styles.chatBox}>
          <ul>
            {messages.map((message) => (
              <li key={message.id}>
                <span className={styles.person}>{message.person}</span>
                <p className={styles.message}>{message.message}</p>
              </li>
            ))}
          </ul>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <InputGroup
            id="person"
            type="text"
            label="Person"
            inputValue={personInputValue}
          />
          <InputGroup
            id="message"
            type="text"
            label="Message"
            handleChange={handleMessageChange}
            inputValue={messageInputValue}
          />
          {/* Napis send jest specjalnym propsem children */}
          <Button btnType="submit">Send</Button>
        </form>
      </div>
    </Main>
  );
}

export default App;
