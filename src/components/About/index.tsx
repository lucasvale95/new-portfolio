import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export default function About() {

    return (
        <section className={styles.container}>
          <div className={styles.content}>
            <div className={styles.title}>
                <h2>Sobre mim</h2>
            </div>
            <div className={styles.description}>
                <p>Sou de Bauru-SP, tenho 27 anos e estou em busca da minha primeira oportunidade como Desenvolvedor Web Junior. Meus conhecimentos em programação incluem um conhecimento avançado na linguagem Javascript, assim como noções básicas em PHP. Já realizei alguns projetos front-end em React e Next, no back-end tive contato com NodeJS usando o framework Express, assim como o Firebase do Google. Saiba mais em <Link to={"/projects"}>meus projetos</Link>.</p> 
                <p>Também possuo familiaridade com boas práticas de desenvolvimento, Vivência na construção de projetos em equipe, utilização de metodologias ágeis, conhecimento em versionamento de código com GIT, integração e elaboração de APIs REST. </p> 
            </div>
          </div>
        </section>
    )
}