import React, {useState, useEffect } from "react";
import LatexyString from 'components/LatexyString/LatexyString';

const SelectInput = ({ id, inputItem, callBack, displayErrors, validAnswer }) => {
  const { label, text, responses, correctResponse } = inputItem;
  
  const [value, setValue] = useState(responses[0]);
  var [isValid, setIsValid] = useState(false);
    var good = false

    console.log(isValid)
  console.log(isValid)
  console.log(isValid)
  var test = 9

  useEffect(() => {
    callBack(id, isValid);
  }, [isValid]) 

  const splitText = text.split("${input}");

  const handleChange = (e) => {
    setValue(e.target.value);
    setIsValid(e.target.value === correctResponse);
    validAnswer = isValid
    if (e.target.value === correctResponse) {
        good= true
    }
    console.log(isValid)
    console.log(isValid)
    console.log(isValid)
  };

  return (
    <div>
      <label><LatexyString string={inputItem.label} /></label>
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
