import styles from "@/styles/components/Breadcrumb.module.css";


export default function Breadcrumb({color,section}) {
    
    return (<div className={`${styles.Breadcrumb} ${color === 'Dark' ? styles.Dark : styles.Light}`}>
        <div className={`${styles.dot} ${section === 'Welcome' ? styles.selected : null}`}></div>
        <div className={`${styles.dot} ${section === 'About' ? styles.selected : null}`}></div>
        <div className={`${styles.dot} ${section === 'Projects' ? styles.selected : null}`}></div>
        <div className={`${styles.dot} ${section === 'Resume' ? styles.selected : null}`}></div>
        <div className={styles.line}></div>
    </div>)
}