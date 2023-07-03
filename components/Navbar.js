import styles from "@/styles/components/Navbar.module.css";
import Image from "next/image";
import LogoDesktopDark from "../assets/LogoDesktopDark.svg";
import LogoDesktopWhite from "../assets/LogoDesktopWhite.svg";
import LogoMobileDark from "../assets/LogoMobileDark.svg";
import LogoMobileWhite from "../assets/LogoMobileWhite.svg";


import SideBar from "./Sidebar";

export default function Navbar({ color }) {
  console.log(color);
  return (
    <div className={styles.Navbar}>
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
        height={60}
        width={60}
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
          >
            About
          </a>
        </li>
        <li>
          <a
            className={`${styles.NavLink} ${
              color == "Dark" ? styles.Dark : styles.Light
            }`}
            href="#Projects"
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
