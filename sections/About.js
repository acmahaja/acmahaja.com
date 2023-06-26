import styles from '@/styles/sections/About.module.css'
import Navbar from "@/components/Navbar";

export default function About(){
    return <section id="About" className={styles.About}>
        <Navbar color={'Light'}/>
    </section>
}