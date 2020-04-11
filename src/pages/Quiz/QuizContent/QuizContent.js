import React from 'react';
import MathJax from 'react-mathjax2';
import { useTranslation } from 'react-i18next';

import mockData from 'data/data';

import QuizQuestion from '../QuizQuestion/QuizQuestion.js';
import Vector from 'components/Vector/Vector';

import styles from './QuizContent.module.css';

import data901fr from 'data/901-fr-ppmc.json';
import data1003fr from 'data/1003-fr-pythagore.json';
import data1101fr from 'data/1101-fr-quadratic.json';
import data1103fr from 'data/1103-pt-pythagore.json';

const QuizContent = ({ classId, subjectId, competenceId, nbOfQuestions }) => {
  const { t } = useTranslation();

  const { subjects } = mockData;

  var id = 0;
  var jsonFile = '';

  if (competenceId === 'id-1101-c1') {
    id = 1101;
    jsonFile = data1101fr;
  }

  if (competenceId === 'id-1103-c1') {
    id = 1103;
    jsonFile = data1103fr;
  }

  if (competenceId === 'id-1003-c1') {
    id = 1003;
    jsonFile = data1003fr;
  }

  if (competenceId === 'id-902-c8') {
    id = 901;
    jsonFile = data901fr;
  }

  const max = jsonFile.length - 1;
  const random_tab = [];

  while (random_tab.length < parseInt(nbOfQuestions)) {
    const rand = Math.round(Math.random() * max);
    if (random_tab.indexOf(rand) === -1) random_tab.push(rand);
  }

  return (
    <div>
      <p className={styles.link}>
        <span>{'url: '}</span>
        <a href={window.location.href}>{window.location.href}</a>
        <button
          onClick={() => navigator.clipboard.writeText(window.location.href)}
          className={styles.clipboardButton}
        >
          <Vector type="clipboard" />
        </button>
      </p>
      <h1>Quiz : {t(competenceId)}</h1>
      <h2>{`${classId} > ${t(subjects[subjectId])}`}</h2>

      {id !== 0 ? (
        <>
          <p>{nbOfQuestions} questions are needed for this quiz</p>

          <MathJax.Context>
            <div>
              {random_tab.map((value, index) => (
                <QuizQuestion
                  key={`quiz-question-${index}`}
                  nbQu={nbOfQuestions}
                  index={random_tab[index]}
                  competenceId={competenceId}
                />
              ))}
            </div>
          </MathJax.Context>
        </>
      ) : (
        <div>
          <p> Pas de quiz pour cette compétence pour le moment </p>
        </div>
      )}
    </div>
  );
};

export default QuizContent;
