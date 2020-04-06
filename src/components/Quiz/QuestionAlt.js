import React, { Component, useState, useEffect } from "react";
import MathJax from "react-mathjax2";
import LatexyString from 'components/LatexyString/LatexyString';

import style from "./Question.module.css";

import NumberInput from './Inputs/NumberInput';
import SelectInput from './Inputs/SelectInput';

import data1101 from "./1101-quadratic.json";
import data1103 from "./Quiz_pythagore_11.json";

const Question = (props) => {
    var dataId = props.compId
    var data = ""
    if(dataId == "id-1101-c1") {
        data = data1101
    } else if (dataId == "id-1103-c1") {
        data = data1103
    }

  const {
    name,
    questiontext,
    responseText,
    questionInputs,
    generalfeedback,
  } = data[props.index];

  const [submitted, setSubmitted] = useState(false);
  const [registeredInputs, setRegisteredInputs] = useState(questionInputs);
    const [allValid, setAllValid] = useState(true)

  useEffect(() => {
    console.log(registeredInputs);
  }, [registeredInputs])

  const resetResponses = () => {
    setSubmitted(false);
  };

  const submitResponses = () => {
    setSubmitted(true);

    // Check here is responses are correct and do something
    // Check here is responses are correct and do something
    Object.keys(registeredInputs).forEach((registeredInputId) => {
        if (registeredInputs[registeredInputId].valid == false) {
            setAllValid(false)
        }
      console.log(
        `${registeredInputId} is valid: ${registeredInputs[registeredInputId].valid}`
      )}
    );
    console.log(allValid)

  };

  var classNames = require('classnames');

  const classes = classNames (
        {[style.valid]: allValid},
        {[style.notValid]: !allValid},
        style.defaultStyle,
    "nonCssModule-className"
    );

  const handleInput = (id, valid) => {
    const newInputs = {...registeredInputs};
    newInputs[id].valid = valid;

    setRegisteredInputs({
      ...newInputs
    })
  };


  return (
    <div className={style.container} classNames={classes}>
      <h2>{name.text}</h2>
      <p className={style.textToLeft} ><LatexyString string={questiontext.text} /></p>
      <h3>{responseText.text}</h3>
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
                    />
              </div>
            );
          }
        })}
      <div className={style.resetSubmitButtons} >
        <button className={style.button} onClick={resetResponses}>Reset</button>
        <button className={style.button} onClick={submitResponses}>Submit</button>
      </div>
      {submitted && (
          <div className={style.textToLeft} >
            <LatexyString string={generalfeedback.text} />
          </div>
        
      )}
    </div>
  );
};

export default Question;
