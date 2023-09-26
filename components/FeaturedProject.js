import styles from "@/styles/components/FeaturedProject.module.css";
import Link from "next/link";

import { AiFillGithub } from "react-icons/ai";
import { BiLogoNodejs, BiLogoReact, BiLogoMongodb } from "react-icons/bi";

export default function FeaturedProject() {
  return (
    <div className={styles.FeaturedProject}>
      <div className={styles.Header}>
        <p>Featured Project</p>
        <Link className={styles.Github} href="#">
          <AiFillGithub />
        </Link>
      </div>
      <div className={styles.About}>
        <div className={styles.Overview}>

            <h3 className={styles.Title}>Lorem ipsum</h3>
            <p className={styles.Description}></p>
        </div>
        <div className={styles.Image}></div>
      </div>
      <div className={styles.Footer}>
        <BiLogoNodejs /> <BiLogoReact /> <BiLogoMongodb />
      </div>
    </div>
  );
}
