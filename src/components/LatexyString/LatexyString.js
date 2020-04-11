import React from 'react';
import MathJax from "react-mathjax2";
import ReactHtmlParser from 'react-html-parser';

/**
 * If will return a MathJax node for any substring found between [startlatex endlatex]
 */
const LatexyString = ({string}) => {
  const splitText = string.split(/\[|\]/)
  return (
    splitText.map(splitTextItem => {
      if(splitTextItem.includes('startlatexinline') && splitTextItem.includes('endlatexinline')){
        let latexString = splitTextItem.replace('startlatexinline', '').replace('endlatexinline', '');
        return <MathJax.Node inline>{latexString}</MathJax.Node>;
      }else if (splitTextItem.includes('startlatex') && splitTextItem.includes('endlatex')) {
        let latexString = splitTextItem.replace('startlatex', '').replace('endlatex', '');
         return <MathJax.Node>{latexString}</MathJax.Node>;
      }else{
        return <span>{ReactHtmlParser(splitTextItem)}</span>
      }
    })
  )
}

export default LatexyString;