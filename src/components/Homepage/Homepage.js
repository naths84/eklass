import React from "react";
import classNames from "classnames";
import { Link } from "@reach/router";
import { Button } from "react-bootstrap";

import mockData from "../../data/data";
import Vector from "components/Vector/Vector";

import styles from "./homepage.module.css";
import { useTranslation } from "react-i18next";

const Banner = (props) => {
  const { t, i18n } = useTranslation();
  return (
    <div>
      <h1 style={{marginTop:"50px"}} class="display-4">{t("welcome")}</h1>
      <h3 style={{marginTop:"20px"}} className={styles.writing}>{t("quomeGoal")}</h3>
      <h5 style={{marginTop:"70px"}} className={styles.writing}>{t("pickClass")}</h5>
    </div>
  );
};

const Class = (props) => {
  return (
    <Link to={props.to}>
      <Button className={styles.square} variant="outline-light" size="lg">
        {props.children}
      </Button>
    </Link>
  );
};

const Homepage = (props) => {
  return (
    <div>
      <Banner />
      <div className={classNames("mb-2", styles.container)}>
        {mockData &&
          Object.values(mockData.classLevels).map((classLevel) => {
            const { name } = classLevel;
            return (
              <Class
                key={`class-${name}`}
                to={`/class/${name}`}
                classData={classLevel}
              >
                {name}
              </Class>
            );
          })}
      </div>
    </div>
  );
};

export default Homepage;
