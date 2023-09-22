import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './avatar';
import styles from './comment.module.css';
import { useState } from 'react';

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/106558706?v=4"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong> Gedson Fernandes </strong>
                            <time title='09 de Setembro às 18:22' dateTime='2022-05-11 18:20:54'>Publicado há 1 hora</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        aplausos <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}