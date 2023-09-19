import styles from './Post.module.css';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { Avatar } from './avatar';
import { Comment } from './comment';
import { useState } from 'react';

export function Post({ author, publishedAt, content}) {
    const [comments, setComments] = useState([
        1,
        2,
    ])

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    }); 

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR, addSuffix: true,
    })


    function handleCreationNewComment() {
        event.preventDefault()
        setComments([...comments, comments.length + 1])
    }

    return (
        <article className={styles.Post}>
            <header>
                <div className={styles.author}>
                <Avatar src={author.avatarURL}/>    
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                 {publishedDateRelativeToNow}
                    </time>
            </header>
        <div className={styles.content}>
        {content.map(line => {
            if (line.type === 'paragraph') {
                return <p>{line.content}</p>
            } else if (line.type === 'link') {
                return <p><a href="#">{line.content}</a></p>
            }
        })}
        </div>

        <form onSubmit={handleCreationNewComment} className={styles.commentForm}>
            <strong>Deixe seu comentário</strong>
            <textarea placeholder='Deixe seu Feedback'></textarea>
            <footer>
             <button type='submit'>Comentar</button>
            </footer>
        </form>

            <div className={styles.commentList}>
                {comments.map(comment =>{
                    return <Comment />
                })}
            </div>
        </article> 
    )
}