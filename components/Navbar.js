import styles from "@/styles/components/Navbar.module.css";
import Image from "next/image";
import LogoDesktopDark from "../assets/LogoDesktopDark.svg";
import LogoDesktopWhite from "../assets/LogoDesktopWhite.svg";
import LogoMobileDark from "../assets/LogoMobileDark.svg";
import LogoMobileWhite from "../assets/LogoMobileWhite.svg";
import Breadcrumb from "@/components/Breadcrumb";


import SideBar from "./Sidebar";

export default function Navbar({ color, section }) {
  return (
    <div
      className={`${styles.Navbar} ${
        color == "Dark" ? styles.Light : styles.Dark
      }`}
    >
      <Image
        priority
        src={color == "Dark" ? LogoDesktopDark.src : LogoDesktopWhite.src}
        height={44}
        width={125}
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

      <Breadcrumb color={color} section={section}/>

      <ul className={styles.Links}>
        <li>
          <a
            className={`${styles.NavLink} ${
              color == "Dark" ? styles.Dark : styles.Light
            }`}
            href="#Welcome"
          >
            Welcome
          </a>
        </li>
        <li>
          <a
            className={`${styles.NavLink} ${
              color == "Dark" ? styles.Dark : styles.Light
            }`}
            href="#About"
          >
            About
          </a>
        </li>
        <li>
          <a
            className={`${styles.NavLink} ${
              color == "Dark" ? styles.Dark : styles.Light
            } ${styles.LinkDisabled}`}
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
            }`}
            href="#Resume"
          >
            Resume
          </a>
        </li>
      </ul>
      <SideBar color={color} />
    </div>
  );
}
