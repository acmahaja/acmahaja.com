import styles from '@/styles/sections/Project.module.css'
import Navbar from "@/components/Navbar";
import Breadcrumb from '@/components/Breadcrumb';

export default function Projects(){
    return <article id="Projects" className={styles.Projects}>
        <Navbar color={'Dark'}/>
        <section >
        <Breadcrumb color={'Dark'} section={'Projects'}/>

      </section>
    </article>
}