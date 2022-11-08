import styles from '../../styles/Components/Navbar.module.css'


interface NavbarProps{
    AccentColour: string;
 }
 

export default function Navbar({AccentColour}: NavbarProps){

    return (
        <nav className={styles.Navbar}>
            <div className={styles.Accent}></div>
            <div className={styles.content}>
            </div>
        </nav>
    )
}