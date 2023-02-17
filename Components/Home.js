import styles from "../styles/Components/Home.module.css";
import Image from "next/image";

// import { AiFillGithub } from "react-icons/ai";

function HomeSection() {
  return (
    <section id="Home" className={styles.HomeSection}>
      <div className={styles.Content}></div>
      <div className={styles.Boat}></div>
    </section>
  );
}

export default HomeSection;
