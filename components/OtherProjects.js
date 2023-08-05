import styles from "@/styles/components/OtherProjects.module.css";
import Link from "next/link";

import { AiFillGithub } from "react-icons/ai";
import { BiLogoNodejs, BiLogoReact, BiLogoMongodb } from "react-icons/bi";

export default function OtherProjects() {
  return (
    <div className={styles.OtherProject}>
      <div className={styles.Header}>
        <p>Featured Project</p>
        <Link className={styles.Github} href="#">
          <AiFillGithub />
        </Link>
      </div>
      <div className={styles.About}>
        <div className={styles.Overview}>
          
            <h3 className={styles.Title}>Lorem ipsum</h3>
            <p className={styles.Description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi officiis fugiat corporis perspiciatis? Exercitationem officiis laborum libero? Assumenda earum debitis ea inventore libero harum hic ad suscipit, recusandae quidem reiciendis!</p>
        </div>
        <div className="Image"></div>
      </div>
      <div className={styles.Footer}>
        <BiLogoNodejs /> <BiLogoReact /> <BiLogoMongodb />
      </div>
    </div>
  );
}
