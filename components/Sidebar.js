import styles from "@/styles/components/Sidebar.module.css";
import SideBarIcon from "../assets/SideBarIcon.svg";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export default function SideBar() {
  const [viewSideBar, setViewSideBar] = useState(true);

  const toggleSideBar = () => {
    console.log(viewSideBar);
    setViewSideBar(!viewSideBar);
  };

  return (
    <div className={styles.SideBar}>
      <Image
        src={SideBarIcon.src}
        height={30}
        width={20}
        alt="Logo"
        className={styles.SideBarIcon}
        onClick={toggleSideBar}
      />{" "}
      <div className={styles.Side} style={{display: viewSideBar ? `block` : `none`}} onClick={toggleSideBar}>
        <ul className={styles.Links} onClick={null}>
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
      </div>
    </div>
  );
}
