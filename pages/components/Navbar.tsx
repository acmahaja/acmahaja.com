import styles from '../../styles/Components/Navbar.module.css'
import Logo from './Logo';


interface NavbarProps{
    AccentColour: string;
 }
 

export default function Navbar({AccentColour}: NavbarProps){

    return (
        <nav className={styles.Navbar}>
            <div className={styles.Accent}>
            </div>
            <div className={styles.content}>
                <Logo/> 
                <div>
                    buttons
                </div>
            </div>
        </nav>
    )
}