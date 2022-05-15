import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOutUser } from 'services/firebase';
import { MainContext } from 'contexts/main';
import Button from '../button/Button';

import styles from './style.module.css';

function Header() {
  const navigate = useNavigate();
  const { currentUser, toggleTheme, isDarkTheme } = useContext(MainContext);

  const signOut = () => {
    signOutUser().then(() => navigate('/'));
  };

  const handleDarkTheme = () => {
    toggleTheme();
  };

  return (
    <header
      className={`${styles.header} ${isDarkTheme ? styles.headerInverted : ''}`}
    >
      <div className={`container ${styles.headerContainer}`}>
        <Link to="/" className={styles.logo}>
          <h1 className={styles.title}>Instagram App</h1>
        </Link>
        <nav className={styles.navigation}>
          <ul>
            {currentUser ? (
              <>
                <li>
                  <Link to="/create">
                    <Button>Add post</Button>
                  </Link>
                </li>
                <li>
                  <Button btnType="button" onClick={handleDarkTheme}>
                    {' '}
                    Dark theme{' '}
                  </Button>
                </li>
                <li>
                  <img
                    className={styles.avatar}
                    src={currentUser.photoURL}
                    alt="avatar"
                  />
                </li>
                <li>
                  <Link to="/me">
                    <Button>My profile</Button>
                  </Link>
                </li>
                <li>
                  <Button onClick={signOut}>Sign out</Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">
                    <Button>Sign in</Button>
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    <Button>Sign up</Button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
