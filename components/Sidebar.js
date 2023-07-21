import styles from "@/styles/components/Sidebar.module.css";
import SideBarIconDark from "../assets/SideBarIconDark.svg";
import SideBarIconWhite from "../assets/SideBarIconWhite.svg";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function SideBar({ color }) {
  const [viewSideBar, setViewSideBar] = useState(true);

  const toggleSideBar = () => {
    console.log(viewSideBar);
    setViewSideBar(!viewSideBar);
  };

  return (
    <div className={styles.SideBar}>
      <Image
        src={color == "Dark" ? SideBarIconDark.src : SideBarIconWhite.src}
        height={30}
        width={20}
        alt="Logo"
        className={styles.SideBarIcon}
        onClick={toggleSideBar}
      />
      <div
        className={styles.Side}
        style={{ display: viewSideBar ? `block` : `none` }}
        onClick={toggleSideBar}
      >
        <ul
          className={`${styles.Links} ${
            viewSideBar ? styles.Block : styles.None
          }`}
          onClick={null}
        >
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
            <Link
              className={`${styles.NavLink} ${styles.LinkDisabled}`}
              href="#Projects"
              disabled
            >
              Projects
            </Link>
          </li>
          <li>
            <Link className={styles.NavLink} href="#Resume">
              Resume
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
