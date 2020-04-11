import React, { useState, useEffect } from "react";
import LatexyString from 'components/LatexyString/LatexyString';
import styles from './NumberInput.module.css';

import { useTranslation } from "react-i18next";

const NumberInput = ({ id, inputItem, callBack, displayErrors }) => {
  const { t } = useTranslation();

  const { correctResponse, decimal } = inputItem;

  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    callBack(id, isValid);
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
        //required
      />
      { displayErrors && !isValid && <span>{t("wrongAnswer")}</span> }
      { displayErrors && isValid && <span>{t("rightAnswer")}</span> }
    </div>
  );
};


export default NumberInput;
