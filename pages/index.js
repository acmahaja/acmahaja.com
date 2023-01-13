import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { AiFillGithub } from "react-icons/ai";

export default function Home() {

  function goToRepo() {
    window.location.href = "https://github.com/acmahaja/acmahaja.com"
  }


  
  return (
    <>
      <Head>
      </Head>

      <main className={styles.Main}>

      </main>
    </>
  );
}
