import React, { Component } from "react";
import MathJax from "react-mathjax2";

import style from "./Question.module.css";

class Question extends Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      isCorrect: false,

      a: "",
      b: "",
      c: "",
      d: "",
      e: "0",

      emptyState: {
        a: true,
        b: true,
        c: true,
        d: true,
        e: true,
      },

      correctState: {
        a: false,
        b: false,
        c: false,
        d: false,
        e: false,
      },
    };
  }

  resetForm = () => {
    console.log("here");
    this.setState({
      submitted: false,
      isCorrect: false,

      a: "",
      b: "",
      c: "",
      d: "",
      e: "0",

      emptyState: {
        a: true,
        b: true,
        c: true,
        d: true,
        e: true,
      },

      correctState: {
        a: false,
        b: false,
        c: false,
        d: false,
        e: false,
      },
    });
  };

  handleInputAChange = (event) => {
    this.setState({
      a: event.target.value,
    });
  };

  handleInputBChange = (event) => {
    this.setState({
      b: event.target.value,
    });
  };

  handleInputCChange = (event) => {
    this.setState({
      c: event.target.value,
    });
  };

  handleInputDChange = (event) => {
    this.setState({
      d: event.target.value,
    });
  };

  handleDropdownChange = (event) => {
    this.setState({
      e: event.target.value,
    });
  };

  handleSubmit = (event) => {
    console.log("handleSubmit");
    event.preventDefault();

    this.setState({
      submitted: true,
    });

    const placeholderCorrectState = { ...this.state.correctState };
    const placeholderEmptyState = { ...this.state.emptyState };

    // console.log(placeHolderCorrectState);

    if (this.state.a.length > 0) {
      // alert("a is empty");
      placeholderEmptyState.a = false;
      return;
    }

    if (this.state.b.length > 0) {
      // alert("b is empty");
      placeholderEmptyState.b = false;
      return;
    }

    if (this.state.c.length > 0) {
      // alert("c is empty");
      placeholderEmptyState.c = false;
      return;
    }

    if (this.state.d.length > 0) {
      // alert("d is empty");
      placeholderEmptyState.d = false;
      return;
    }

    // alert(
    //   `${this.state.a} ${this.state.b} ${this.state.c} ${this.state.d} ${this.state.e}`
    // );

    if (parseInt(this.state.a) !== -22) {
      placeholderCorrectState.a = false;
    }
    if (parseInt(this.state.b) !== -51) {
      placeholderCorrectState.b = false;
    }
    if (parseInt(this.state.c) !== -19) {
      placeholderCorrectState.c = false;
    }
    if (parseInt(this.state.d) !== 929) {
      placeholderCorrectState.d = false;
    }
    if (parseInt(this.state.e) !== 2) {
      placeholderCorrectState.e = false;
    }

    this.setState({
      correctState: placeholderCorrectState,
      emptyState: placeholderEmptyState,
    });
  };

  render() {
    const {
      submitted,
      a,
      b,
      c,
      d,
      e,
      correctState,
      emptyState,
    } = this.state;
    return (
      <div className={style.container}>
        <p>
          Mettre l'équation{" "}
          <MathJax.Node>
            {"-37cdot  x^2-36cdot  x-19=-15cdot  x^2+15cdot  x "}
          </MathJax.Node>{" "}
          sous la forme <MathJax.Node>{"acdot x^2+bcdot x+c=0 "}</MathJax.Node>,
          calculer la valeur de <MathJax.Node>{"Delta  "}</MathJax.Node> et
          déterminer combien de solutions l'équation possède. (Vous pouvez
          utiliser la calculatrice pour déterminer la valeur de{" "}
          <MathJax.Node>{"Delta "}</MathJax.Node>.)
        </p>
        <div>
          {submitted && !correctState.a && <span>Wrong answer</span>}
          {submitted && !emptyState.a && <span>Please enter a number</span>}
          <label>a =</label>
          <input type="number" value={a} onChange={this.handleInputAChange} />
        </div>
        <div>
          {submitted && !correctState.b && <span>Wrong answer</span>}
          {submitted && !emptyState.b && <span>Please enter a number</span>}
          <label>b =</label>
          <input type="number" value={b} onChange={this.handleInputBChange} />
        </div>
        <div>
          {submitted && !correctState.c && <span>Wrong answer</span>}
          {submitted && !emptyState.c && <span>Please enter a number</span>}
          <label>c =</label>
          <input type="number" value={c} onChange={this.handleInputCChange} />
        </div>

        <MathJax.Context>
          <div>
            {submitted && !correctState.d && <span>Wrong answer</span>}
            {submitted && !emptyState.d && <span>Please enter a number</span>}
            <label>
              <MathJax.Node> {" Delta  "}</MathJax.Node> =
            </label>
            <input type="number" value={d} onChange={this.handleInputDChange} />
          </div>
        </MathJax.Context>

        <div>
          <label>How many solutions does the equation has ?</label>
          <select value={e} onChange={this.handleDropdownChange}>
            <option value="2">2</option>
            <option value="1">1</option>
            <option value="0">0</option>
          </select>
        </div>
        <button onClick={this.handleSubmit}>Submit</button>
        <button onClick={this.resetForm}>reset</button>

        {submitted && (
          <p>
            On met l'équation{" "}
            <MathJax.Node>
              {"-37cdot  x^2-36cdot  x-19=-15cdot  x^2+15cdot  x"}
            </MathJax.Node>{" "}
            sous la forme <MathJax.Node>{"acdot x^2+bcdot x+c=0"}</MathJax.Node>
            ].
            <MathJax.Node>
              {"(-37cdot  x^2-36cdot  x-19=-15cdot  x^2+15cdot  x)"}
            </MathJax.Node>
            .
            <MathJax.Node>
              {
                "(-22cdot  x^2-36cdot  x-19=15cdot  x text{ où on a soustrait de chaque côté }-15cdot  x^2)"
              }
            </MathJax.Node>
            .
            <MathJax.Node>
              {
                "(-22cdot  x^2-51cdot  x-19=0\t text{ où on a soustrait de chaque côté }15cdot  x)"
              }
            </MathJax.Node>
            . Ainsi,{" "}
            <MathJax.Node>{"a=-22,b=-51 \t text{ et } c=-19]"}</MathJax.Node>.
            On peut maintenant calculer la valeur de{" "}
            <MathJax.Node>{"[Delta]"}</MathJax.Node>.:
            <MathJax.Node>
              {"(Delta=b^2-4cdot a cdot c=(-51)^2-4cdot (-22)cdot (-19)=929. )"}
            </MathJax.Node>
            Vu que <MathJax.Node>{"[Delta>0]"}</MathJax.Node>, l'équation a deux
            solutions réelles.
          </p>
        )}
      </div>
    );
  }
}

export default Question;
