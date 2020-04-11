import React, { useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { navigate } from '@reach/router';

import styles from './QuizSetup.module.css';
import mockData from 'data/data';

import Select from 'components/Select/Select';

import generateNumberArray from 'utils/generateNumberArray';

export default function QuizSetup({ classId, subjectId }) {
  const { t } = useTranslation();

  const [competence, setCompetence] = useState('');
  const [nb, setNb] = useState(0);

  const {subjects, subjectCompetences} = mockData

  const competences = Object.values(subjectCompetences).find(
    (subjectCompetence) => subjectCompetence.subject === subjectId
  );

  const handleSubmit = () => {
    navigate(`/quiz/${classId}/${subjectId}/${competence}/${nb}`);
  };

  const numChoices = generateNumberArray().map((number) => ({
    label: number,
    value: number,
  }));

  return (
    <>
      <h1>{t('welcome')}</h1>
      <h2>{`${classId}: ${t(subjects[subjectId])}`}</h2>
      <div className={styles.container}>
        <Select
          className={styles.input}
          onChangeHandler={setCompetence}
          options={competences.competences.map((competence) => ({
            value: competence,
            label: t(competence),
          }))}
          label={t('competenceChoice')}
        />
        <Select
          className={styles.input}
          onChangeHandler={setNb}
          options={numChoices}
          label={t('nbOfQuestions')}
        />
        <button className={styles.button} onClick={handleSubmit} disabled={nb <= 0}>Begin</button>
      </div>
    </>
  );
}
