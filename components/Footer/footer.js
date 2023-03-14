import styles from '@/components/Footer/footer.module.css'
import Link from 'next/link'
export default function Footer() {
    return(
        <>
            <footer className={styles.footer}>
                <div>
                    <h3 className={styles.contact}>
                        --- Contact
                    </h3>
                    <p className={styles.address}>
                        3700 Willingdon Ave. <br/>
                        Burnaby, British Columbia <br/>
                        Canada V5G 3H2 <br/>
                        <span className={styles.bcitLink}>bcit.ca</span>
                    </p>
                    <p className={styles.phoneNumber}>
                        Telephone: 604-434-5734
                        Toll-free (Can/US): 1-866-<br/>
                        434-1610 <br/>
                        <span className={styles.contactNumbers}>More contact numbers</span>
                    </p>
                </div>

                <div className={styles.visit}>
                    <ul className={styles.listItems}>
                        <li>Visit</li>
                        <li>Apply Now</li>
                        <li>Give</li>
                    </ul>
                </div>

                <div>
                    <ul className={styles.newsItems}>
                        <li>
                            News
                        </li>
                        <li>
                            Events
                        </li>
                        <li>
                            Careers
                        </li>
                    </ul>
                </div>
                <div className={styles.campus}>
                    <h3 className={styles.campusInfo}>
                        --- Campus Information
                    </h3>
                    <ul className={styles.campusLocations}>
                        <li>
                            Burnaby Campus
                        </li>
                        <li>
                            Downtown Campus
                        </li>
                        <li>
                            Marine Campus
                        </li>
                        <li>
                            Aerospace Technology Campus
                        </li>
                        <li>
                            Annacis Island Campus
                        </li>
                    </ul>
                    <ul className={styles.feedback}>
                        <li>
                            Feedback
                        </li>
                        <li>
                            Copyright
                        </li>
                        <li>
                            Privacy
                        </li>
                    </ul>
                    
                </div>
            </footer>
        </>
    )
}