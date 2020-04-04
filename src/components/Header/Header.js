import React from "react";
import { Link } from "@reach/router";

import { Navbar, Nav, NavDropdown} from "react-bootstrap";

import { useTranslation } from "react-i18next";

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
            <NavDropdown title="Languages" id="collasible-nav-dropdown">
              <NavDropdown.Item>
              <button type="button" onClick={() => changeLanguage("en")}>
                {t("translation:en")}
              </button>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <button type="button" onClick={() => changeLanguage("fr")}>
                  {t("translation:fr")}
                </button>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Know another language ? Help us now </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
