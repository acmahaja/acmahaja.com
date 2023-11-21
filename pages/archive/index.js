import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import styles from "@/styles/pages/Archive.module.css";
import projectsList from "assets/projectsList";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";
import AOS from "aos";
import { AiOutlineFork } from "react-icons/ai";
import "aos/dist/aos.css";

export default function Archive() {
  let combinedProjects = [
    ...projectsList.featuredProjects,
    ...projectsList.notableProjects,
  ];
  combinedProjects = combinedProjects.sort((a, b) => b.date - a.date);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <article id="Archive" className={styles.Archive}>
      <Navbar color={"Dark"} section={"Archive"} />

      <section className={styles.ProjectList}>
        <header className={styles.Header}>
          <h1>What I've made</h1>
          <h2>A list of things of things I've made</h2>
          <p className={styles.ProjectsWarning}>
            Stay tuned as I continue to update and showcase my projects!
          </p>
        </header>
        <div className={styles.ProjectsContainer}>
          <div className={styles.ProjectRow}>
            <div className={styles.Date}>Date</div>
            <div className={styles.Name}>Name</div>
            <div className={styles.TechList}>Built with</div>
            <div className={styles.Links}>Link</div>
          </div>
          {combinedProjects.map((project) => {
            return (
              <div
                key={project.id}
                className={styles.ProjectRow}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className={styles.Date}>
                  <div className={styles.Month}>
                    {months[project.date.getMonth()]}{" "}
                  </div>
                  {project.date.getFullYear()}
                </div>
                <div className={styles.Name}>{project.name}</div>
                <div className={styles.TechList}>
                  {project.technologies.map((tech, key) => (
                    <div className={styles.Tech} key={key}>
                      {tech.name}
                      {key !== project.technologies.length-1 ? " - " : ""}
                    </div>
                  ))}
                </div>
                <div className={styles.Links}>
                  <Link href={project.link}>
                    <FiGithub />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <p className={styles.GithubLink}>
        Do you like this website? Fork it on{" "}
        <Link href="https://github.com/acmahaja/acmahaja.com">
          <AiOutlineFork className={styles.Logo} />
          Github
        </Link>
        !
      </p>
    </article>
  );
}
