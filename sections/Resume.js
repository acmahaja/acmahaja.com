import styles from "@/styles/sections/Resume.module.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { BsDiscord } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
  AiOutlineFork,
} from "react-icons/ai";

import { Document, Page } from 'react-pdf';


export default function Resume() {
  return (
    <article id="Resume" className={styles.Resume}>
      <Navbar color={"Light"} section={"Resume"} />
      <section>
        <h2 className={styles.SectionTitle}>Resume</h2>
        <div className={styles.Content}>
          <div className={styles.Overview}>
            <h3>
              Thanks for taking the time for visiting my website, you can read
              my CV!
            </h3>
            <h3>
              Download my <a href="/Resume.pdf">Resume</a>!
            </h3>
            <p>
              I'm currently looking for internship and work as a part time
              developer experience, my inbox is always open! Feel Free to
              contact me on <b>social media</b> or my <b>email</b> below.
            </p>
            <div className={styles.ContactList}>
              <Link
                className={`${styles.Contact} ${styles.Mail}`}
                href="mailto: acmahaja@gmail.com"
              >
                <MdEmail className={styles.Logo} /> acmahaja@gmail.com
              </Link>
              <Link
                className={`${styles.Contact} ${styles.Linkedin}`}
                href="https://www.linkedin.com/in/acmahaja/"
              >
                <AiFillLinkedin className={styles.Logo} /> /in/acmahaja
              </Link>
              <Link
                className={`${styles.Contact} ${styles.Github}`}
                href="https://github.com/acmahaja"
              >
                <AiFillGithub className={styles.Logo} /> acmahaja
              </Link>
              <Link
                className={`${styles.Contact} ${styles.Instagram}`}
                href="https://www.instagram.com/acmahaja/"
              >
                <AiOutlineInstagram className={styles.Logo} /> @acmahaja
              </Link>
              <Link
                className={`${styles.Contact} ${styles.Discord}`}
                href="https://discordapp.com/users/349311189454553092"
              >
                <BsDiscord className={styles.Logo} /> acmahaja
              </Link>
            </div>
          </div>
          <div className={styles.ResumeContent}>
            <iframe
              src="/Resume.pdf"
              className={styles.ResumeEmbed}
            ></iframe>
            <div className={styles.Box}></div>
            <div className={styles.Pattern}></div>
            <div className={styles.Pattern}></div>
          </div>
        </div>
      </section>
      <p className={styles.GithubLink}>
        Do you like this website? Fork it on my{" "}
        <Link href="https://github.com/acmahaja/acmahaja.com">
          <AiOutlineFork className={styles.Logo} />
          Github
        </Link>
        !
      </p>
    </article>
  );
}
