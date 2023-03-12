import styles from '@/components/navBar/navbar.module.css'
import Link from 'next/link'

export default function NavBar() {
    return (
        <>
            <nav>
                <ul className={styles.navBar}>
                    <li className={styles.navItems}>
                        Programs & Courses
                    </li>
                    <li className={styles.navItems}>
                        Admission 
                    </li>
                    <li className={styles.navItems}>
                        Student Services 
                    </li>
                    <li className={styles.navItems}>
                        Research 
                    </li>
                    <li className={styles.navItems}>
                        About BCIT
                    </li>
                </ul>
            </nav>
            <input className={styles.input}/>
        </>
    )

}