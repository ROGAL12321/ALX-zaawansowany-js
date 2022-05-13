import React from 'react';
import PropTypes from 'prop-types';

import styles from './style.module.css';

function Button({ btnType, children }) {
  return (
    <button className={styles.button} type={btnType}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  btnType: 'button',
  children: null,
};

Button.propTypes = {
  btnType: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
