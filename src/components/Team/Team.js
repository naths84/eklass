import React from "react"

import styles from "./Team.module.css";
import { useTranslation } from "react-i18next";

const About = (props) => {
    const { t } = useTranslation();

  return (      
      <div>
        <h1 style={{ textAlign: "center", margin: "20px 0"}}>{t("team")}</h1>
        <h5 style={{ color: "#44a49c"}}>{t("Presentation")}</h5>
        <ul style={{ textAlign: "center", listStyle:"none"}}>
            <li>{t("L1")}</li>
            <li>{t("L2")}</li>
            <li>{t("L3")}</li>
            <li>{t("L4")}</li>
            <li>{t("L5")}</li>
            <li>{t("L6")}</li>
            <li>{t("L7")}</li>
            <li>{t("L8")}</li>   
        </ul>


      </div>
  )
}

export default About