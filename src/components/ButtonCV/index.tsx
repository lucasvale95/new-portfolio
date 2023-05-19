import styles from "./styles.module.scss"

export default function ButtonCV () {

    return(
        <button className={styles.content} onClick={()=> window.open("https://docs.google.com/document/d/14-PA8sKHxxPeJACuG1nqLxzROWhxXuBrXbnHM5aUeWk/edit?usp=sharing", "_blank")}> Curriculum Vitae </button>
    )
}