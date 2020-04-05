import React, { useState, useEffect } from "react";
import MathJax from "react-mathjax2";

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
      <label>{inputItem.label}</label>
      { displayErrors && !isValid && <span>{'useful error message'}</span> }
      <input
        type="number"
        value={value}
        onChange={handleChange}
        step={decimal}
        disabled={displayErrors}
      />
    </div>
  );
};


export default NumberInput;
