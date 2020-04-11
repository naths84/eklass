import React from 'react';
import { Router } from '@reach/router';

import QuizSetup from './QuizSetup/QuizSetup';
import QuizContent from './QuizContent/QuizContent';

const Quiz = ({ competenceId, nbOfQuestions }) => {
  return (
    <div className={'page-container'}>
      <Router>
        <QuizSetup path="setup/:classId/:subjectId" />
        <QuizContent
          path="/:classId/:subjectId/:competenceId/:nbOfQuestions"
          competenceId={competenceId}
          nbQu={nbOfQuestions}
        />
      </Router>
    </div>
  );
};
export default Quiz;
