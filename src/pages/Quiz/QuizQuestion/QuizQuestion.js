import React, { useState, useEffect } from 'react';
import LatexyString from 'components/LatexyString/LatexyString';

import style from './QuizQuestion.module.css';

import NumberInput from '../QuizInputs/NumberInput';
import SelectInput from '../QuizInputs/SelectInput';

import data from 'data/question-example.json';

const Question = ({ index }) => {
  const {
    name,
    questiontext,
    responseText,
    questionInputs,
    generalfeedback,
  } = data[index];

  const [submitted, setSubmitted] = useState(false);
  const [registeredInputs, setRegisteredInputs] = useState(questionInputs);

  useEffect(() => {
    console.log(registeredInputs);
  }, [registeredInputs]);

  const resetResponses = () => {
    setSubmitted(false);
  };

  const submitResponses = () => {
    setSubmitted(true);

    // Check here is responses are correct and do something
  };

  const handleInput = (id, valid) => {
    const newInputs = { ...registeredInputs };
    newInputs[id].valid = valid;

    setRegisteredInputs({
      ...newInputs,
    });
  };

  return (
    <div className={style.container}>
      <h2>{name.text}</h2>
      <p className={style.textToLeft}>
        <LatexyString string={questiontext.text} />
      </p>
      <h3>{responseText.text}</h3>
      {questionInputs &&
        Object.keys(questionInputs).map((key) => {
          const inputItem = questionInputs[key];
          if (inputItem.type === 'number') {
            return (
              <div className={style.nbInput}>
                <NumberInput
                  key={`question-input-${key}`}
                  id={key}
                  inputItem={inputItem}
                  callBack={handleInput}
                  displayErrors={submitted}
                />
              </div>
            );
          }

          if (inputItem.type === 'select') {
            return (
              <div className={style.selectInput}>
                <SelectInput
                  key={`question-input-${key}`}
                  id={key}
                  inputItem={inputItem}
                  callBack={handleInput}
                  displayErrors={submitted}
                />
              </div>
            );
          }

          return null;
        })}
      <div className={style.resetSubmitButtons}>
        <button className={style.button} onClick={resetResponses}>
          Reset
        </button>
        <button className={style.button} onClick={submitResponses}>
          Submit
        </button>
      </div>
      {submitted && (
        <div className={style.textToLeft}>
          <LatexyString string={generalfeedback.text} />
        </div>
      )}
    </div>
  );
};

export default Question;
