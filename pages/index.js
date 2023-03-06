import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { FormattedMessage, useIntl } from 'react-intl'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'



export default function Home({dir}) {

const { locales } = useRouter(); 
const intl = useIntl()

const title = intl.formatMessage({id: "page.home.head.title"})
const description = intl.formatMessage({id: "page.home.head.meta.description"})

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" hrefLang='x-default'/>
        <link rel="icon" href="/favicon.ico" hrefLang='en'/>
        <link rel="icon" href="/favicon.ico" hrefLang='fr'/>





      </Head>
      <header>
      <div>
        {[...locales].sort().map((locale) => (
          <Link key ={locale} href="/" locale={locale}>
          <div>{locale}</div>
          </Link>
        ))}
           </div>
        </header>
      <main dir={dir} className={styles.main}>
        <h1>
          <FormattedMessage id="page.home.title" values={{b: (info) => <b>{info}</b>}}/>
          <p className={styles.description}>
            <FormattedMessage id="page.home.description"/>
          </p>
        </h1>

        


      
       
      </main>
    </>
  )
}
