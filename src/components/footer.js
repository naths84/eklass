import React from "react"
import { Link } from "gatsby"
import styles from "./footer.css"


const ColumnLink = props => (
    <li style={{ display: "block", fontSize: "18px"}}>
      <Link to={props.to} >{props.children}</Link>
    </li>
)
  
const Footer = (props) => {
    return (
        <div>
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