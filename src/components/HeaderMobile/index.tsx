import { useState } from "react"
import "./styles.css"
import { Link } from "react-router-dom"

export default function HeaderMobile() {

    const [toggleMenu, setToggleMenu] = useState('')

    return (
        <>
            <ul className={`navigation ${toggleMenu}`}>
                <li>
                    <Link to={'/'}>Inicial</Link>
                    <Link to={'/about-me'}>Sobre</Link>
                    <Link to={'/projects'}>Projetos</Link>
                    <Link to={'/contacts'}>Contato</Link>
                </li>
                <span className={'toggleMenu'} onClick={()=> toggleMenu == '' ? setToggleMenu('active') : setToggleMenu('')}></span>

            </ul>
        </>
    )
}