import React, { Component, useState, useEffect } from "react";
import MathJax from "react-mathjax2";
import LatexyString from 'components/LatexyString/LatexyString';

import style from "./Question.module.css";

import NumberInput from './Inputs/NumberInput';
import SelectInput from './Inputs/SelectInput';

import data from "./question-example.json";

const Question = (props) => {
  const {
    name,
    questiontext,
    responseText,
    questionInputs,
    generalfeedback,
  } = data[props.index];

  const [submitted, setSubmitted] = useState(false);
  const [registeredInputs, setRegisteredInputs] = useState(questionInputs);

  useEffect(() => {
    console.log(registeredInputs);
  }, [registeredInputs])

  const resetResponses = (e) => {
    e.preventDefault();
    setSubmitted(false);
  };

  const submitResponses = (e) => {
    e.preventDefault();
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
      <p className={style.textToLeft} ><LatexyString string={questiontext.text} /></p>
      <h3>{responseText.text}</h3>
      <form class="needs-validation">
      {questionInputs &&
        Object.keys(questionInputs).map((key) => {
          const inputItem = questionInputs[key];
          if (inputItem.type === "number") {
            return (
                <div className={style.nbInput}> 
                <NumberInput
                key={`question-input-${key}`}
                id={key}
                inputItem={inputItem}
                callBack={handleInput}
                displayErrors={submitted}
                //required
              />
                </div>

              
            );
          }

          if (inputItem.type === "select") {
            return (
                <div className={style.selectInput}>
                    <SelectInput
                        key={`question-input-${key}`}
                        id={key}
                        inputItem={inputItem}
                        callBack={handleInput}
                        displayErrors={submitted}
                        //required
                    />
              </div>
            );
          }
        })}
      <div className={style.resetSubmitButtons} >
        <button type="submit" className={style.button} onClick={resetResponses} class="btn btn-primary mb-2">Reset</button>
        <button type="submit" className={style.button} onClick={submitResponses} class="btn btn-primary mb-2">Submit</button>
      </div>
      {submitted && (
          <div className={style.textToLeft} >
            <LatexyString string={generalfeedback.text} />
          </div>
        
      )}
      </form>
    </div>
  );
};

export default Question;
