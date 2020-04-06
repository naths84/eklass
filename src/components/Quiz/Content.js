import React, { Component } from "react";
import jsonData from "./question-example.json";
import MathJax from 'react-mathjax2';
// import Question from "./Question.js";
import QuestionAlt from "./QuestionAlt.js";

const DataContent = () => {
  const max = jsonData.length - 1;
  const random_tab = [];
  while(random_tab.length < 10){
    const rand = Math.round(Math.random() * max);
    if(random_tab.indexOf(rand) === -1) random_tab.push(rand);
  }
  console.log(random_tab);
  return (
    <div>
      <MathJax.Context>
        <div>
          <QuestionAlt index={random_tab[0]}/>
          <QuestionAlt index={random_tab[1]}/>
          <QuestionAlt index={random_tab[2]}/>
          <QuestionAlt index={random_tab[3]}/>
          <QuestionAlt index={random_tab[4]}/>
          <QuestionAlt index={random_tab[5]}/>
          <QuestionAlt index={random_tab[6]}/>
          <QuestionAlt index={random_tab[7]}/>
          <QuestionAlt index={random_tab[8]}/>
          <QuestionAlt index={random_tab[9]}/>
        </div>
      </MathJax.Context>
    </div>
  )
}

export default DataContent;
