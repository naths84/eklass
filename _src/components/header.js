import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.css"
import 'bootstrap/dist/css/bootstrap.css';
import {
     Navbar, Nav, NavbarBrand
} from 'react-bootstrap';


import { useTranslation } from 'react-i18next';

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Header = (props) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = code => {
        i18n.changeLanguage(code);
    };

    return (
        <div style={{ margin: `auto`, padding: `0 1rem` }}>
            <header style={{ marginBottom: `1.5rem` }}>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">{t('title')}</Navbar.Brand>
                    <button type="button" onClick={() => changeLanguage('en')}>
                        {t('translation:en')}
                    </button>
                    <button type="button" onClick={() => changeLanguage('fr')}>
                        {t('translation:fr')}
                    </button>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        </div>
        

    )
}

export default Header