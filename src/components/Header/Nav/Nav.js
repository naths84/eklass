import React from "react";
import PropTypes from 'prop-types';
import { Link } from "@reach/router";
import classNames from "classnames";
import { useTranslation } from "react-i18next";

import Select from 'components/Select/Select';
import styles from "./Nav.module.css";

const Nav = ({toggled}) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = value => {
    const language = value;
    i18n.changeLanguage(language);
  };

  const containerClasses = classNames(styles.container, {[styles.toggled]: toggled})

  return (
    <nav className={containerClasses}>
      <Link to="/about">{t("about")}</Link>
      <Link to="/team">{t("team")}</Link>
      <Link to="/contact">{t("contact")}</Link>

      <Select 
        onChangeHandler={changeLanguage}
        options={i18n.languages.map(language => ({value: language, label: t(language)}))}
      />

      <Link to="/login">{t("loginItem")}</Link>
      <Link to="/signout">{t("signoutItem")}</Link>
    </nav>
  );
};

Nav.propTypes = {
  toggled: PropTypes.bool
};

Nav.defaultProps = {
  toggled: false
}

export default Nav;
