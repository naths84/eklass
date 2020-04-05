import React from "react";
import Content from "./Content";

const Quiz = ({ competenceId, nbOfQuestions }) => {
  return (
    <div>
      <h1>Quiz {competenceId}</h1>
      <h5>{nbOfQuestions} questions are needed for this quizz</h5>
      <Content />
    </div>
  );
};
export default Quiz;
