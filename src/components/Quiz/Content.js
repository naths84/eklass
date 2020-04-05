import React, { Component } from "react";
import jsonData from "./equations_deuxieme-degre.json";
import MathJax from 'react-mathjax2';
import Question from "./Question.js";

class DataContent extends Component {
  constructor() {
    super()
    this.question = jsonData.quiz.question[0];
  }
  render() {
    return (
      <div>
        <MathJax.Context>
          <div>
            <Question />
          </div>
        </MathJax.Context>
      </div>
    )
  }
}

export default DataContent;
