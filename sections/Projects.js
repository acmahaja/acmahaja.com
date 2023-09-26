import styles from "@/styles/sections/Project.module.css";
import Navbar from "@/components/Navbar";
import FeaturedProject from "@/components/FeaturedProject";
import OtherProject from "@/components/OtherProject";

export default function Projects() {

  
  return (
    <article id="Projects" className={styles.Projects}>
      Projects
      <Navbar color={"Dark"} section={"Projects"} />
      <section>
        <h2 className={styles.SectionTitle}>Projects</h2>
        <div className={styles.FeaturedProjectList}>
          <FeaturedProject />
          <FeaturedProject />
          <FeaturedProject />
          <FeaturedProject />
        </div>
        <h2 className={styles.SectionSubTitle}>Other Noteworthy Projects</h2>
        <div className={styles.OtherProjectList}>
          <OtherProject />
          <OtherProject />
          <OtherProject />
          <OtherProject />
          <OtherProject />
          <OtherProject />
          <OtherProject />
          <OtherProject />
          <OtherProject />
          <OtherProject />
          <OtherProject />
          <OtherProject />
          <OtherProject />
          <OtherProject />
        </div>
      </section>
    </article>
  );
}
