import styles from "../styles/Components/Navbar.module.css";

import Link from "next/link";

function Navbar() {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.Brand} />
      <div className={styles.NavbarCollapse}>
        <ul className={styles.NavbarNav}>
          <li className={styles.NavItem}>
            <Link className={styles.NavLink} href="#Home">Home</Link>
          </li>
          <li>
            <Link className={styles.NavLink} href="#About">About</Link>
          </li>
          <li>
            <Link className={styles.NavLink} href="#Projects">Projects</Link>
          </li>
          <li>
            <Link className={styles.NavLink} href="#Resume">Resume</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
