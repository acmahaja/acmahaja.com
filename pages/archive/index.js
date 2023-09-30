import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import styles from "@/styles/pages/Archive.module.css";
import projectsList from "assets/projectsList";
import { FiGithub } from "react-icons/fi";
import AOS from "aos";

import "aos/dist/aos.css";

export default function Archive() {
  let combinedProjects = [
    ...projectsList.featuredProjects,
    ...projectsList.notableProjects,
  ];
  combinedProjects = combinedProjects.sort((a, b) => a.date - b.date);

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
        </header>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th className={styles.TableName}>Name</th>
              <th className={styles.TableTechnologies}>Built with</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {combinedProjects.map((project) => {
              return (
                <tr key={project.id} data-aos="fade-up" data-aos-delay="600">
                  <td>
                    <div className={styles.Month}>
                      {months[project.date.getMonth()]}{" "}
                    </div>
                    {project.date.getFullYear()}
                  </td>
                  <td className={styles.ProjectName}>{project.name}</td>
                  <td className={styles.TechList}>
                    <div>
                      {project.technologies.map((tech, key) => (
                        <p key={key}>{tech.name}</p>
                      ))}
                    </div>
                  </td>
                  <td className={styles.GitHubLink}>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </article>
  );
}
