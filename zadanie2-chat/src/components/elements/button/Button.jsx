import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.css';
// const props = {
//   btnType = 'submit'
// }
// console.log(props.btnType)

// const { btnType } = props;
// console.log(btnType)

function Button({ btnType, children }) {
  return (
    <button className={styles.button} type={btnType}>
      {children}
    </button>
  );
}

// defaultPropsy warto stosowac, jesli nasza aplikacja moze sie wywalic jesli nie podamy typu danych (na przyklad chcemy przejsc funkcja map po undefined, to aplikacja sie wywali)
Button.defaultProps = {
  btnType: 'button',
  children: null,
};

// propTypes warto stosowac, zeby dokumentowac swoje komponenty, bo inaczej po jakims czasie zapomnimy jak nasza aplikacja jest skomponowana i jakie propsy przyjmuje
Button.propTypes = {
  btnType: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
