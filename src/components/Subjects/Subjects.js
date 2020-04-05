import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";
import { Link } from "@reach/router";

import getClassLevelData from 'utils/getClassLevelData';
import mockData from "data/data";

import styles from "./Subjects.module.css";

const Subject = (props) => {
  return (
      <Link to={props.to}>
        <Button className={styles.subject} variant="outline-light" size="lg">
          {props.children}
        </Button>
      </Link>
    
  );
};

const Subjects = ({ classId }) => {
  const { t } = useTranslation();

  const currentClassLevelData = getClassLevelData(classId, mockData);

  return (
<div className={styles.test}>
<div className={styles.container}>
      <h2 className={styles.writing}>{t("subjectPageTitle")}</h2>
      {currentClassLevelData.subjects.map(subject => (
        <Subject to={`/quizSetup/${subject.id}`} key={`subject-${subject.id}`}>{t(subject.name)}</Subject>
      ))}
    </div>
    </div>
  );
};

export default Subjects;
