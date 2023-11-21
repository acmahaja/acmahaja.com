import styles from "@/styles/sections/Welcome.module.css";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import canoePic from "../public/canoe.jpg";

import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { BsDiscord } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

export default function Welcome() {
  return (
    <article id="Welcome" className={styles.Welcome}>
      <Navbar color={"Dark"} section={"Welcome"} />
      <section>
        <div className={styles.Overview}>
          <p>Hi, my name is</p>

          <h1>Anjaney C Mahajan</h1>

          <TypeAnimation
            sequence={[
              "I am a Student...",
              1000,
              "I am a ",
              400,
              "I am a Dev...",
              1000,
              "I am ",
              400,
              "I am an Engineer...",
              1000,
            ]}
            wrapper="h3"
            speed={30}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />

          <p className={styles.Description}>
            I'm a software engineering student at the University of Melbourne,
            passionate about crafting human-centric applications.
            Proficient in React, Node.js, and Google Cloud with a strong UI/UX
            background, I'm keen to pursue opportunities in the Australian
            software industry.
          </p>

          <div className={styles.ContactInfo}>
            <p>Contact me!</p>
            <div className={styles.ContactList}>
              <Link
                className={`${styles.Contact} ${styles.Mail}`}
                href="mailto: acmahaja@gmail.com"
              >
                <MdEmail />
              </Link>
              <Link
                className={`${styles.Contact} ${styles.Linkedin}`}
                href="https://www.linkedin.com/in/acmahaja/"
              >
                <AiFillLinkedin />
              </Link>
              <Link
                className={`${styles.Contact} ${styles.Github}`}
                href="https://github.com/acmahaja"
              >
                <AiFillGithub />
              </Link>
              <Link
                className={`${styles.Contact} ${styles.Instagram}`}
                href="https://www.instagram.com/acmahaja/"
              >
                <AiOutlineInstagram />
              </Link>
              <Link
                className={`${styles.Contact} ${styles.Discord}`}
                href="https://discordapp.com/users/349311189454553092"
              >
                <BsDiscord />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.Image}>
          <div className={styles.Pattern}></div>
          <Image
            src={canoePic}
            alt="Picture of the me on a canoe"
            width={466}
            height={466}
            placeholder="blur"
            priority={true}
          />
        </div>
      </section>
    </article>
  );
}
