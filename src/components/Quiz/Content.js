import React, { Component } from "react";
import MathJax from 'react-mathjax2';
// import Question from "./Question.js";
import QuestionAlt from "./QuestionAlt.js";
import jsonData from "./1101-quadratic.json";

const DataContent = (props) => {
    var id = 0
    var jsonFile = ""
    console.log(props.compId)
    console.log(props.compId)
    
    console.log(props.compId)
    
    if (props.compId=="id-1101-c1") {
        console.log(1101)
        id = 1101
        jsonFile = jsonData
    }
    if (id != 0) {
        const max = jsonFile.length - 1;
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
                                <QuestionAlt compId={props.compId} nbQu={props.nbQu} index={random_tab[index]}/>
                            )
                        })
                    }
                </div>
            </MathJax.Context>
            </div>
        )
    } else {
        return (
            <div>
                <p> Pas de quiz pour cette compétence pour le moment </p>
            </div>
        )
    }
  
}

export default DataContent;
