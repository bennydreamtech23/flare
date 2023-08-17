import Link from "next/link";
import React, { useState } from "react";
import Styles from "../styles/Nav.module.scss";

function Nav() {
  return (
    <header className={Styles.navBar}>
      <div className={Styles.siteTitle}>
        <Link href={"/"} className={Styles.siteHeading}>
          <h1>Flare</h1>
        </Link>
      </div>
    </header>
  );
}

export default Nav;
