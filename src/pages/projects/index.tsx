"use client"
import AnimationStars from "../../components/AnimationStars";
import Header from "../../components/Header";
import styles from './styles.module.scss'
import ButtonPrimary from "../../components/ButtonPrimary";
import VideoPlayer from "../../components/VideoPlayer";
import { useState } from 'react'
import { Link } from "react-router-dom";
import { database } from "../../database/database";

export type Project = {
    title: string;
    description: string;
    video: string;
    developedWith: string;
    librariesAndTools: string[];
    linkProduction: string;
    linkGithub: string;
}

export default function Projects () {

    const [projects, setProjects] = useState<Project[]>(database)
    const [projectRender, setProjectRender] = useState<Project>(database[0])

    return (
        <body className={styles.container}>
            <main className={styles.content} > 

                
                < AnimationStars />
                

                <div className={styles.contentMain}>
                
                    <Header />

                    <section className={styles.project}>

                        <div className={styles.titleProjects}>
                            <ButtonPrimary title={'Board'} projects={projects} projectRender={projectRender} setProjectRender={setProjectRender}/>
                            <ButtonPrimary title={'Motors Shop'} projects={projects} projectRender={projectRender} setProjectRender={setProjectRender}/>
                            <ButtonPrimary title={'Coffe'} projects={projects} projectRender={projectRender} setProjectRender={setProjectRender}/>
                            <ButtonPrimary title={'Coffe'} projects={projects} projectRender={projectRender} setProjectRender={setProjectRender}/>
                            <ButtonPrimary title={'Coffe'} projects={projects} projectRender={projectRender} setProjectRender={setProjectRender}/>
                            <ButtonPrimary title={'Coffe'} projects={projects} projectRender={projectRender} setProjectRender={setProjectRender}/>
                        </div>

                        <div className={styles.contentVideo}> 

                            <div className={styles.video}>
                                <VideoPlayer src={projectRender.video}/>
                            </div>

                            <div className={styles.title}>
                                <h2>{projectRender.title}</h2>
                                <p>{projectRender.description}</p>
                            </div>


                        </div>

                        <div className={styles.description}>
                            <div className={styles.descriptionTitle}>
                                <h3>Desenvolvido com</h3>

                                <p>{projectRender.developedWith}</p>
                            </div>

                            <div className={styles.descriptionTitle}>
                                <h3>Bibliotecas e Ferramentas</h3>

                                {projectRender.librariesAndTools.map((libraries, index)=> <p key={index}>{libraries}</p>)}
                            </div>

                            <div className={styles.descriptionTitle}>
                                <h3>Mais informações</h3>

                                
                                <Link className={styles.descriptionContainer} to={projectRender.linkProduction}>Ir para o site</Link>
                                <Link className={styles.descriptionContainer} to={projectRender.linkGithub}>Ver o código</Link>
                            </div>
                        </div>

                    </section>

                    
                </div>

            </main>
        </body>
    )
}