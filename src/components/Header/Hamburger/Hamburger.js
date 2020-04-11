import React from 'react';
import classNames from 'classnames';

import styles from './Hamburger.module.css';

function Hamburger({collapsed, toggleFunction, className}) {
  const buttonClasses = classNames(styles.button, {[styles.collapsed]: collapsed}, className);

  return (
    <button
      className={buttonClasses}
      onClick={toggleFunction}
    >
      <span className={styles.bar} />
      <span className="screen-reader-only">Toggle menu</span>
    </button>
  )
}

export default Hamburger;