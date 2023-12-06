import React from 'react'
import {Inter} from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <main className={styles.main} >
      <h1>Home Page</h1>
      <Link href={'/about'} >Link to about page</Link>
    </main>
  )
}

export default Home