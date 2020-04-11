import React from 'react';
import MathJax from 'react-mathjax2';
import { useTranslation } from 'react-i18next';

import mockData from 'data/data';

import QuizQuestion from '../QuizQuestion/QuizQuestion.js';
import Vector from 'components/Vector/Vector';

import jsonData from 'data/question-example.json';

import styles from './QuizContent.module.css';

const QuizContent = ({ classId, subjectId, competenceId, nbOfQuestions }) => {
  const { t } = useTranslation();

  const { subjects } = mockData;

  const max = jsonData.length - 1;
  const random_tab = [];

  while (random_tab.length < nbOfQuestions) {
    const rand = Math.round(Math.random() * max);
    if (random_tab.indexOf(rand) === -1) random_tab.push(rand);
  }

   return (
    <div>
      <p className={styles.link}>
        <span>{'url: '}</span>
        <a href={window.location.href}>
          {window.location.href}
        </a>
        <button
          onClick={() => navigator.clipboard.writeText(window.location.href)}
          className={styles.clipboardButton}
        >
          <Vector type="clipboard" />
        </button>
      </p>
      <h1>Quiz : {t(competenceId)}</h1>
      <h2>{`${classId} > ${t(subjects[subjectId])}`}</h2>
      <p>{nbOfQuestions} questions are needed for this quiz</p>

      <MathJax.Context>
        <div>
          {random_tab.map((value, index) => (
            <QuizQuestion
              key={`quiz-question-${index}`}
              nbQu={nbOfQuestions}
              index={random_tab[index]}
            />
          ))}
        </div>
      </MathJax.Context>
    </div>
  );
};

export default QuizContent;
