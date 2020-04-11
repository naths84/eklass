import React, {useState, useEffect } from "react";
import LatexyString from 'components/LatexyString/LatexyString';

import { useTranslation } from "react-i18next";

const SelectInput = ({ id, inputItem, callBack, displayErrors }) => {
  const { t } = useTranslation();

  const { label, text, responses, correctResponse } = inputItem;

  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    callBack(id, isValid);
  }, [isValid]) 

  const splitText = text.split("${input}");

  const handleChange = (e) => {
    setValue(e.target.value);
    setIsValid(e.target.value === correctResponse);
  };

  return (
    <div>
      <span>
        {splitText[0]}
        <select value={value} onChange={handleChange} disabled={displayErrors}>
        <option value=""></option>
          {responses.map((response) => (
            <option key={`select-option-${response}`} value={response}>
              {response}
            </option>
          ))}
        </select>
        {splitText[1]}
      </span>
      { displayErrors && !isValid && <span>{t("wrongAnswer")}</span> }
      { displayErrors && isValid && <span>{t("rightAnswer")}</span> }
    </div>
  );
};


export default SelectInput;
