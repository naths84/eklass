import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "@reach/router";

import Hamburger from './Hamburger/Hamburger';
import Nav from './Nav/Nav';
import Vector from "components/Vector/Vector";

import styles from "./Header.module.css";

const Header = () => {
  const [sideNavToggled, setSideNavToggled] = useState(false);

  const wrapperClasses = classNames(styles.wrapper, {
    [styles.sideNavToggled]: sideNavToggled,
  });

  return (
    <div className={wrapperClasses}>
      <div className={styles.container}>

        <Link to="/" className={styles.brand}>
          <Vector type="logo-small" className={styles.logo} />
          <h2 className="screen-reader-only">Quome</h2>
        </Link>

        <Nav toggled={sideNavToggled} />

        <Hamburger 
          collapsed={sideNavToggled}
          toggleFunction={() => setSideNavToggled(!sideNavToggled)}
          className={styles.hamburger}
        />
      </div>
    </div>
  );
};

export default Header;
