import styles from '@/components/topLinks/toplinks.module.css'
import { Roboto } from "next/font/google";
import Link from 'next/link'


const roboto=Roboto({
    weight: ['400', '700'],
    subsets: ['latin']
})
export default function TopLinks() {
    return(
        <>
            <div  className={roboto.className}>
                <ul className={styles.topLinks}>
                    <li>
                        <Link className={styles.topLinksList} href="/">LEARNING HUB</Link>
                    </li>
                    
                    <li >
                    <Link className={styles.topLinksList} href="/">MYBCIT</Link>
                    </li>
                    <li> 
                    <Link className={styles.topLinksList} href="/">STUDENTS</Link>
                    </li>
                    <li>
                    <Link className={styles.topLinksList} href="/">STAFF</Link>
                    </li>
                    <li>
                    <Link className={styles.topLinksList} href="/">EVENTS</Link>
                    </li>

                </ul>
            </div>
        </>
    )
}