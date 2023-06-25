import styles from '@/styles/sections/Welcome.module.css'
import Navbar from "@/components/Navbar";


export default function Welcome(){
    return <section className={styles.Welcome}>
        <Navbar />
    </section>
}