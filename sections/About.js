import styles from '@/styles/sections/About.module.css'
import Navbar from "@/components/Navbar";
import Breadcrumb from '@/components/Breadcrumb';

export default function About(){
    return <article id="About" className={styles.About}>
        <Navbar color={'Light'}/>
        <section >
        <Breadcrumb color={'Light'} section={'About'}/>

      </section>
    </article>
}