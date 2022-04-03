import React, { useState, useEffect } from 'react';
import { onValue, ref, set } from 'firebase/database';

import database from '../../firebase';

import styles from './App.module.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [personInputValue, setPersonInputValue] = useState('');
  const [messageInputValue, setMessageInputValue] = useState('');

  useEffect(() => {
    onValue(ref(database, '/'), (snapshot) => {
      const data = snapshot.val();
      setMessages(Object.values(data ?? {}));
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMessageId = Date.now();

    set(ref(database, `/${newMessageId}`), {
      id: newMessageId,
      person: personInputValue,
      message: messageInputValue,
    });

    setPersonInputValue('');
    setMessageInputValue('');
  };

  const handlePersonChange = (event) => {
    setPersonInputValue(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessageInputValue(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <h1>Chat</h1>
      <div className={styles.chatBox}>
        <ul>
          {messages.map((message) => (
            <li key={message.id}>
              {message.person} wrote: {message.message}
            </li>
          ))}
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="person">
            Person
            <input
              type="text"
              id="person"
              value={personInputValue}
              onChange={handlePersonChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="message">
            Message
            <input
              type="text"
              id="message"
              onChange={handleMessageChange}
              value={messageInputValue}
            />
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
