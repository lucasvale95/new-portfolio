"use client"
import styles from './page.module.scss'
import AnimationStars from '../../components/AnimationStars'
import Header from '../../components/Header'
import Abilities from '../../components/Abilities'
import About from '../../components/About'
import HeaderMobile from '../../components/HeaderMobile'

export default function AboutMe() {

  return (
    <body className={styles.container}>
      <main className={styles.content} > 

        < AnimationStars />

        <div className={styles.contentMain}>
          
          <Header />
          <HeaderMobile />

          < About />

          <Abilities />
        </div>

      </main>
    </body>
  )
}