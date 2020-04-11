import React, { Component } from "react";
//import XMLViewer from './react-xml-viewer';
//import xmlText from './equations_deuxieme_degre.xml'
import jsonData from "./equations_deuxieme-degre.json";
import MathJax from 'react-mathjax2';
import jsonTestData from "./test.json";
console.log(jsonData);

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
            <h1>Quiz : 2 questions d'equations du deuxieme degre</h1>
            {/* <h1>{this.question.type}</h1> */}
            <p>{this.question.name.text}</p>
            {/* <div dangerouslySetInnerHTML={{__html: this.question.questiontext.text}}/> */}

            <p>Mettre l'équation <MathJax.Node> { '-37\\cdot  x^2-36\\cdot  x-19=-15\\cdot  x^2+15\\cdot  x\\' } </MathJax.Node>
            sous la forme <MathJax.Node> { 'a\\cdot x^2+b\\cdot x+c=0\\' } </MathJax.Node> 
            calculer la valeur de <MathJax.Node> { '\\Delta \\' } </MathJax.Node> et déterminer combien de solutions. <br></br>
            
            <label for="name">Valeur de delta :</label>
            <input type="text" id="name" name="name" required
                minlength="4" maxlength="8" size="10">
            </input>
            <label for="name">Nombre de solutions :</label>
            <input type="text" id="name" name="name" required
                minlength="4" maxlength="8" size="10">
            </input>
            </p>
            
            <div dangerouslySetInnerHTML={{__html: this.question.generalfeedback.text}} />
          </div>
        </MathJax.Context>
      </div>
    )
  }
}

export default DataContent;
