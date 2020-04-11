import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from '@reach/router';

import getClassLevelData from 'utils/getClassLevelData';
import mockData from 'data/data';

import styles from './SubjectsList.module.css';

const SubjectsList = ({ classId }) => {
  const { t } = useTranslation();

  const currentClassLevelData = getClassLevelData(classId, mockData);

  return (
    <>
      <p className={styles.intro}>{t('subjectPageTitle')}</p>
      <div className={styles.container}>
        {currentClassLevelData.subjects.map((subject) => (
          <Link
            className={styles.square}
            to={`/quiz/setup/${classId}/${subject.id}`}
            key={`subject-${subject.id}`}
          >
            {t(subject.name)}
          </Link>
        ))}
      </div>
    </>
  );
};

export default SubjectsList;
