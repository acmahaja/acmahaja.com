import styles from "@/styles/sections/Project.module.css";
import Navbar from "@/components/Navbar";
import FeaturedProject from "@/components/FeaturedProject";
import OtherProjects from "@/components/OtherProjects";

export default function Projects() {
  return (
    <article id="Projects" className={styles.Projects}>
      Projects
      <Navbar color={"Dark"} section={"Projects"} />
      <section>
        <h2 className={styles.SectionTitle}>Projects</h2>
        <div className={styles.FeaturedProjectList}>
          <FeaturedProject />
        </div>
        <h2 className={styles.SectionSubTitle}>Other Noteworthy Projects</h2>
        <div className={styles.OtherProjectList}>
          <OtherProjects />
          <OtherProjects />
          <OtherProjects />
          <OtherProjects />
          <OtherProjects />
          <OtherProjects />
          <OtherProjects />
          <OtherProjects />
          <OtherProjects />
          <OtherProjects />
        </div>
      </section>
    </article>
  );
}
