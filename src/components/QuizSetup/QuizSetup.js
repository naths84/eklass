import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";
import Quiz from '../Quiz/Quiz';
import { Navbar, Nav, NavDropdown} from "react-bootstrap";
import { Link } from "@reach/router";

import styles from "./QuizSetup.module.css";
import mockData from "data/data";

const xml = '<hello>World</hello>'


export default function QuizSetup({ subjectId }) {
    const { t } = useTranslation();

    const competences = Object.values(mockData.subjectCompetences).find(
        (subjectCompetence) => subjectCompetence.subject === subjectId
      );
    return (
        <div className={styles.form}>
        <form>
            <div class="form-group">
               <select class="form-control form-control-lg" id="selectQuestion" style={{marginBottom : "20px"}}>
                    <option selected>{t("competenceChoice")}</option>
                    {competences.competences.map(competence => (
                        (<option>{t(competence)}</option>)
                    ))}
                </select>
               <select class="form-control form-control-lg" id="selectQuestionNb">
                    <option selected>{t("nbOfQuestions")}</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
            </div>
            <Link  to="/quiz">
            <button type="submit" class="btn btn-primary mb-2">Begin</button>
            </Link>
        </form>
        </div>

    )
}