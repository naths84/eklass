import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";
import Quiz from '../Quiz/Quiz';
import { Navbar, Nav, NavDropdown} from "react-bootstrap";
import { Link } from "@reach/router";

import styles from "./QuizSetup.module.css";

const xml = '<hello>World</hello>'

export default function QuizSetup() {
    var chapter;
    return (
        <div className={styles.form}>
        <form>
            <div class="form-group">
               <select class="form-control form-control-lg" id="selectQuestion" style={{marginBottom : "20px"}}>
                    <option selected>Choose a chapter</option>
                    <option>Equations Easy</option>
                    <option>Equations Hard</option>
                </select>
               <select class="form-control form-control-lg" id="selectQuestionNb">
                    <option selected>Choose a number of questions</option>
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