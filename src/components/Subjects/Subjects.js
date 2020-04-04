import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "react-bootstrap";

import getClassLevelData from 'utils/getClassLevelData';
import mockData from "data/data";

import styles from "./Subjects.module.css";

const Subject = (props) => {
  return (
    <Button className="subject" variant="outline-primary" size="lg">
      {props.children}
    </Button>
  );
};

const Subjects = ({ classId }) => {
  const { t } = useTranslation();

  const currentClassLevelData = getClassLevelData(classId, mockData);

  return (
<div className={styles.test}>
<div className={styles.container}>
      <h2>{t("subjectPageTitle")}</h2>
      {currentClassLevelData.subjects.map(subject => (
        <Subject key={`subject-${subject.id}`}>{t(subject.name)}</Subject>
      ))}
    </div>
    </div>
  );
};

export default Subjects;
