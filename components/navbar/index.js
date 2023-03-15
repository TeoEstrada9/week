import styles from "@/components/navBar/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import {BsSearch} from 'react-icons/Bs'
import { FormattedMessage, useIntl } from "react-intl";


export default function NavBar() {
  return (
    <>
      <nav className={styles.navContainer} >
        <div>
            <Image
              className={styles.logo}
              src={"/images/BCIT_logo.png"}
              alt={"/images/BCIT_logo.png"}
              width={60}
              height={60}
            />
            <ul className={styles.navBar}>
              <li className={styles.navItems}>
                <FormattedMessage id="page.home.programsCourses"/>
                </li>
              <li className={styles.navItems}>
                <FormattedMessage id="page.home.admission"/>
                </li>
              <li className={styles.navItems}>
                <FormattedMessage id="page.home.studentServices"/>
                </li>
              <li className={styles.navItems}>
                <FormattedMessage id="page.home.research"/>
                </li>
              <li className={styles.navItems}>
                <FormattedMessage id="page.home.aboutBCIT"/>
                </li>
            </ul>
        </div>
        <input className={styles.input} />
        
        <BsSearch className={styles.search}
        />
       
      </nav>
    </>
  );
}
