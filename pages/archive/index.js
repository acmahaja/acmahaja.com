import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import styles from "@/styles/pages/Archive.module.css"
import projectsList from "assets/projectsList";


export default function Archive() {
  return (
    <article id="Archive" className={styles.Archive}>
      <Navbar color={"Dark"} section={"Archive"} />

      <section className={styles.ProjectList}>
      <header className={styles.Header}>
        <h1>What I've made</h1>
        <h2>A list of things of things I've made</h2>
      </header>
      </section>
    </article>
  );
}
