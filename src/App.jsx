import {Post} from './components/Post';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';

import styles from './app.module.css';
import './global.css'

const posts = [
  { 
    id: 1,
    author: {
      avatarURL: 'https://avatars.githubusercontent.com/u/101999960?v=4',
      name: 'Gabriel Dias',
      role: 'Student '
    },
    content: [
      {type : 'paragraph', content: 'Fala galera'},
      {type : 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis maiores eveniet sequi, nesciunt inventore cum pariatur error ducimus maxime culpa quos id voluptate sapiente aspernatur officia beatae ad. Aliquam, ipsum! '},
      {type : 'link', content: 'Jaine.design/dotorcare'},
    ],
    publishedAt: new Date('2023-11-09 13:30:30'),
  },
  { 
    id: 2,
    author: {
      avatarURL: 'https://avatars.githubusercontent.com/u/106558706?v=4',
      name: 'Gedson Fernandes',
      role: 'Student '
    },
    content: [
      {type : 'paragraph', content: 'Fala galera'},
      {type : 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis maiores eveniet sequi, nesciunt inventore cum pariatur error ducimus maxime culpa quos id voluptate sapiente aspernatur officia beatae ad. Aliquam, ipsum! '},
      {type : 'link', content: 'Jaine.design/dotorcare'},
    ],
    publishedAt: new Date('2023-06-09 15:30:45'),
  } 

]


function App() {
  return (
    <div>
      <Header/>

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(posts => {
         return (
         <Post
          key={posts.id}
          author={posts.author}
          content={posts.content}
          publishedAt={posts.publishedAt}
         />
         )
        })}
      </main>
    </div> 
   </div>
  )
}

export default App
