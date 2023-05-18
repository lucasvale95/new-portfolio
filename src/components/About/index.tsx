import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

export default function About() {

    return (
        <section className={styles.container}>
          <div className={styles.content}>
            <div className={styles.description}>
                <p>Atualmente morando em Bauru-SP, tenho 27 anos e estou em busca da minha primeira oportunidade como Desenvolvedor. Estou constantemente em busca de novos conhecimentos, tanto habilidades interpessoais quanto profissionais.</p>
                <p>Em 2022, tive a oportunidade de fazer parte da Kenzie Academy, uma escola de programação, que impulsionou ainda mais o meu conhecimento, como gerenciamento de tempo, trabalho em equipe, comunicação clara, reciprocidade e aprendizado autônomo. Estou sempre disposto a dar o meu melhor e tenho um foco determinado em alcançar resultados, valorizando ao máximo o cumprimento dos prazos de entrega.</p>
                  
                <p>No curso tive acesso a diversas tecnologias Front-end e Back-end. Saiba mais em <Link to={"/projects"}>meus projetos</Link>.</p> 
              </div>
          </div>
        </section>
    )
}