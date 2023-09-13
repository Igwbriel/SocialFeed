import styles from './Sidebar.module.css';
import { PencilLine } from  'phosphor-react'

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img
             className={styles.cover}
             src="https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29taWNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=50"
             />
           
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/101999960?v=4"/>

                <strong>Gabrielzin</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                
                <a href="#">
                    <PencilLine size={20} />
                     Editar perfil</a>
            </footer>
        </aside>
    );
}