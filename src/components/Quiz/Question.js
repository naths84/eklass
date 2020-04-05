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
<<<<<<< HEAD
    
    handleInputCChange = event => {
		this.setState({
			c: event.target.value
		})
	}

	handleInputDChange = event => {
		this.setState({
			d: event.target.value
		})
	}

	handleDropdownChange = event => {
		this.setState({
			e: event.target.value
		})
	}

	handleSubmit = event => {
        event.preventDefault()
        if(this.state.a.length < 1){
            alert("a is empty");
            return;
        }
        if(this.state.b.length < 1){
            alert("b is empty");
            return;
        }
        if(this.state.c.length < 1){
            alert("c is empty");
            return;
        }
        if(this.state.d.length < 1){
            alert("d is empty");
            return;
        }
		alert(`${this.state.a} ${this.state.b} ${this.state.c} ${this.state.d} ${this.state.e}`)
        
        if(parseInt(this.state.a) != -22){
            alert("a is wrong ! ")
        }
        if(parseInt(this.state.b) != -51){
            alert("b is wrong ! ")
        }
        if(parseInt(this.state.c) != -19){
            alert("c is wrong ! ")
        }
        if(parseInt(this.state.d) != 929){
            alert("d is wrong ! ")
        }
        if(parseInt(this.state.e) != 2){
            alert("e is wrong ! ")
        }
	}

	render() {
		const { a, b, c, d, e } = this.state
		return (
            <div>
                <p style={{display:"inline-block"}}>Mettre l'équation <MathJax.Node>{ '-37\cdot  x^2-36\cdot  x-19=-15\cdot  x^2+15\cdot  x\ '}</MathJax.Node> sous la forme <MathJax.Node>{ '\a\cdot x^2+b\cdot x+c=0\ '}</MathJax.Node>, calculer la valeur de <MathJax.Node>{'\Delta \ '}</MathJax.Node> et déterminer combien de solutions l'équation possède. (Vous pouvez utiliser la calculatrice pour déterminer la valeur de <MathJax.Node>{'\Delta\ '}</MathJax.Node>.)</p>
			<form onSubmit={this.handleSubmit}>
				<div>
					<label>a =</label>
					<input
                        type="number"
                        value={a}
						onChange={this.handleInputAChange}
					/>
				</div>
                <div>
					<label>b =</label>
					<input
                        type="number"
						value={b}
						onChange={this.handleInputBChange}
					/>
				</div>
                <div>
					<label>c =</label>
					<input
						type="number"
						value={c}
						onChange={this.handleInputCChange}
					/>
				</div>
                <MathJax.Context>
				<div>
					<label><MathJax.Node>{' \Delta \ '}</MathJax.Node> =</label>
					<input
                        type="number"
						value={d}
						onChange={this.handleInputDChange}
					/>
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
				<button type="submit">Submit</button>
			</form>
            </div>

		)
	}
=======

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

    if (parseInt(this.state.a) != -22) {
      placeholderCorrectState.a = false;
    }
    if (parseInt(this.state.b) != -51) {
      placeholderCorrectState.b = false;
    }
    if (parseInt(this.state.c) != -19) {
      placeholderCorrectState.c = false;
    }
    if (parseInt(this.state.d) != 929) {
      placeholderCorrectState.d = false;
    }
    if (parseInt(this.state.e) != 2) {
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
      isCorrect,
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
        <div>
          {submitted && (!correctState.a || !emptyState.a) && (
            <span>error message</span>
          )}
          <label>a =</label>
          <input type="number" value={a} onChange={this.handleInputAChange} />
        </div>
        <div>
          {submitted && (!correctState.b || !emptyState.b) && (
            <span>error message</span>
          )}
          <label>b =</label>
          <input type="number" value={b} onChange={this.handleInputBChange} />
        </div>
        <div>
          {submitted && (!correctState.c || !emptyState.c) && (
            <span>error message</span>
          )}
          <label>c =</label>
          <input type="number" value={c} onChange={this.handleInputCChange} />
        </div>

        <MathJax.Context>
          <div>
            {submitted && (!correctState.d || !emptyState.d) && (
              <span>error message</span>
            )}
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
          <div
            dangerouslySetInnerHTML={{
              __html: `<![CDATA[<p><br>On met l'équation [-37\cdot  x^2-36\cdot  x-19=-15\cdot  x^2+15\cdot  x] sous la forme [a\cdot x^2+b\cdot x+c=0]. <br><br>(-37\cdot  x^2-36\cdot  x-19=-15\cdot  x^2+15\cdot  x).<br>(-22\cdot  x^2-36\cdot  x-19=15\cdot  x\text{ où on a soustrait de chaque côté }-15\cdot  x^2). <br>(-22\cdot  x^2-51\cdot  x-19=0\text{ où on a soustrait de chaque côté }15\cdot  x). <br><br> Ainsi, [a=-22,b=-51 \text{ et } c=-19].<br><br> On peut maintenant calculer la valeur de [\Delta]: <br> (\Delta=b^2-4\cdot a \cdot c=(-51)^2-4\cdot (-22)\cdot (-19)=929. )<br><br> Vu que [\Delta>0], l'équation a deux solutions réelles.</p>`,
            }}
          />
        )}
      </div>
    );
  }
>>>>>>> bb0f736aec549a22f8d462a641fc82b2f9115653
}

export default Question;
