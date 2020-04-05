import React, { Component, useState, useEffect } from "react";
import MathJax from "react-mathjax2";
import LatexyString from 'components/LatexyString/LatexyString';

import style from "./Question.module.css";

import NumberInput from './Inputs/NumberInput';
import SelectInput from './Inputs/SelectInput';

import data from "./question-example.json";


const QuestionAlt = (props) => { 
  const {
    name,
    questiontext,
    responseText,
    questionInputs,
    generalfeedback,
  } = data;


  const [submitted, setSubmitted] = useState(false);
  const [registeredInputs, setRegisteredInputs] = useState(questionInputs);
  var validAns = false

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
    <div className={style.container} style={(submitted && ((validAns==true && {border: "solid 2px #00FF00"}))) || {border: "solid 2px #CCCCCC"}}>
      <h2>{name.text}</h2>
      <p  className={style.textLeft} ><LatexyString string={questiontext.text} /></p>
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
                validAnswer={validAns}
              />
            );
          }
        })}
      <div>
        <button onClick={resetResponses}>Reset</button>
        {2 ==2 && <button onClick={submitResponses}>Submit</button>}
      </div>
      {submitted && (
        <div  className={style.textLeft} dangerouslySetInnerHTML={{ __html: generalfeedback.text }} />
      )}
    </div>
  );
};

export default QuestionAlt;
