import React, {Component} from 'react';
//import XMLViewer from './react-xml-viewer';
//import xmlText from './equations_deuxieme_degre.xml'
import jsonData from './eq_sec_deg.json'
import jsonTestData from './test.json';

class dataContent extends Component{
    render (){
        return(
            <div>
                <h1>Quiz</h1>
                    {jsonTestData.map((elem, i) => {
                    return <h1>{elem.type}</h1>
                }
            )}
                    
        </div>
        )

    }
}
        
export default dataContent;