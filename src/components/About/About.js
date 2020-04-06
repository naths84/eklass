import React from "react"

import Vector from 'components/Vector/Vector';

import styles from "./About.module.css";

import { useTranslation } from "react-i18next";

const About = (props) => {
  const { t } = useTranslation();
  return (
    <div>
      <div align="left" className={styles.Vector}>
        <Vector type='logo' className={styles.logo} />
      </div>
      
      <div class="jumbotron" style={{padding: "30px"}}>
      <h1 style={{ textAlign: "left", marginLeft: "30px", marginBottom: "30px"}}>Presentation</h1>
       <p class="text-left">{t("description_about")}</p>
      </div>
    </div>
  )
}

export default About