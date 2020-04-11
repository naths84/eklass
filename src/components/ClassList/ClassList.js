import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from "react-i18next";
import { Link } from '@reach/router';

import styles from './ClassList.module.css';

const ClassList = ({ classData }) => {
  const { t } = useTranslation();

  return (
    <>
      <p className={styles.intro} >{t("pickClass")}</p>
      <div className={styles.container}>
        {classData &&
          Object.values(classData.classLevels).map((classLevel) => {
            const { name } = classLevel;
            return (
              <Link
                key={`class-${name}`}
                to={`/class/${name}`}
                className={styles.square}
              >
                {name}
              </Link>
            );
          })}
      </div>
    </>
  );
};

ClassList.propTypes = {
  classData: PropTypes.object,
  setSelectedClass: PropTypes.func.isRequired
}

ClassList.defaultProps = {
  setSelectedClass: () => {}
}

export default ClassList;