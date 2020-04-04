import React from "react";
import { Link } from "@reach/router";

import { Navbar, Nav} from "react-bootstrap";

import { useTranslation } from "react-i18next";

import styles from "./header.module.css";

const Header = (props) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div style={{ margin: `auto`, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand >
            <Link to="/">
            {t("title")}
            </Link>
          </Navbar.Brand>

          <button type="button" onClick={() => changeLanguage("en")}>
            {t("translation:en")}
          </button>

          <button type="button" onClick={() => changeLanguage("fr")}>
            {t("translation:fr")}
          </button>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className={styles.link} to="/about">About</Link>
              <Link className={styles.link} to="/contact">Contact</Link>
              <Link className={styles.link} to={`/class/${Math.ceil(Math.random() * 10)}`}>Class</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
