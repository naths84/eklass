import React from "react"
import { Link } from "@reach/router";
import styles from "./footer.css"


const ColumnLink = props => (
    <li style={{ display: "inline-block", fontSize: "15px", marginInlineStart: "10px", marginInlineEnd: "10px"}}>
      <Link to={props.to} >{props.children}</Link>
    </li>
)
  
const Footer = (props) => {
    return (
        <div style={{ position: "absolute", bottom: "0", width: "100%"}}>
             <footer>
                <ul>
                    <ColumnLink to="/about/">About</ColumnLink>
                    <ColumnLink to="/contact/">Contact</ColumnLink>
                </ul>
            </footer>
        </div>
        
    )
} 

export default Footer