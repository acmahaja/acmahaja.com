import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { AiFillGithub } from 'react-icons/ai';


export default function Home() {
  return (
    <div className={styles.Home}>
      <h2>Hi, my name is ...</h2>
      <h1>Anjaney C Mahajan</h1>
      <p>
        I am overhauling my personal website, track my progress here on
        <a href="http://github.com/acmahaja">Github <AiFillGithub size={20}/></a>
      </p>
    </div>
  )
}


    // <div className={styles.container}>
    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://github.com/acmahaja">acmahaja.com</a>
    //     </h1>
    //   </main>
    // </div>
