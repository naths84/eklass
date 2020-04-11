import React, { useState, useEffect } from 'react';
import Select from 'components/Select/Select';

const SelectInput = ({ id, inputItem, callBack, displayErrors }) => {
  const { text, responses, correctResponse } = inputItem;

  const [value, setValue] = useState(responses[0]);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    callBack(id, isValid);
  }, [isValid]);

  const splitText = text.split('${input}');

  const handleChange = value => {
    setIsValid(value === correctResponse);
  };

  return (
    <div>
      <span>
        {splitText[0]}
        <Select
          onChangeHandler={handleChange}
          disabled={displayErrors}
          options={responses.map((response) => ({
            value: response,
            label: response,
          }))}
          inline
          value={value}
        />
        {splitText[1]}
      </span>
      {displayErrors && !isValid && <span>{'useful error message'}</span>}
    </div>
  );
};

export default SelectInput;
