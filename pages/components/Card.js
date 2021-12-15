import React from 'react'
import Link from 'next/link'
import styles from '/styles/Home.module.css'

export default function Card({ title, desc, href, type, date }) {
  return (
    <div className={styles.main_card}>
      <div className={styles.info_wrapper}>
        <h1>{title}</h1>
        <p>{desc}</p>
        <span>{type}</span>
        <span>{date}</span>
      </div>

      <Link href={href}>Read more</Link>
    </div>
  )
}
