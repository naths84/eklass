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
      <h1 style={{ textAlign: "center", marginLeft: "30px", marginBottom: "30px"}}>{t("presentation")}</h1>
       <p class="text-left">{t("description_about")}</p>
       <iframe width="800" height="400" src="https://www.youtube.com/embed/9Ccm_r8d-to" 
       frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
       </iframe>
      </div>
      
    </div>
  )
}

export default About