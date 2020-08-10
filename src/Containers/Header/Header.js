import React from "react";
import styles from "./Header.module.css";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <Link to="/" className={styles.logoLink}>
          <img
            alt="logo"
            src={require("../../database/images/icons/headerImg/PatrolLogo.png")}
            className={styles.logo}
          />
        </Link>
        <ul className={styles.navigationList}>
          <li className={styles.navigationListItem}>
            <NavLink
              exact
              to="/"
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
            >
              На головну
            </NavLink>
          </li>
          <li className={styles.navigationListItem}>
            <NavLink
              to="/last-duty"
              className={styles.navLink}
              activeClassName={styles.activeNavLink}
            >
              Остання зміна
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
