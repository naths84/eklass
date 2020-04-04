import React from "react";
import { Link } from "@reach/router";

import { Navbar, Nav} from "react-bootstrap";

import { useTranslation } from "react-i18next";

import authSignOut from 'utils/authSignOut';

import styles from "./header.module.css";

const Header = (props) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div style={{ margin: `auto`}}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Navbar bg="dark" expand="lg">
          <Navbar.Brand href="/">{t("title")}</Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav"/>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className={styles.link} to="/">Quiz</Link>              
              <Link className={styles.link} to="/login">{t("loginItem")}</Link>              
              <Link className={styles.link} to={`/class/${Math.ceil(Math.random() * 10)}`}>Class</Link>
            </Nav>
            <button type="button" onClick={() => changeLanguage("en")}>
              {t("translation:en")}
            </button>

            <button type="button" onClick={() => changeLanguage("fr")}>
              {t("translation:fr")}
            </button>
          </Navbar.Collapse>

          <button onClick={authSignOut}>Sign out</button>
          
          <Nav>{props.user && props.user.displayName}</Nav>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
