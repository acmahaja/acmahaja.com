import styles from '@/styles/sections/Project.module.css'
import Navbar from "@/components/Navbar";

export default function Projects(){
    return <section className={styles.Projects}>
        <Navbar color={'Dark'}/>
        Projects
    </section>
}