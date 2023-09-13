import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './comment.module.css';

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/101999960?v=4"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> Gedson Fernandes </strong>
                            <time title='09 de Setembro às 18:22' dateTime='2022-05-11 18:20:54'>Publicado há 1 hora</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>Muito bom, Brenoquinha, parabéns!! </p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        aplausos <span>245</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}