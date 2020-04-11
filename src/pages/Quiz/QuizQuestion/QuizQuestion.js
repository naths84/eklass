import React, { useState, useEffect } from 'react';
import i18next from 'i18next';

import LatexyString from 'components/LatexyString/LatexyString';
import NumberInput from '../QuizInputs/NumberInput';
import SelectInput from '../QuizInputs/SelectInput';

import data from 'data/question-example.json';

import data1101fr from 'data/1101-fr-quadratic.json';
import data1101en from 'data/1101-en-quadratic.json';
import data1101po from 'data/1101-po-quadratic.json';

import data1003fr from 'data/1003-fr-pythagore.json';
import data1003pt from 'data/1003-pt-pythagore.json';
import data1003en from 'data/1003-en-pythagore.json';

import data901fr from 'data/901-fr-ppmc.json';
import data901en from 'data/901-en-ppmc.json';

import data1103fr from 'data/1103-fr-pythagore.json';
import data1103pt from 'data/1103-pt-pythagore.json';
import data1103en from 'data/1103-en-pythagore.json';

import style from './QuizQuestion.module.css';

const QuizQuestion = ({ index, competenceId }) => {
  let data = {};
  const getLanguage = () => i18next.language;

  if (competenceId === 'id-1101-c1' && getLanguage() === 'fr') {
    data = data1101fr;
  } else if (competenceId === 'id-1101-c1' && getLanguage() === 'en') {
    data = data1101en;
  } else if (competenceId === 'id-1101-c1' && getLanguage() === 'pt') {
    data = data1101po;
  } else if (competenceId === 'id-1103-c1' && getLanguage() === 'fr') {
    data = data1103fr;
  } else if (competenceId === 'id-1103-c1' && getLanguage() === 'en') {
    data = data1103en;
  } else if (competenceId === 'id-1103-c1' && getLanguage() === 'pt') {
    data = data1103pt;
  } else if (competenceId === 'id-1003-c1' && getLanguage() === 'fr') {
    data = data1003fr;
  } else if (competenceId === 'id-1003-c1' && getLanguage() === 'pt') {
    data = data1003pt;
  } else if (competenceId === 'id-1003-c1' && getLanguage() === 'en') {
    data = data1003en;
  } else if (competenceId === 'id-902-c8' && getLanguage() === 'en') {
    data = data901en;
  } else if (competenceId === 'id-902-c8' && getLanguage() == 'fr') {
    data = data901fr;
  }

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
              <div key={`question-input-${key}`} className={style.nbInput}>
                <NumberInput
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
              <div key={`question-input-${key}`} className={style.selectInput}>
                <SelectInput
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

export default QuizQuestion;
