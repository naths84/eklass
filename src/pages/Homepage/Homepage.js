import React, { useState } from 'react';
import { Router } from '@reach/router';

import mockData from 'data/data';

import ClassList from 'components/ClassList/ClassList';
import SubjectsList from 'components/SubjectsList/SubjectsList';

import { useTranslation } from 'react-i18next';

const Homepage = () => {
  const { t } = useTranslation();

  return (
    <div className={'page-container'}>
      <h1>{t('welcome')}</h1>
      <h2>{t('quomeGoal')}</h2>

      <Router>
        <ClassList path="/" classData={mockData} />
        <SubjectsList path="class/:classId" />
      </Router>
    </div>
  );
};

export default Homepage;
