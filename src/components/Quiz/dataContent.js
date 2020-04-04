import React, { Component } from "react";
//import XMLViewer from './react-xml-viewer';
//import xmlText from './equations_deuxieme_degre.xml'
import jsonData from "./eq_sec_deg.json";
import jsonTestData from "./test.json";
    console.log(jsonData);

class DataContent extends Component {
  render() {
    return (
      <div>
        <h1>Quiz</h1>
        {jsonTestData.map((elem, i) => {
          console.log(elem)
          return (
            <div key={`question-element-${i}`}>
              <h1>{elem['-type']}</h1>
              <p>{elem.name.text}</p> 
              <div dangerouslySetInnerHTML={{__html: elem.questiontext.text}} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default DataContent;
