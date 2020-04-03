import React from "react"

import { Button } from "react-bootstrap";

import "./homepage.css"

const Homepage = (props) => {
    return (
        <div className="mb-2">
            <Button className="square" variant="primary" size="lg">
                9e
            </Button>{' '}
            <Button className="square" variant="primary" size="lg">
                10e
            </Button>
            <Button className="square" variant="primary" size="lg">
                11e
            </Button>
        </div>
        
    )
} 

export default Homepage;