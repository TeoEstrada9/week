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

const nunitoSans = Nunito_Sans({
  weight: ['400', '700'],
  subsets: ['latin']
})
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
      <header className={nunitoSans.className}>
        <div>
          {[...locales].sort().map((locale) => (
            <Link key={locale} href="/" locale={locale}>
              <div>{locale}</div>
            </Link>
          ))}
        </div>
      </header>
      <main dir={dir} className={`${styles.main} ${nunitoSans.className}`}>
        <TopLinks className={styles.topLinks}/>

        <Image className={styles.logo}
          src={"/images/BCIT_logo.png"}
          alt={"/images/BCIT_logo.png"}
          width= {60}
          height={60}
        />
        <NavBar/>
        <BottomNav className={styles.bottomNav}/>
      
        <h1 className={styles.title}>Digital Design and <br/>
            Development
        </h1>
        <ul className={styles.navigationMenu}>
            <li>
                Diploma  / 
            </li>
            <li>
                Full-Time  / 
            </li>
            <li>
                School of Business + Media 
            </li>
        </ul>
        <button className={styles.applyNow}>Apply Now</button>
        <button className={styles.contactUs}>Contact Us</button>
        <Image className={styles.mainImage}
          src={"/Images/mainImage.jpeg"}
          alt={"/Images/mainImage.jpg"}
          width={1492}
          height={496}
        />

        <h1 />
        <FormattedMessage
          id="page.home.title"
          values={{ b: (info) => <b>{info}</b> }}
        />
        <p className={styles.description}>
          <FormattedMessage id="page.home.description" />
        </p>
        {/* About this program section  */}
        <aside className={styles.aboutprogram}>
          <h3 className={styles.aboutProgram}>
              ABOUT THIS <br/> 
              PROGRAM
          </h3>
          <Link className={styles.programList} href="/">Overview</Link> <br/>
          <Link className={styles.programList} href="/">Entrace Requirements</Link> <br/>
          <Link className={styles.programList} href="/">Advanced Placement</Link> <br/>
          <Link className={styles.programList} href="/">Costs & Supplies</Link> <br/>
          <Link className={styles.programList} href="/">Courses</Link> <br/>
          <Link className={styles.programList} href="/">Program Details</Link> <br/>
          <Link className={styles.jobsList} href="/">Graduating & Jobs</Link> <br/>
          <Link className={styles.programList} href="/">Contact Us</Link> <br/>
          <Link className={styles.programList} href="/">Subscribe</Link> <br/>
        </aside>
        <aside className={styles.infoSection}>
          <h2 className={styles.infoTitle}>
            Info 
            Sessions
            </h2>
          <p className={styles.infoDescription}>
            Attend an upcoming <br />
            information session for <br />
            this program:
          </p>

          <ul className={styles.dateList}>
              <li className={styles.dates}>
                  April 3rd at 5:30pm
              </li>
              <li className={styles.dates}>
                  May 8th at 5:30pm 
              </li>
              <li className={styles.dates}>
                  June 19th at 5:30pm 
              </li>
              <li className={styles.dates}>
                  July 10th at 5:30pm
              </li>
          </ul>

          <p className={styles.bcitInfo}>
              Explore all the upcoming <br/>
              <span className={styles.bcitSessions}>BCIT info sessions </span>
          </p>
        </aside>
        <aside className={styles.programOverview}>
            <h2>
              Program <br/>
              Overview
             </h2>
            <ul>
                <li>
                    Credential: Diploma
                </li>
                <li>
                    Format: Full-Time
                </li>
                <li>
                    Length: 2 years
                </li>
                <li>
                    Start Date: September
                </li>
                <li>
                    Campus: Burnaby
                </li>
                <li>
                    Domestic Tuition: <br/> $18,000 
                </li>
                <li>
                    International Tuition: <br/> 37,600 
                </li>
            </ul>
              <p>
                  All Business + Media <br/>
                  Programs
              </p>
        </aside>
       <aside>
            <h2>
              Recently <br/>
              Visited <br/>
              programs
              </h2>
              <p>
                <span>
                    Digital Design and <br/> 
                    Development <br/>
                </span>
                Diploma
              </p>
              <p>
                <span>
                   Full-Stack Web 
                   Development <br/>
                </span>
                Diploma
              </p>
              <p>
                <span>
                  Computer Information 
                  Technology <br/>
                </span>
                Diploma
              </p>
       </aside>
        <h2 className={styles.gradJobs}>Graduating & Jobs</h2>
        <p className={styles.description}>
          Graduates have a variety of digital media skills that can lead them to
          various <br />
          content design and development jobs with digital media production
          studios, <br />
          advertising companies, design firms, and web and mobile app
          developers. <br />
          Graduates may also have opportunities to be part of a team that
          creates games, <br />
          digital animations, and dynamic content.
        </p>
        <p className={styles.jobOppro}>Job Opportunities:</p>
        <ul className={styles.jobList}>
          <li>Mobile and Web Content Artist</li>
          <li>Internet Marketing Coordinator</li>
          <li>Digital Media Coordinator</li>
          <li>Web and Mobile Developer</li>
          <li>Interface Desinger</li>
          <li>Game User Interface Desinger</li>
          <li>Project Manager</li>
          <li>Digital Media Manager</li>
          <li>Digital Media Producer</li>
          <li>Web Development Manager</li>
          <li>Dynamic Media Designer</li>
          <li>Digital Media Producer Designer</li>
        </ul>

        <div>
          <h3 className={styles.gradOutcomes}>Graduate Employment Outcomes</h3>

          <p className={styles.gradEmployment}>
            The BCIT student outcomes report presents summary findings from the
            annual survey of former students administered <br />
            by BC Stats one to two years after graduation. These reports combine
            the last three years of available results for the <br />
            2020-2022 BCIT Outcomes Surveys of 2019-2021 graduates and for
            Degree 2017-2019 graduates. The reports are <br />
            organized into three-page summaries containing information on
            graduates labour market experiences and opinions <br />
            regarding their education. More detailed information can be accessed
            at the <Link className={styles.studentOutcomes} href="/">BC Student Outcomes website.</Link>
          </p>

          <p className={styles.resultsText}>
            To view these results, you may need to have the{" "}
            <Link className={styles.adobeLink} href="/">Adobe Acrobat Reader</Link> installed in your Web
            browser.
          </p>

          <ul>
            <li className={styles.programName}>
              Digital Design and Development
            </li>
          </ul>
          <ul className={styles.pageNav}>
            <li className={styles.goBack}>
              Go back <br />
              <Link className={styles.program} href="/">PROGRAM DETAILS</Link>
            </li>
            <li className={styles.nextUp}>
              Next up <br />
              <Link className={styles.contact} href="/"> CONTACT US</Link>
            </li>
          </ul>

          <p className={styles.disclamer}>Programs and courses are subject to change without notice.</p>
        </div>
      </main>
    </>
  );
}
