import styles from "@/styles/components/Navbar.module.css";
import Image from "next/image";
import LogoDesktopDark from "../assets/LogoDesktopDark.svg";
import LogoDesktopWhite from "../assets/LogoDesktopWhite.svg";
import LogoMobileDark from "../assets/LogoMobileDark.svg";
import LogoMobileWhite from "../assets/LogoMobileWhite.svg";

import SideBar from "./Sidebar";

export default function Navbar({ color }) {
  return (
    <div
      className={`${styles.Navbar} ${
        color == "Dark" ? styles.Light : styles.Dark
      }`}
    >
      <Image
        priority
        src={color == "Dark" ? LogoDesktopDark.src : LogoDesktopWhite.src}
        height={53}
        width={150}
        alt="Logo"
        className={styles.LogoDesktop}
      />{" "}
      <Image
        priority
        src={color == "Dark" ? LogoMobileDark.src : LogoMobileWhite.src}
        height={55}
        width={55}
        alt="Logo"
        className={styles.LogoMobile}
      />{" "}
      <ul className={styles.Links}>
        <li>
          <a
            className={`${styles.NavLink} ${
              color == "Dark" ? styles.Dark : styles.Light
            }`}
            href="#Welcome"
          >
            Home
          </a>
        </li>
        <li>
          <a
            className={`${styles.NavLink} ${
              color == "Dark" ? styles.Dark : styles.Light
            }`}
            href="#About"
            disabled
          >
            About
          </a>
        </li>
        <li>
          <a
            className={`${styles.NavLink} ${
              color == "Dark" ? styles.Dark : styles.Light
            } ${styles.Disabled}`}
            href="#Projects"
            disabled
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className={`${styles.NavLink} ${
              color == "Dark" ? styles.Dark : styles.Light
            } ${styles.Disabled}`}
            href="#Resume"
            disabled
          >
            Resume
          </a>
        </li>
      </ul>
      <SideBar color={color} />
    </div>
  );
}
