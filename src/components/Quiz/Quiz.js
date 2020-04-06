import React from "react";
import { useTranslation } from "react-i18next";
import Content from "./Content";

const Quiz = ({ competenceId, nbOfQuestions }) => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>Quiz : {t(competenceId)}</h1>
      <h5>{nbOfQuestions} questions are needed for this quizz</h5>
      <Content compId= { competenceId } nbQu={ nbOfQuestions }/>
    </div>
  );
};
export default Quiz;
