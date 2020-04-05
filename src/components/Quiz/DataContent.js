import React, { Component } from "react";
//import XMLViewer from './react-xml-viewer';
//import xmlText from './equations_deuxieme_degre.xml'
import jsonData from "./equations_deuxieme-degre.json";
import jsonTestSplit from "./question-example.json"
import MathJax from 'react-mathjax2';
import jsonTestData from "./test.json";
import Question from "./Question.js";
console.log(jsonData);

class DataContent extends Component {
  constructor() {
    super()
    this.question = jsonData.quiz.question[0];
    this.testSplit = jsonTestSplit.questiontext;
  }
  render() {
    return (
      <div>
        <MathJax.Context>
          <div>
            <h1>Quiz</h1>
            
            <Question />
            <h1> {this.testSplit.text}</h1>
            <h1>{this.question.type}</h1>
            <p>{this.question.name.text}</p>
            <div dangerouslySetInnerHTML={{ __html: this.question.questiontext.text }} />
            <div dangerouslySetInnerHTML={{ __html: this.question.generalfeedback.text }} />
          </div>


        </MathJax.Context>
      </div>
    )
  }
}

export default DataContent;
