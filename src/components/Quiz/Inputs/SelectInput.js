import React, {useState, useEffect } from "react";
import LatexyString from 'components/LatexyString/LatexyString';

const SelectInput = ({ id, inputItem, callBack, displayErrors }) => {
  const { label, text, responses, correctResponse } = inputItem;

  const [value, setValue] = useState(responses[0]);
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
      { displayErrors && !isValid && <span>{'useful error message'}</span> }
      <span>
        {splitText[0]}
        <select value={value} onChange={handleChange} disabled={displayErrors}>
          {responses.map((response) => (
            <option key={`select-option-${response}`} value={response}>
              {response}
            </option>
          ))}
        </select>
        {splitText[1]}
      </span>
    </div>
  );
};


export default SelectInput;
