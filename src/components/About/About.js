import React from "react"

import Vector from 'components/Vector/Vector';

import styles from "./About.module.css";

const About = (props) => {
  return (
    <div>
      <div align="left" className={styles.Vector}>
        <Vector type='logo' className={styles.logo} />
      </div>
      
      <div class="jumbotron">
      <h1 style={{ textAlign: "left", marginLeft: "30px"}}>Presentation</h1>
        <p class="text-left">The worldwide coronavirus crisis is a unique opportunity to propose a global platform for school girls and boys, students and teachers across the world to communicate and learn.
          Our idea is to propose a platform focused on the learning of mathematics through practice. We want to provide an extensive program arranged by topics going through all school levels before university.
          Given a selection of chosen topics and range of levels, the student will be able to randomly generate a chosen number of unique exercises and practice on them. She/he will then have access to detailed automated feedback about each exercise's resolution.
          On the other hand, given a selection of chosen topics, a teacher will be able to generate a unique set of exercises for each of her/his students with automated solutions. In this way, a student can submit her/his solutions independently of her/his classmates, the set is automatically corrected, and the detailed solutions can be consulted afterwards by the student.
          We are planning to first propose the platform in English, French, Italian, Portuguese, Spanish, and possibly Asian languages. The subject is restricted to mathematics at a primary and secondary level, but could possibly be adapted to other subjects and higher levels.</p>
      </div>
    </div>
  )
}

export default About