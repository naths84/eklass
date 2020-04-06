import React, { Component } from "react";
import jsonData from "./question-example.json";
import MathJax from 'react-mathjax2';
// import Question from "./Question.js";
import QuestionAlt from "./QuestionAlt.js";

const DataContent = (props) => {
  const max = jsonData.length - 1;
  const random_tab = [];
  while(random_tab.length < props.nbQu) {
    const rand = Math.round(Math.random() * max);
    if(random_tab.indexOf(rand) === -1) random_tab.push(rand);
  }
  console.log(random_tab);
  console.log(props.nbQu)
  return (
    <div>
      <MathJax.Context>
        <div>

          {random_tab.map((value, index) => {
                    return (
                        <QuestionAlt nbQu= {props.nbQu} index={random_tab[index]}/>
                    )
                })
            }
        </div>

      </MathJax.Context>
    </div>
  )
}

export default DataContent;
