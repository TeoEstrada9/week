import Head from "next/head";
import Image from "next/image";
import { Nunito_Sans } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { FormattedMessage, useIntl } from "react-intl";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import TopLinks from "@/components/topLinks/toplinks.js";
import NavBar from "@/components/navbar";
import BottomNav from "@/components/bottomNav/bottomNav";
import Footer from "@/components/Footer/footer";
import { BiPrinter } from "react-icons/Bi";
import { AiOutlineMail } from "react-icons/Ai";
import { FaFacebookF } from "react-icons/Fa";
import { BsTwitter } from "react-icons/Bs";

const nunitoSans = Nunito_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});
export default function Home({ dir }) {
  const { locales } = useRouter();
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({
    id: "page.home.head.meta.description",
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" hrefLang="x-default" />
        <link rel="icon" href="/favicon.ico" hrefLang="en" />
        <link rel="icon" href="/favicon.ico" hrefLang="fr" />
      </Head>
      <header className={`${nunitoSans.className} ${styles.header}`}>
        <TopLinks className={styles.topLinks} locales={locales} />
        <NavBar />
      </header>
      <main dir={dir} className={`${styles.main} ${nunitoSans.className}`}>
        <BottomNav className={styles.bottomNav} />

        <div className={styles.heroCard}>
          <div className={styles.heroContent}>
            <div className={styles.heroContentLeft}>
              <h1 className={styles.title}>
                <FormattedMessage id="page.home.D3Title" />
              </h1>
              <ul className={styles.navigationMenu}>
                <li>
                  <FormattedMessage id="page.home.diploma" /> /
                </li>
                <li>
                  <FormattedMessage id="page.home.fullTime" /> /
                </li>
                <li>
                  <FormattedMessage id="page.home.navMenu3" />
                </li>
              </ul>
              <ul className={styles.iconsList}>
                <li>
                  <BiPrinter />
                </li>
                <li>
                  <AiOutlineMail />
                </li>
                <li>
                  <FaFacebookF />
                </li>
                <li>
                  <BsTwitter />
                </li>
              </ul>
            </div>
            <div className={styles.heroContentRight}>
              <button className={styles.heroButton}>
                <FormattedMessage id="page.home.applyButton" />
              </button>

              <button className={styles.heroButton}>
                <FormattedMessage id="page.home.contact" />
              </button>
            </div>
          </div>
          <Image
            className={styles.mainImage}
            src={"/Images/mainImage.jpeg"}
            alt={"/Images/mainImage.jpg"}
            width={1492}
            height={496}
          />
        </div>

        <p className={styles.description}>
          <FormattedMessage id="page.home.description" />
        </p>
        <section className={styles.mainContent}>
          <aside>
            {/* About this program section  */}
              <h3 className={styles.aboutProgram}>
                <FormattedMessage id="page.home.aboutProramSidebar" />
              </h3>
            <section className={styles.aboutprogram}>
              <Link className={styles.programList} href="/">
                <FormattedMessage id="page.home.programsListOverview" />
              </Link>{" "}
              <br />
              <Link className={styles.programList} href="/">
                <FormattedMessage id="page.home.programsListEntrance" />
              </Link>{" "}
              <br />
              <Link className={styles.programList} href="/">
                <FormattedMessage id="page.home.programsListAdvanced" />
              </Link>{" "}
              <br />
              <Link className={styles.programList} href="/">
                <FormattedMessage id="page.home.programsListCosts" />
              </Link>{" "}
              <br />
              <Link className={styles.programList} href="/">
                <FormattedMessage id="page.home.programsListCourses" />
              </Link>{" "}
              <br />
              <Link className={styles.programList} href="/">
                <FormattedMessage id="page.home.programsListDetails" />
              </Link>{" "}
              <br />
              <Link className={styles.jobsList} href="/">
                <FormattedMessage id="page.home.programsListGrad" />
              </Link>{" "}
              <br />
              <Link className={styles.programList} href="/">
                <FormattedMessage id="page.home.contact" />
              </Link>{" "}
              <br />
              <Link className={styles.programList} href="/">
                <FormattedMessage id="page.home.programsListSubscribe" />
              </Link>{" "}
              <br />
            </section>
            <section className={styles.infoSection}>
              <h2 className={styles.infoTitle}>
                <FormattedMessage id="page.home.InfoSessions" />
              </h2>
              <p className={styles.infoDescription}>
                <FormattedMessage id="page.home.attendSessions" />
              </p>
              <ul className={styles.dateList}>
                <li className={styles.dates}>
                  <FormattedMessage id="page.home.dates1" />
                </li>
                <li className={styles.dates}>
                  <FormattedMessage id="page.home.date2" />
                </li>
                <li className={styles.dates}>
                  <FormattedMessage id="page.home.date3"/>
                </li>
              </ul>
              <p className={styles.bcitInfo}>
                <FormattedMessage id="page.home.exploreOptions"/> <br/>
                <span className={styles.bcitSessions}>
                  <FormattedMessage id="page.home.infoHyperLink"/>
                  </span>
              </p>
            </section>
            <section className={styles.programOverview}>
              <h2 className={styles.programTitle}>
                <FormattedMessage id="page.home.overview" />
              </h2>
              <ul className={styles.list}>
                <li>
                  Credential:{" "}
                  <span className={styles.diploma}>
                    <FormattedMessage id="page.home.diploma" />
                  </span>
                </li>
                <li>
                  Format:{" "}
                  <span className={styles.fullName}>
                    <FormattedMessage id="page.home.fullTime" />
                  </span>
                </li>
                <li>
                  Length: <span className={styles.years}>2 years</span>
                </li>
                <li>
                  Start Date: <span className={styles.month}>September</span>
                </li>
                <li>
                  Campus: <span className={styles.location}>Burnaby</span>
                </li>
                <li>
                  Domestic Tuition:{" "}
                  <span className={styles.domesticMoney}>$18,000</span>*
                </li>
                <li>
                  International Tuition:{" "}
                  <span className={styles.internationalMoney}>$37,600</span>*{" "}
                  <br />
                  <span className={styles.costEstimate}>*cost estimate</span>
                </li>
              </ul>
              <p className={styles.Mediaprograms}>
                <FormattedMessage id="page.home.mediaPrograms"/>
              </p>
            </section>
            <section className={styles.vistedPrograms}>
              <h2>
                <FormattedMessage id="page.home.recentlyVisited" />
              </h2>
              <p>
                <span className={styles.D3}>
                  <FormattedMessage id="page.home.D3Footer"/> <br/>
                </span>
                <FormattedMessage id="page.home.diploma1"/>
           
              </p>
              <p>
                <span className={styles.FWSD}>
                  <FormattedMessage id="page.home.FWSD"/> <br/>
                </span>
                <FormattedMessage id="page.home.diploma1"/>
              </p>
              <p>
                <span className={styles.CIT}>
                  <FormattedMessage id="page.home.CIT"/> <br/>
                </span>
                <FormattedMessage id="page.home.diploma1"/>
              </p>
            </section>
          </aside>
          <article className={styles.mainArticle}>
            <h2 className={styles.gradJobs}>
              <FormattedMessage id="page.home.programsListGrad" />
            </h2>
            <p className={styles.description}>
              <FormattedMessage id="page.home.gradJobs" />
            </p>
            <p className={styles.jobOppro}>
              <FormattedMessage id="page.home.jobOppro"/>
              </p>
            <ul className={styles.jobList}>
              <li>
                <FormattedMessage id="page.home.jobList1"/>
              </li>
              <li>
                  <FormattedMessage id="page.home.jobList2"/>
                </li>
              <li>
                <FormattedMessage id="page.home.jobList3"/>
                </li>
              <li>
                  <FormattedMessage id="page.home.jobList4"/>
              </li>
              <li>
                <FormattedMessage id="page.home.jobList5"/>
                </li>
              <li>
                <FormattedMessage id="page.home.jobList6"/>
              </li>
              <li>
                <FormattedMessage id="page.home.jobList7"/>
                </li>
              <li>
                <FormattedMessage id="page.home.jobList8"/>
                </li>
              <li>
                <FormattedMessage id="page.home.jobList9"/>
                </li>
              <li>
                 <FormattedMessage id="page.home.jobList10"/>
              </li>
              <li>
                <FormattedMessage id="page.home.jobList11"/>
                </li>
              <li>
                <FormattedMessage id="page.home.jobList12"/>
                </li>
            </ul>

            <div>
              <h3 className={styles.gradOutcomes}>
                <FormattedMessage id="page.home.gradOutcomes"/>
              </h3>

              <p className={styles.gradEmployment}>
                <FormattedMessage id="page.home.gradDescription"/>
                <Link className={styles.studentOutcomes} href="/">
                  <FormattedMessage id="page.home.BCITWebsite"/>
                </Link>
              </p>

              <p className={styles.resultsText}>
                To view these results, you may need to have the{" "}
                <Link className={styles.adobeLink} href="/">

                  Adobe Acrobat Reader
                </Link>{" "}
                installed in your Web browser.
              </p>

              <ul>
                <li className={styles.programName}>
                  <FormattedMessage id="page.home.D3Link"/>
                </li>
              </ul>
              <ul className={styles.pageNav}>
                <li className={styles.goBack}>
                  <FormattedMessage id="page.home.goBack"/> <br/>
                  <Link className={styles.program} href="/">
                    <FormattedMessage id="page.home.programDetails"/>
                  </Link>
                </li>
              <ul className={styles.next}>
                <li className={styles.nextUp}>
                  <FormattedMessage id="page.home.nextUp"/> <br/>
                  <Link className={styles.contact} href="/">
                    <FormattedMessage id="page.home.contactUS"/>
                  </Link>
                </li>
              </ul>
              </ul>

              <p className={styles.disclamer}>
                <FormattedMessage id="page.home.disclaimer"/>
              </p>
            </div>
          </article>
        </section>
        <Footer />
      </main>
    </>
  );
}
