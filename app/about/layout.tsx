import React from 'react'
import styles from './styles.module.css'
export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return(
        <>  
            <h1>About Title from layout.tsx</h1>
            <main className={styles.main} >
                {children}
            </main>
        </>
    )
  }
