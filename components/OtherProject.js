import styles from "@/styles/components/OtherProjects.module.css";
import Link from "next/link";

import { AiFillGithub } from "react-icons/ai";
import { BiLogoNodejs, BiLogoReact, BiLogoMongodb } from "react-icons/bi";

export default function OtherProject({
  id,
  name,
  link,
  description,
  technologies,
}) {
  return (
    <div className={styles.OtherProject} key={id}>
      <div className={styles.Header}>
        <p>Project</p>
        <Link className={styles.Github} href={link}>
          <AiFillGithub />
        </Link>
      </div>
      <div className={styles.About}>
        <div className={styles.Overview}>
          <h3 className={styles.Title}>{name}</h3>

          <p className={styles.Description}>{description}</p>
          <div className={styles.DescriptionLine} />
        </div>
        <div className={styles.Footer}>
          {technologies.map((tech, key) => (
            <div className={styles.Technology} key={`${id}${key}`}>
              {tech.component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
