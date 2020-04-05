import React, { Component, useState, useEffect } from "react";
import MathJax from "react-mathjax2";
import LatexyString from 'components/LatexyString/LatexyString';

import style from "./Question.module.css";

import NumberInput from './Inputs/NumberInput';
import SelectInput from './Inputs/SelectInput';

import data from "./question-example.json";

const Question = () => {
  const {
    name,
    questiontext,
    responseText,
    questionInputs,
    generalfeedback,
  } = data;

  const [submitted, setSubmitted] = useState(false);
  const [registeredInputs, setRegisteredInputs] = useState(questionInputs);

  useEffect(() => {
    console.log(registeredInputs);
  }, [registeredInputs])

  const resetResponses = () => {
    setSubmitted(false);
  };

  const submitResponses = () => {
    setSubmitted(true);

    // Check here is responses are correct and do something
  };

  const handleInput = (id, valid) => {
    const newInputs = {...registeredInputs};
    newInputs[id].valid = valid;

    setRegisteredInputs({
      ...newInputs
    })
  };


  return (
    <div className={style.container} >
      <h2>{name.text}</h2>
      <p><LatexyString string={questiontext.text} /></p>
      <h3>{responseText.text}</h3>
      {questionInputs &&
        Object.keys(questionInputs).map((key) => {
          const inputItem = questionInputs[key];
          if (inputItem.type === "number") {
            return (
              <NumberInput
                key={`question-input-${key}`}
                id={key}
                inputItem={inputItem}
                callBack={handleInput}
                displayErrors={submitted}
              />
            );
          }

          if (inputItem.type === "select") {
            return (
              <SelectInput
                key={`question-input-${key}`}
                id={key}
                inputItem={inputItem}
                callBack={handleInput}
                displayErrors={submitted}
              />
            );
          }
        })}
      <div>
        <button onClick={resetResponses}>Reset</button>
        <button onClick={submitResponses}>Submit</button>
      </div>
      {submitted && (
        <div dangerouslySetInnerHTML={{ __html: generalfeedback.text }} />
      )}
    </div>
  );
};

export default Question;
