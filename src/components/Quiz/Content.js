import React, { Component } from "react";
import jsonData from "./equations_deuxieme-degre.json";
import MathJax from 'react-mathjax2';
// import Question from "./Question.js";
import QuestionAlt from "./QuestionAlt.js";

const DataContent = () => {
  const questionData = jsonData.quiz.question[0];

  return (
    <div>
      <MathJax.Context>
        <div>
          <QuestionAlt question={questionData} />
        </div>
      </MathJax.Context>
    </div>
  )
}

export default DataContent;
