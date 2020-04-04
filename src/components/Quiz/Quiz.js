import React from 'react'


const xml = '<hello>World</hello>'

/*const equations_deuxieme_degre={
    question: "quel est le delta de ?",
    answer: 3,
    // etc
}*/

//<Quiz quiz={equations_deuxieme_degre} />

class Quiz extends React.Component{
   render(){
       const question = this.props.equations_deuxieme_degre.text;
       return(
           <div className="Quiz">
               <div className="Quest">
                   {question}
               </div>
               <div className="Rep"></div>
           </div>
       );
   }
}

export default Quiz;

