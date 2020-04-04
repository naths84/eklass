import React, { Component } from 'react'
import MathJax from 'react-mathjax2'

const xml = '<hello>World</hello>'
const tex = `f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi`


export default function Quiz() {
    return (
        <div>
            <MathJax.Context input='tex'>
                <div>
                    This is an inline math formula: <MathJax.Node inline> { `f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi` }</MathJax.Node>
                </div>
            </MathJax.Context>
        </div>
    );
}
