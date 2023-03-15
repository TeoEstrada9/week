import styles from '@/components/bottomNav/bottomNav.module.css'
import { FormattedMessage } from 'react-intl'
export default function BottomNav() {
    return(
        <>
            <div>
                <ul className={styles.bottomNav}>
                    <li className={styles.bottomNavItems}>
                        <FormattedMessage id="page.home.study"/>
                    </li>
                    <li className={styles.bottomNavItems}>
                        <FormattedMessage id="page.home.businessMedia"/>
                    </li>
                    <li className={styles.bottomNavItems}>
                        <FormattedMessage id="page.home.D3"/>
                    </li>
                </ul>
            </div>
        </>
    )
}