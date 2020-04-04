import React, { Component } from "react";
//import XMLViewer from './react-xml-viewer';
//import xmlText from './equations_deuxieme_degre.xml'
import DataContent from "./DataContent";

const xml = "<hello>World</hello>";

const Quiz = () => {
  return (
    <div>
      <h1>Quiz</h1>
      <DataContent />
    </div>
  );
};
export default Quiz;
