import styles from '@/styles/sections/About.module.css'
import Navbar from "@/components/Navbar";
import Breadcrumb from '@/components/Breadcrumb';

export default function About(){
    return <article id="About" className={styles.About}>
        <Navbar color={'Light'}/>
        <Breadcrumb color={'Light'} count={4} section={2}/>

    </article>
}