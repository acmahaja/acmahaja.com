import styles from "@/styles/components/Navbar.module.css";
import Image from "next/image";
import LogoMobile from "../assets/LogoMobile.svg";
import LogoDesktop from "../assets/LogoDesktop.svg";
import Link from "next/link";

import SideBar from "./Sidebar";

export default function Navbar() {
  return (
    <div className={styles.Navbar}>
      <Image
        priority
        src={LogoDesktop.src}
        height={53}
        width={150}
        alt="Logo"
        className={styles.LogoDesktop}
      />{" "}
      <Image
        priority
        src={LogoMobile.src}
        height={60}
        width={60}
        alt="Logo"
        className={styles.LogoMobile}
      />{" "}

      <ul className={styles.Links}>
        <li>
          <Link className={styles.NavLink} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.NavLink} href="#About">
            About
          </Link>
        </li>
        <li>
          <Link className={styles.NavLink} href="#Projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className={styles.NavLink} href="#Resume">
            Resume
          </Link>
        </li>
      </ul>

    <SideBar />

    </div>
  );
}
