import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyCU0XblPqpCnjryjfzQyl2GS2MHUIFuAM0',
  authDomain: 'alxchat1.firebaseapp.com',
  projectId: 'alxchat1',
  databaseURL:
    'https://alxchat1-default-rtdb.europe-west1.firebasedatabase.app',
  storageBucket: 'alxchat1.appspot.com',
  messagingSenderId: '250637046697',
  appId: '1:250637046697:web:4856742326a9baf903eab8',
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export default database;
