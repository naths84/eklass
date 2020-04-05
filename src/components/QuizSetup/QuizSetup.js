import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "@reach/router";

import styles from "./QuizSetup.module.css";
import mockData from "data/data";

var l1 = "id-901";
var l2 = 5;

export default function QuizSetup({ subjectId }) {
  var state = { value: '' }

  const { t } = useTranslation();

  const competences = Object.values(mockData.subjectCompetences).find(
    (subjectCompetence) => subjectCompetence.subject === subjectId
  );
  const handleChange = (e) => {
    //l1 = e.target.value
  };
  return (
    <div className={styles.form}>
      <form action={`/quiz/${l1}/${l2}`} class="needs-validation">
        <div class="form-group">
          <select onChange={handleChange} class="custom-select" id="selectQuestion" required>
            <option value="">{t("competenceChoice")}</option>
            {competences.competences.map((competence) => (
              <option value={competence}>{t(competence)}</option>
            ))}
          </select>
        </div>
        <div class="form-group">
          <select class="custom-select" id="selectQuestionNb" required>
            <option value="">{t("nbOfQuestions")}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        
        <button id="beginQuiz" type="submit" class="btn btn-primary mb-2">Begin</button>

      </form>
    </div>
    
  );
}
