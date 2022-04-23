import React from 'react';
import PropTypes from 'prop-types';

function InputGroup({ id, type, label, handleChange, inputValue }) {
  return (
    <div>
      <label htmlFor={id}>
        {label}
        <input type={type} id={id} onChange={handleChange} value={inputValue} />
      </label>
    </div>
  );
}

InputGroup.defaultProps = {
  id: '',
  type: 'text',
  label: '',
  handleChange: () => null,
  inputValue: '',
};

InputGroup.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  handleChange: PropTypes.func,
  inputValue: PropTypes.string,
};

export default InputGroup;
