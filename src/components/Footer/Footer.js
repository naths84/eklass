import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "@reach/router";

const ColumnLink = props => (
    <li style={{ display: "inline-block", fontSize: "15px", marginInlineStart: "10px", marginInlineEnd: "10px", marginTop: "30px"}}>
      <Link  style={{color:"#44A49C"}} to={props.to} >{props.children}</Link>
    </li>
)
  
const Footer = (props) => {
    const { t } = useTranslation();
    return (//style={{ position: "absolute", bottom: "0", width: "100%"}}
        <div >
             <footer>
                <ul>
                    <ColumnLink  to="/about/">{t("about")}</ColumnLink>
                    <ColumnLink   to="/contact/">Contact</ColumnLink>
                </ul>
            </footer>
        </div>
        
    )
} 

export default Footer;
