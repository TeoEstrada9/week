import styles from '@/components/Footer/footer.module.css'
import Link from 'next/link'
import { FaFacebookF } from "react-icons/Fa";
import { BsTwitter } from "react-icons/Bs";
import { BsInstagram } from 'react-icons/Bs';
import { FaLinkedinIn } from 'react-icons/Fa';
import { FormattedMessage, useIntl } from "react-intl";
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
                    <ul className={styles.footerMediaIcons}>
                        <li>
                        <FaFacebookF />
                        </li>
                        <li>
                            <BsTwitter />
                        </li>
                        <li>
                            <BsInstagram/>
                        </li>
                        <li>
                            <FaLinkedinIn/>
                        </li>
                    </ul>
                </div>
             

                <div className={styles.visit}>
                    <ul className={styles.listItems}>
                        <li>
                            <FormattedMessage id="page.home.visitFooter"/>
                            </li>
                        <li>
                            <FormattedMessage id="page.home.aboutFooter"/>
                            </li>
                        <li>
                            <FormattedMessage id="page.home.giveFooter"/>
                            </li>
                    </ul>
                </div>

                <div>
                    <ul className={styles.newsItems}>
                        <li>
                            <FormattedMessage id="page.home.news"/>
                        </li>
                        <li>
                            <FormattedMessage id="page.home.Events"/>
                        </li>
                        <li>
                            <FormattedMessage id="page.home.Careers"/>
                            
                        </li>
                    </ul>
                </div>
                <div className={styles.campus}>
                    <h3 className={styles.campusInfo}>
                        <FormattedMessage id="pages.home.campusInfo"/>
                    </h3>
                    <ul className={styles.campusLocations}>
                        <li>
                            <FormattedMessage id="page.home.burnaby"/>
                        </li>
                        <li>
                            <FormattedMessage id="page.home.downtown"/>
                        </li>
                        <li>
                            <FormattedMessage id="page.home.marine"/>
                        </li>
                        <li>
                            <FormattedMessage id="page.home.aerospace"/>
                        </li>
                        <li>
                            <FormattedMessage id="page.home.annacis"/>
                        </li>
                    </ul>
                    <ul className={styles.feedback}>
                        <li>
                            <FormattedMessage id="pages.home.feedbackFooter"/>
                        </li>
                        <li>
                            <FormattedMessage id="pages.home.copyrightFooter"/>
                        </li>
                        <li>
                            <FormattedMessage id="pages.home.privacy"/>
                        </li>
                    </ul>
                    
                </div>
            </footer>
        </>
    )
}