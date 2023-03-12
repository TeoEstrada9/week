import styles from '@/components/bottomNav/bottomNav.module.css'
export default function BottomNav() {
    return(
        <>
            <div>
                <ul className={styles.bottomNav}>
                    <li className={styles.bottomNavItems}>
                        Study 
                    </li>
                    <li lassName={styles.bottomNavItems}>
                        Business & Media 
                    </li>
                    <li lassName={styles.bottomNavItems}>
                        Digital Design and Development
                    </li>
                </ul>
            </div>
        </>
    )
}