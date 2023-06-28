import styles from '@/styles/sections/Resume.module.css'
import Navbar from "@/components/Navbar";
import Breadcrumb from '@/components/Breadcrumb';

export default function Resume(){
    return <article className={styles.Resume}>
        <Navbar color={'Light'}/>
        <Breadcrumb color={'Light'} count={4} section={4} />
    </article>
}