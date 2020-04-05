import React, { Component } from "react";
import jsonData from "./equations_deuxieme-degre.json";
import jsonTestSplit from "./question-example.json"
import MathJax from 'react-mathjax2';
import Question from "./Question.js";

class DataContent extends Component {
  constructor() {
    super()
    this.question = jsonData.quiz.question[0];
    this.testSplit = jsonTestSplit.questiontext.text;
    console.log(this.testSplit.split(/\[|\]/));
  }
  render() {
    return (
      <div>
        <MathJax.Context>
          <div>
            <Question />
            <h1> {this.testSplit}</h1>
          </div>
        </MathJax.Context>
      </div>
    )
  }
}

export default DataContent;
