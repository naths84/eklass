import React, { useState, useEffect } from "react";
import LatexyString from 'components/LatexyString/LatexyString';

const NumberInput = ({ id, inputItem, callBack, displayErrors }) => {
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
    <div>
      <label><LatexyString string={inputItem.label} /></label>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        step={decimal}
        disabled={displayErrors}
        //required
      />
      { displayErrors && !isValid && <span>{'Wrong Answer !'}</span> }
      { displayErrors && isValid && <span>{'Right Answer !'}</span> }

    </div>
  );
};


export default NumberInput;
