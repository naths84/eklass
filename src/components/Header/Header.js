import React from "react";
import { Link } from "@reach/router";

import { Navbar, Nav, NavDropdown} from "react-bootstrap";

import { useTranslation } from "react-i18next";

import Vector from 'components/Vector/Vector';

import authSignOut from 'utils/authSignOut';
import styles from "./header.module.css";

const Header = (props) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div className={styles.mynavbar}>
      <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">
                <Vector type='logo-small' className={styles.logo} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className={styles.leftlink}> 
                        <Link  to="/about/" style={{ textDecoration: 'none', color:"#44A49C"}}>
                            {t("about")}
                        </Link>
                    </Nav.Link>
                    <Nav.Link className={styles.leftlink}> 
                        <Link  to="/team" style={{ textDecoration: 'none', color:"#44A49C"}}>
                        {t("team")}
                        </Link>
                    </Nav.Link>
                    <Nav.Link className={styles.leftlink}> 
                        <Link  to="/contact/" style={{ textDecoration: 'none', color:"#44A49C"}}>
                        {t("contact")}
                        </Link>
                    </Nav.Link>
                </Nav>

                <Nav className="nav-right" >
                    <NavDropdown  title="Languages" id="collasible-nav-dropdown" className={styles.link}>
                        <NavDropdown.Item  onClick={() => changeLanguage("en")}>
                            {t("translation:English")}
                        </NavDropdown.Item>
                        <NavDropdown.Item onClick={() => changeLanguage("fr")}>
                            {t("translation:Français")}
                        </NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link > 
                        <Link  to="/login" style={{ textDecoration: 'none', color:"#44A49C"}}>
                            {t("loginItem")}
                        </Link>
                    </Nav.Link>
                    
                    <Nav.Link onClick={authSignOut} className={styles.link}>
                        <Link  to="/signout" style={{ textDecoration: 'none', color:"#44A49C"}}>
                            {t("signoutItem")}
                        </Link>
                    </Nav.Link>

                    <Nav>{props.user && props.user.displayName}</Nav>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

      </header>
    </div>
  );
};

export default Header;
