"use client"
import styles from './page.module.scss'
import ButtonCV from '../../components/ButtonCV'
import AnimationStars from '../../components/AnimationStars'
import Header from '../../components/Header'

export default function Home() {

  return (
    <body className={styles.container}>
      <main className={styles.content} > 

        < AnimationStars />

        <div className={styles.contentMain}>
          
          <Header />

          <section className={styles.intro}>
              <h3>HELLO, WORLD.</h3>
              <h1>Eu sou Lucas Vale.</h1>
              <span>DESENVOLVEDOR FULL-STACK</span>
              <ButtonCV />
          </section>
        </div>

      </main>
    </body>
  )
}
