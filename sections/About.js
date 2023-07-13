import styles from "@/styles/sections/About.module.css";
import Navbar from "@/components/Navbar";
import Breadcrumb from "@/components/Breadcrumb";
import Image from "next/image";
import {BiLogoNodejs, BiLogoReact, BiLogoMongodb} from "react-icons/bi"
import {SiExpress, SiGooglecloud, SiSvelte} from "react-icons/si"
import {GrMysql} from "react-icons/gr"

export default function About() {
  return (
    <article id="About" className={styles.About}>
      {/* <Navbar color={'Light'}/> */}
      {/* <Breadcrumb color={'Light'} section={'About'}/> */}
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
            />
            <div className={styles.Box}></div>
            <div className={styles.Pattern}></div>
          </div>
          <div className={styles.Description}>
            <p>
              I am a software engineering with business student at the
              University of Melbourne, I completed my undergraduate degree in
              Computer Engineering at North Carolina State University. <br />
              <br />
              I have a strong foundation in software development, Agile
              practices and experience with web technologies, business knowledge
              and am eager to take on new challenges and opportunities to apply
              my skills and make an impact in the industry. <br />
              <br />
              Here are a few technologies I’ve been working with recently:
              <br />
              <br />
              <div className={styles.TechList}>
                <div className={styles.Tech}><BiLogoNodejs /> Node JS</div>
                <div className={styles.Tech}><SiExpress /> express.js</div>
                <div className={styles.Tech}><BiLogoReact /> React</div>
                <div className={styles.Tech}><BiLogoMongodb /> MongoDB</div>
                <div className={styles.Tech}><SiGooglecloud /> Google Cloud</div>
                <div className={styles.Tech}><SiSvelte /> Svelte</div>
                <div className={styles.Tech}><GrMysql /> MySQL</div>
              </div>
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
