import React, {Component} from 'react';
//import XMLViewer from './react-xml-viewer';
//import xmlText from './equations_deuxieme_degre.xml'
import dataContent from './dataContent'


const xml = '<hello>World</hello>'

const Quiz = () => {
    return (
        <div>
            <h1>Quiz</h1>
            <dataContent/>
        </div>
    )
}
export default Quiz;
