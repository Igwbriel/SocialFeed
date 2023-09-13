import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.Post}>
            <header>
                <div className={styles.author}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/101999960?v=4"/>
                <div className={styles.authorInfo}>
                    <strong>Gabriel Dias</strong>
                    <span>Web Developer</span>
                </div>
                </div>

                <time title='09 de Setembro às 18:22' dateTime='2022-05-11 18:20:54'>Publicado há 1 hora</time>
            </header>
        <div className={styles.content}>
            <p>Fala galera</p>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis maiores eveniet sequi, nesciunt inventore cum pariatur error ducimus maxime culpa quos id voluptate sapiente aspernatur officia beatae ad. Aliquam, ipsum! </p>
            <p><a href="">Jaine.design/dotorcare</a></p>
            <p>
                <a href="">#NovoProjeto </a> {' '}
                <a href="">#NLW </a> {' '}
                <a href="">#Rocketseat</a>
            </p>
        </div>

        <form className={styles.commentForm}>
            <strong>Deixe seu comentário</strong>

            <textarea placeholder='Deixe seu Feedback'></textarea>
            <footer>
             <button type='submit'>Comentar</button>
            </footer>
        </form>

        </article>
    )
}