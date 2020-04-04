import React, { Component } from "react";
//import XMLViewer from './react-xml-viewer';
//import xmlText from './equations_deuxieme_degre.xml'
import jsonData from "./eq_sec_deg.json";
import jsonTestData from "./test.json";
console.log(jsonData);

class DataContent extends Component {
  constructor() {
    super()
    this.questions = jsonData.quiz.question[0];
  }
  render() {
    return (
      <div>
        <h1>Quiz</h1>
        <h1>{this.question.type}</h1>
        <p>{this.question.name.text}</p>
        <div dangerouslySetInnerHTML={{ __html: this.question.questiontext.text }} />
      </div>
    )
  }
}

export default DataContent;
