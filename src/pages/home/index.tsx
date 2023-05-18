"use client"
import styles from './page.module.scss'
import ButtonCV from '../../components/ButtonCV'
import AnimationStars from '../../components/AnimationStars'
import HeaderHome from '../../components/HeaderHome'
import HeaderMobile from '../../components/HeaderMobile'

export default function Home() {

  return (
    <body className={styles.container}>
      <main className={styles.content} > 

        < AnimationStars />

        <div className={styles.contentMain}>
          
          <HeaderHome />
          
          <HeaderMobile />

          <section className={styles.intro}>
              <h3>HELLO, WORLD.</h3>
              <h1>Eu sou o Lucas.</h1>
              <span>DESENVOLVEDOR FULL-STACK</span>
              <ButtonCV />
          </section>

        </div>

      </main>
    </body>
  )
}
