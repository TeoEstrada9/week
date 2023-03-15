import styles from "@/components/topLinks/toplinks.module.css";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { FormattedMessage, useIntl } from "react-intl";


const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export default function TopLinks({locales}) {
  return (
    <>
      <div className={`${roboto.className} ${styles.topLinksContainer}`}>
        <div className={styles.localesContainer}>
          {[...locales].sort().map((locale) => (
            <Link key={locale} href="/" locale={locale}>
              <div>{locale}</div>
            </Link>
          ))}
        </div>
        <ul className={styles.topLinks}>
          <li>
            <Link className={styles.topLinksList} href="/">
                <FormattedMessage id="page.home.learningHub"/>
            </Link>
          </li>

          <li>
            <Link className={styles.topLinksList} href="/">
                <FormattedMessage id="page.home.myBCIT"/>
            </Link>
          </li>
          <li>
            <Link className={styles.topLinksList} href="/">
                <FormattedMessage id="page.home.students"/>
            </Link>
          </li>
          <li>
            <Link className={styles.topLinksList} href="/">
                <FormattedMessage id="page.home.staff"/>
            </Link>
          </li>
          <li>
            <Link className={styles.topLinksList} href="/">
                <FormattedMessage id="page.home.events"/>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
