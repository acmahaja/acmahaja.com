import styles from "../styles/Components/Navbar.module.css";

import Link from "next/link";
import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  function toggleNavBar() {
    setToggleNav(!toggleNav);
    console.log(toggleNav);
  }

  useEffect(() => {
    AOS.init();
  }, [toggleNav]);

  return (
    <nav className={styles.Navbar}>
      <div className={styles.Brand} />
      <div className={styles.NavbarCollapse}>
        <div className={styles.NavbarToggle} onClick={toggleNavBar}></div>
        <div
          onClick={toggleNavBar}
          className={`${styles.FadeOut} ${
            toggleNav ? styles.NavbarDisplayTrue : styles.NavbarDisplayFalse
          }`}
        ></div>
        <ul
          data-aos={`${toggleNav ? "fade-left" : "null"}`}
          className={`${styles.NavbarNav} ${
            toggleNav ? styles.NavbarDisplayTrue : styles.NavbarDisplayFalse
          }`}
        >
          <li className={styles.NavItem}>
            <Link className={styles.NavLink} href="#Home">
              Home
            </Link>
          </li>
          <li>
            <Link disabled className={`${styles.NavLink} ${styles.NavLinkDisabled}`} href="#">
              About
            </Link>
          </li>
          <li>
            <Link disabled className={`${styles.NavLink} ${styles.NavLinkDisabled}`} href="#">
              Projects
            </Link>
          </li>
          <li>
            <Link disabled className={`${styles.NavLink} ${styles.NavLinkDisabled}`} href="#">
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
