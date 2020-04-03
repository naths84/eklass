import React from "react"

import { Button } from "react-bootstrap";

import "./homepage.css"

const Class = (props) => {
    return (
        <Button className="square" href="#Subjects" variant="primary" size="lg">
            {props.children}
        </Button>
    )
}

const Homepage = (props) => {
    return (
        <div className="mb-2">
            <Class>9e</Class>
            <Class>10e</Class>
            <Class>11e</Class>
        </div>
        
    )
} 

export default Homepage;