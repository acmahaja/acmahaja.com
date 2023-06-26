import styles from '@/styles/sections/Resume.module.css'
import Navbar from "@/components/Navbar";

export default function Resume(){
    return <section className={styles.Resume}>
        <Navbar color={'Light'}/>
        Resume
    </section>
}