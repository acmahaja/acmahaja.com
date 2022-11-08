import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'


export default function Home() {
  const [accentColour, setAccentColour] = useState<string>('234, 76, 137');

  useEffect(()=>{
    setAccent(accentColour);
  })

  function setAccent(color: string) {
    document.documentElement.style.setProperty('--accent', color)
  }

  return (
    <div className={styles.Home}>
      <Navbar {...{AccentColour: accentColour}} />
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
