import AnimationStars from "../../components/AnimationStars";
import Header from "../../components/Header"
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithubSquare } from "react-icons/fa";
import styles from './styles.module.scss'


export default function Contacts() {

    return (

        <body className={styles.container}>
            <main className={styles.content} > 

                
                < AnimationStars />
                

                <div className={styles.totalArea}>
                
                    <Header />

                    <div className={styles.contentMain}>
                        <section className={styles.sectionForm}>
                            <div className={styles.contateMe}>
                                <h3>Contate-me</h3>
                                <form action="https://formspree.io/f/xbjeweew" method="post">
                                    <div>
                                        <input className={styles.inputNameEmail} type="text" name="name" id="name" placeholder="Nome" required/>
                                        <input className={styles.inputNameEmail} type="email" name="email" id="email" placeholder="Email" required/>
                                    </div>
                                    <input type="text" name="subject" id="subject" placeholder="Assunto" required/>
                                    <textarea rows={12} cols={58} name="message" id="message" placeholder="Mensagem" required/>

                                    <button className={styles.button} type="submit"> Enviar</button>
                                </form>
                            </div>

                        </section>

                        <section className={styles.sectionSocialMedia}>

                            <h3>Social Midia</h3>
                            
                            <div className={styles.socialMedia}>
                                <div className={styles.linkLinkedin} onClick={()=> window.open('https://www.linkedin.com/in/lucasvale95/', '_blank')}>
                                    <div >
                                        <IoLogoLinkedin size={130} />
                                    </div>
                                    <span>LinkedIn</span>
                                </div>

                                <div className={styles.linkGithub} onClick={()=> window.open('https://github.com/lucasvale95', '_blank')}>
                                    <div>
                                        <FaGithubSquare size={110} />
                                    </div>
                                    <span>GitHub</span>
                                </div>
                            </div>
                            
                        </section>

                    </div> 
                    
                </div>

            </main>
        </body>
    )
}