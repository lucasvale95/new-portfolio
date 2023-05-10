"use client"
import AnimationStars from "../../components/AnimationStars";
import Header from "../../components/Header";
import styles from './styles.module.scss'
import ButtonPrimary from "../../components/ButtonPrimary";
import VideoPlayer from "../../components/VideoPlayer";
import { useState } from 'react'
import { Link } from "react-router-dom";
import { database } from "../../database/database";
import {IoLogoGithub, IoIosShareAlt} from 'react-icons/io'
import {FaSass, FaNodeJs, FaReact} from 'react-icons/fa'
import {SiAuth0, SiStyledcomponents, SiNextdotjs, SiFirebase} from 'react-icons/si'
import {SlPaypal} from 'react-icons/sl'
import {TbBrandTypescript} from 'react-icons/tb'

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
                        </div>

                        <div className={styles.contentVideo}> 

                            <div className={styles.video}>
                                <VideoPlayer src={projectRender.video}/>
                            </div>

                            <div className={styles.title}>
                                <h2>{projectRender.title}</h2>
                                <p>{projectRender.description}</p>

                                <div className={styles.links}>
                                    <div>
                                        <Link className={styles.link} to={projectRender.linkGithub}>Github</Link>
                                        <IoLogoGithub color="var(--main-color)" size={25}/>
                                    </div>
                                    <div>
                                        <Link className={styles.link} to={projectRender.linkProduction}>Para o site</Link>
                                        <IoIosShareAlt color="var(--main-color)" size={20}/>
                                    </div>
                                    
                                </div>

                                <div className={styles.tools}>
                                  {projectRender.librariesAndTools.map((elem) => {
                                    if (elem === "Sass") return <FaSass size={25}/> 
                                    if (elem === "OAuth") return <SiAuth0 size={25}/> 
                                    if (elem === "Paypal") return <SlPaypal size={25}/> 
                                    if (elem === "StyledComponents") return <SiStyledcomponents size={25}/> 
                                    if (elem === "NodeJs") return <FaNodeJs size={25}/> 
                                    if (elem === "Typescript") return <TbBrandTypescript size={25}/> 
                                    if (elem === "NextJS") return <SiNextdotjs size={25}/> 
                                    if (elem === "ReactJS") return <FaReact size={25}/>
                                    if (elem === "Firebase") return <SiFirebase size={25}/>
                                    })}
                                </div>
                            </div>

                        </div>
                    </section>
                </div>
            </main>
        </body>
    )
}