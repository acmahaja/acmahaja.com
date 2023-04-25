import styles from "../styles/Home.module.css";
import Image from "next/image";

import { FaDiscord } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function HomeSection() {
  return (
    <section id="Home" className={styles.HomeSection}>
      <div className={styles.About}>
        <h3>Hi, my name is ...</h3>
        <h1>Anjaney C Mahajan</h1>
        <h2>Student/Developer/Engineer</h2>
        <p>
          I am a software engineering student at the University of Melbourne
          with experience in React, Node.js, and Google Cloud. I possess strong
          UI/UX skills and an understanding of business processes. Seeking
          graduate and career opportunities, I am eager to apply my skills and
          knowledge in the Australian software engineering industry.
        </p>
        <div className={styles.Socials}>
          <p className={styles.ContactMe}>Contact me!</p>
          <div className={styles.SocialsList}>
            <div className={`${styles.Social} ${styles.EmailLogo}`}>
              <MdEmail size={22} />
            </div>

            <div className={`${styles.Social} ${styles.LinkedinLogo}`}>
              <AiFillLinkedin size={22} />
            </div>

            <div className={`${styles.Social} ${styles.GithubLogo}`}>
              <AiFillGithub size={22} />
            </div>
            <div className={`${styles.Social} ${styles.InstagramLogo}`}>
              <BsInstagram size={22} />
            </div>
            <div className={`${styles.Social} ${styles.DiscordLogo}`}>
              <FaDiscord size={22} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.Image}>
          <Image
            src="/assets/boat.jpg"
            alt="Picture of the myself"
            width={500}
            height={500}
            className={styles.BoatImage}
          />

          <div className={`${styles.Image} ${styles.ImagePattern}`}></div> 
        </div>
    </section>
  );
}

export default HomeSection;

// function HomeSection() {
//   return (
//     <section id="Home" className={styles.HomeSection}>
//       <div className={styles.Content}>
//         <div className={styles.HomeSummary}>
//             <p className={styles.HiMessage}>Hi, my name is ...</p>
//             <h1 className={styles.Name}>Anjaney C Mahajan</h1>
//             <h2 className={styles.Fields}>Student/Dev/Engineer...</h2>
//             <p className={styles.Description}>I am a software engineering with business student at the University of Melbourne, I completed my undergraduate degree in Computer Engineering at North Carolina State University.</p>
//         </div>
// <div>
//     <p className={styles.ContactMessage}>Contact Me!</p>
//     <div className={styles.Socials}>
//     <div className={`${styles.Social} ${styles.EmailLogo}`}>
//         <MdEmail/>
//     </div>

//     <div className={`${styles.Social} ${styles.LinkedinLogo}`}>
//         <AiFillLinkedin />
//     </div>

//     <div className={`${styles.Social} ${styles.GithubLogo}`}>
//         <AiFillGithub />
//     </div>
//     <div className={`${styles.Social} ${styles.InstagramLogo}`}>
//         <BsInstagram />
//     </div>
//     <div className={`${styles.Social} ${styles.DiscordLogo}`}>
//         <FaDiscord />
//     </div>
// </div>

// </div>
//       </div>
//       <div className={styles.Boat}></div>
//     </section>
//   );
// }

// export default HomeSection;
