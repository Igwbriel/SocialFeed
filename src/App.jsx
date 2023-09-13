import {Post} from './components/Post';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';

import styles from './app.module.css';
import './global.css'

function App() {
  return (
    <div>
      <Header/>

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post
          author = 'Gabrielzin'
          content = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, laboriosam harum voluptate dolorem alias iste autem tempora, maxime debitis possimus non sed earum dignissimos a explicabo id? Recusandae, est explicabo.'
        />
        <Post
          author= 'Miguel'
          content= 'AOOOOOOOOOOBA'
        />
      </main>
    </div> 
   </div>
  )
}

export default App
