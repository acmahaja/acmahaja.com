import styles from '@/styles/sections/Resume.module.css'
import Navbar from "@/components/Navbar";
import Breadcrumb from '@/components/Breadcrumb';

export default function Resume(){
    return <article id="Resume" className={styles.Resume}>
        <Navbar color={'Light'}/>
        <section >
        <Breadcrumb color={'Light'} section={'Resume'}/>

      </section>
    </article>
}