import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { toast, ToastContainer } from 'react-toastify';

import Header from 'components/elements/header/Header';
import Footer from 'components/elements/footer/Footer';

import 'react-toastify/dist/ReactToastify.css';
import { observeOnlyNew } from 'services/firebase';
import { MainContext } from 'contexts/main';
import styles from './style.module.css';

function Main({ children }) {
  const { currentUser } = useContext(MainContext);

  useEffect(() => {
    observeOnlyNew('notifications', (notification) => {
      if (notification.reciepient === currentUser.displayName) {
        toast(notification.value);
      }
    });
  }, []);

  return (
    <>
      <Header />
      <main className={`container ${styles.main}`}>{children}</main>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
