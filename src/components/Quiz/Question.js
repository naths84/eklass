import React, { Component } from 'react'
import MathJax from 'react-mathjax2';



class Question extends Component {
	constructor(props) {
		super(props)

		this.state = {
			a: '',
            b: '',
            c: '',
            d: '',
			e: '0'
		}
	}

	handleInputAChange = event => {
		this.setState({
			a: event.target.value
        })
	}

	handleInputBChange = event => {
		this.setState({
			b: event.target.value
		})
    }
    
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
					<label><MathJax.Node> {' \Delta \ '}</MathJax.Node> =</label>
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
		)
	}
}

export default Question