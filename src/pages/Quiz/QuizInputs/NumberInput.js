import React, { useState, useEffect } from "react";
import LatexyString from 'components/LatexyString/LatexyString';
import styles from './NumberInput.module.css';

const NumberInput = ({ id, inputItem, callBack, displayErrors }) => {
  const { correctResponse, decimal } = inputItem;

  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  const updateParent = () => {
    callBack(id, isValid);
  }

  useEffect(() => {
    updateParent();
  }, [isValid]) 

  const handleChange = (e) => {
    setIsValid(e.target.value === correctResponse);
    setValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <label><LatexyString string={inputItem.label} /></label>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        step={decimal}
        disabled={displayErrors}
      />

      { displayErrors && !isValid && <span>{'useful error message'}</span> }

    </div>
  );
};


export default NumberInput;
