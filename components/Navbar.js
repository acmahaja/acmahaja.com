import styles from "@/styles/components/Navbar.module.css";
import Image from "next/image";
import LogoDesktopDark from "../assets/LogoDesktopDark.svg";
import LogoDesktopWhite from "../assets/LogoDesktopWhite.svg";
import LogoMobileDark from "../assets/LogoMobileDark.svg";
import LogoMobileWhite from "../assets/LogoMobileWhite.svg";
import Breadcrumb from "@/components/Breadcrumb";
import SideBar from "./Sidebar";

import Link from "next/link";

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
          <Link
            className={`${styles.NavLink} ${
              color == "Dark" ? styles.Dark : styles.Light
            }`}
            href="/#Welcome"
          >
            Welcome
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.NavLink} ${
              color == "Dark" ? styles.Dark : styles.Light
            }`}
            href="/#About"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.NavLink} ${
              color == "Dark" ? styles.Dark : styles.Light
            }`}
            href="/#Projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.NavLink} ${
              color == "Dark" ? styles.Dark : styles.Light
            }`}
            href="/#Resume"
          >
            Resume
          </Link>
        </li>
      </ul>
      <SideBar color={color} />
    </div>
  );
}
