import styles from './styles.module.scss'

export default function Abilities() {

    return (
        <section className={styles.container}>
          <div className={styles.content}>
            <div className={styles.title}>
                <h2>Habilidades</h2>
            </div>
            <div className={styles.chart}>
                <h4>Front-end</h4>
                <footer>
                    <div className={styles.load} style={{"width": "90%"}}></div>
                </footer>
            </div>
            <div className={styles.chart}>
                <h4>ReactJS</h4>
                <footer>
                    <div className={styles.load} style={{"width": "85%"}}></div>
                </footer>
            </div>
            <div className={styles.chart}>
                <h4>Javascript</h4>
                <footer>
                    <div className={styles.load} style={{"width": "85%"}}></div>
                </footer>
            </div>
            <div className={styles.chart}>
                <h4>CSS <span>(Sass, Styled-Components, Tailwind e Bootstrap)</span></h4>
                <footer>
                    <div className={styles.load} style={{"width": "80%"}}></div>
                </footer>
            </div>
            <div className={styles.chart}>
                <h4>Back-end</h4>
                <footer>
                    <div className={styles.load} style={{"width": "75%"}}></div>
                </footer>
            </div>
            <div className={styles.chart}>
                <h4>NodeJS</h4>
                <footer>
                    <div className={styles.load} style={{"width": "75%"}}></div>
                </footer>
            </div>
            <div className={styles.chart}>
                <h4>Firebase</h4>
                <footer>
                    <div className={styles.load} style={{"width": "75%"}}></div>
                </footer>
            </div>
            <div className={styles.chart}>
                <h4>Express</h4>
                <footer>
                    <div className={styles.load} style={{"width": "70%"}}></div>
                </footer>
            </div>
          </div>
        </section>
    )
}