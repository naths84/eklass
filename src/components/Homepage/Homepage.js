import React from "react"
import { Link } from "@reach/router";

import { Button } from "react-bootstrap";

import "./homepage.css"

const Class = (props) => {
    return (
        <Button className="square" href="#Subjects" variant="primary" size="lg">
            {props.children}
            <Link to={props.to} >{props.children}</Link>
        </Button>
    )
}

const Homepage = (props) => {
    return (
        <div className="mb-2">
            <Class to="/class/9">9e</Class>
            <Class to="/class/10">10e</Class>
            <Class to="/class/11">11e</Class>
        </div>
        
    )
} 

export default Homepage;