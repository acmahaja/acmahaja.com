import styles from '@/styles/sections/Project.module.css'
import Navbar from "@/components/Navbar";
import Breadcrumb from '@/components/Breadcrumb';

export default function Projects(){
    return <article className={styles.Projects}>
        <Navbar color={'Dark'}/>
        <Breadcrumb color={'Dark'} count={4} section={3}/>
    </article>
}