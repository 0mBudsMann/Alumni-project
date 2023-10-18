import React from 'react'
import styles from './coverimg.module.css'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({weight: '400', subsets: ['latin'] })

export const Cover = () => {
  return (
    <div className={styles.container}>
         <Image
  src="/cover.jpg"
  width={0}
  height={0}
  sizes="100vw"
  style={{ width: '100%', height: '20vw', marginTop: "25px", marginBottom: "25px" }} // optional
/>
<h1 className={montserrat.className}>Explore scientific, technical, and medical research on GeekHaven</h1>
    </div>
  )
}
