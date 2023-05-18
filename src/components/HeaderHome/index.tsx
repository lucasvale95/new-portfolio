import { Link } from "react-router-dom";
import styles from "./styles.module.scss"
import {IoLogoLinkedin, IoLogoGithub} from 'react-icons/io'


export default function HeaderHome () {

    return (
        <section className={styles.navigation}>

            <div className={styles.logo}>
              <h1>lucas<span>.dev</span></h1>
            </div>

            <nav >
              <Link className={styles.linkOne} to={'/'}>Home</Link>
              <Link className={styles.linkTwo} to={'/about-me'}>Sobre</Link>
              <Link className={styles.linkThree} to={'/projects'}>Projetos</Link>
              <Link className={styles.linkFour} to={'/contacts'}>Contato</Link>
            </nav>

            <div className={styles.socialMedia}>
              <Link to={'https://www.linkedin.com/in/lucasvale95/'}>
                <IoLogoLinkedin />
              </Link>
              <Link to={'https://github.com/lucasvale95'}>
                <IoLogoGithub />
              </Link>
            </div>

          </section>
    )
}