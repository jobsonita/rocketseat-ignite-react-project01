import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odio aliquam voluptate recusandae, non laborum dolore, excepturi iure repellat veniam modi, aliquid tempora facere libero cupiditate unde exercitationem repellendus! Fugiat!"
          />
          <Post
            author="Gabriel Buzzi"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}
