import styles from "@/styles/components/Navbar.module.css";
import Image from "next/image";
import LogoDesktopDark from "../assets/LogoDesktopDark.svg";
import LogoDesktopWhite from "../assets/LogoDesktopWhite.svg";
import LogoMobileDark from "../assets/LogoMobileDark.svg";
import LogoMobileWhite from "../assets/LogoMobileWhite.svg";

import Link from "next/link";

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
          <Link
            className={`${styles.NavLink} ${
              color == "Dark" ? styles.Dark : styles.Light
            }`}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.NavLink} ${
              color == "Dark" ? styles.Dark : styles.Light
            }`}
            href="#About"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.NavLink} ${
              color == "Dark" ? styles.Dark : styles.Light
            }`}
            href="#Projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className={`${styles.NavLink} ${
              color == "Dark" ? styles.Dark : styles.Light
            }`}
            href="#Resume"
          >
            Resume
          </Link>
        </li>
      </ul>
      <SideBar color={color} />
    </div>
  );
}
