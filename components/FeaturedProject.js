import styles from "@/styles/components/FeaturedProject.module.css";
import Link from "next/link";

import { AiFillGithub } from "react-icons/ai";
import { BiLogoNodejs, BiLogoReact, BiLogoMongodb } from "react-icons/bi";

export default function FeaturedProject({ id, name, link, description, technologies }) {
  return (
    <div className={styles.FeaturedProject} key={id}>
      <div className={styles.Header}>
        <p>Featured Project</p>
        <Link className={styles.Github} href={link}>
          <AiFillGithub />
        </Link>
      </div>
      <div className={styles.About}>
        <div className={styles.Overview}>
          <h3 className={styles.Title}>{name}</h3>
          <p className={styles.Description}>{description}</p>
        </div>
        <div className={styles.Footer}>{technologies.map((tech, key) => <div className={styles.Technology} key={`${id}${key}`}>{tech.component}</div>)}</div>
      </div>
    </div>
  );
}
