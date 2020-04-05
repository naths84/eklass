import React, { Component } from "react";
import jsonData from "./question-example.json";
import MathJax from 'react-mathjax2';
// import Question from "./Question.js";
import QuestionAlt from "./QuestionAlt.js";

const DataContent = () => {
  const max = jsonData.length - 1;
  const tab = [];
  while(tab.length < 10){
    const rand = Math.round(Math.random() * max);
    if(tab.indexOf(rand) === -1) tab.push(rand);
  }
  console.log(tab);
  return (
    <div>
      <MathJax.Context>
        <div>
          <QuestionAlt index={tab[0]}/>
          <QuestionAlt index={tab[1]}/>
          <QuestionAlt index={tab[2]}/>
          <QuestionAlt index={tab[3]}/>
          <QuestionAlt index={tab[4]}/>
          <QuestionAlt index={tab[5]}/>
          <QuestionAlt index={tab[6]}/>
          <QuestionAlt index={tab[7]}/>
          <QuestionAlt index={tab[8]}/>
          <QuestionAlt index={tab[9]}/>
        </div>
      </MathJax.Context>
    </div>
  )
}

export default DataContent;
