import styles from './styles.module.scss'
import React, { SetStateAction, Dispatch } from 'react';

type Project = {
    title: string;
    description: string;
    video: string;
    developedWith: string;
    librariesAndTools: string[];
    linkProduction: string;
    linkGithub: string;
}

interface IButtonProps {
    title: string,
    projects: Project[],
    projectRender: Project,
    setProjectRender: Dispatch<SetStateAction<Project>>
}

export default function ButtonPrimary ( {title, projects, projectRender, setProjectRender}: IButtonProps ) {

    function handleProject() {
        const projectClicked = projects.filter((project)=> project.title === title)
        setProjectRender(projectClicked[0])
    }

    return (
        <div className={styles.card} onClick={()=> handleProject()} >
            <div className={styles.content} style={{backgroundColor: title === projectRender.title ? 'var(--main-color)' : '#000'}} >
                <p style={{color: title === projectRender.title ? '#000' : '#fff'}}>{title}</p>
            </div>
        </div>
    )
}