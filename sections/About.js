import styles from "@/styles/sections/About.module.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { BiLogoNodejs, BiLogoReact, BiLogoMongodb, BiLogoPostgresql } from "react-icons/bi";
import { SiExpress, SiGooglecloud, SiSvelte, SiFigma, SiEclipsevertdotx } from "react-icons/si";

export default function About() {
  return (
    <article id="About" className={styles.About}>
      <Navbar color={"Light"} section={"About"} />
      <section>
        <h2 className={styles.SectionTitle}>About Me</h2>
        <div className={styles.Content}>
          <div className={styles.Image}>
            <div className={styles.Pattern}></div>
            <Image
              src="/stadium.jpg"
              alt="Picture of the me at Melbourne Cricket Ground"
              width={466}
              height={466}
              priority={true}
            />
            <div className={styles.Box}></div>
            <div className={styles.Pattern}></div>
          </div>
          <div className={styles.Description}>
            <p>
              Hello! I'm <b>Anjaney</b>, and I'm passionate about developing
              human-centric web applications to solve unique challenges and
              issues. My journey into web development began in 2018 when I built
              a web application to help turtle conservation in North Carolina.
              Since then, I've worked on diverse projects ranging from
              conservation to aviation.
            </p>
            <p>
              I completed my undergraduate degree in <b>Computer Engineering</b>{" "}
              at North Carolina State University, and I'm currently pursuing a
              Master of Science in <b>Software Engineering with Business</b> at
              the University of Melbourne. My academic background has provided
              me with valuable business knowledge. I'm eager to take on new
              challenges and opportunities to apply my skills and make an impact
              in the industry <br />
            </p>
            <p> Here are a few technologies I’ve been working with recently:</p>
            <div className={styles.TechList}>
              <div className={styles.Tech}>
                <BiLogoReact /> React
              </div>
              <div className={styles.Tech}>
                <BiLogoNodejs /> Node JS
              </div>
              <div className={styles.Tech}>
                <SiEclipsevertdotx /> Java Vert.x
              </div>
              <div className={styles.Tech}>
                <SiExpress /> express.js
              </div>
              <div className={styles.Tech}>
                <BiLogoMongodb /> MongoDB
              </div>
              <div className={styles.Tech}>
                <BiLogoPostgresql /> PostGresSQL
              </div>
              <div className={styles.Tech}>
                <SiFigma /> Figma
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
