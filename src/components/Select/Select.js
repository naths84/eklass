import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Select.module.css';

/**
 * A styled select dropdown component
 *
 * @param {function} props.onChangeHandler
 * @param {array} props.options
 * @param {string} props.className
 */
function Select({ onChangeHandler, options, className, disabled, inline, label }) {
  const [selectValue, setSelectValue] = useState(options[0].value);
  const containerClassNames = classNames(
    styles.container,
    { [styles.inline]: inline },
    className
  );

  const handleChange = e => {
    const updatedValue = e.target.value;
    setSelectValue(updatedValue);
    onChangeHandler(updatedValue);
  }

  console.log('selectValue : ', selectValue);

  return (
    <div className={containerClassNames}>
      {label && <label>{label}</label>}
      <select onChange={handleChange} disabled={disabled} value={selectValue}>
        {options &&
          options.map((option, index) => (
            <option key={`option-${option.value}-$index`} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </div>
  );
}

Select.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,

  className: PropTypes.string,
  disabled: PropTypes.bool,
  inline: PropTypes.bool,
  value: PropTypes.string
};

Select.defaultProps = {
  className: '',
  disabled: false,
};

export default Select;
