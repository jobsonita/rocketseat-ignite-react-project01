import { Post } from './Post'

export function App() {
  return (
    <div>
      <Post
        author="Diego Fernandes"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda odio aliquam voluptate recusandae, non laborum dolore, excepturi iure repellat veniam modi, aliquid tempora facere libero cupiditate unde exercitationem repellendus! Fugiat!"
      />
      <Post
        author="Gabriel Buzzi"
        content="Um novo post muito legal"
      />
    </div>
  )
}
