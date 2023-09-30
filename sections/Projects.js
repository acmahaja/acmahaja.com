import styles from "@/styles/sections/Project.module.css";
import Navbar from "@/components/Navbar";
import FeaturedProject from "@/components/FeaturedProject";
import OtherProject from "@/components/OtherProject";

import projectsList from "assets/projectsList";
import Link from "next/link";

export default function Projects() {
  return (
    <article id="Projects" className={styles.Projects}>
      <Navbar color={"Dark"} section={"Projects"} />
      <section>
        <h2 className={styles.SectionTitle}>Projects</h2>
        <div className={styles.FeaturedProjectList}>
          {projectsList.featuredProjects.map((project, key) => (
            <FeaturedProject {...project} key={key}/>
          ))}
        </div>
        <h2 className={styles.SectionSubTitle}>Other Noteworthy Projects</h2>
        <Link className={styles.ProjectsPageLink} href={'/archive'}>View More Projects</Link>
        <div className={styles.OtherProjectList}>
        {projectsList.notableProjects.map((project, key) => (
            <OtherProject {...project} key={key}/>
          ))}
        </div>
      </section>
    </article>
  );
}
