# rocketseat-ignite-react-project01

## Creating a React project

### Vite

To create a new project using Vite, run:

```bash
npm create vite@latest
```

> **Trick**: you can pass "`.`" as the project name and it will allow you to pick the current directory as the project root. But beware, it will also ask permission to delete any existing files in that directory.

Pick `react` and `TypeScript` as the framework and variant when prompted (though in this project we'll start with the `JavaScript` variant and later we'll add TypeScript support).

### Installing the dependencies

Then, run the following command to install the dependencies:

```bash
npm install
```

### Running the project

Finally, execute the project with the command:

```bash
npm run dev
```

## Concepts

### Components and Properties

A component is a function that acts like a complex html tag. It can receive properties, and it returns a piece of html (+javascript) code.

```jsx
/* Post.jsx */
export function Post(props) {
  return (
    <div>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </div>
  )
}

/* App.jsx */
import { Post } from './Post'

export function App() {
  return(
    <div>
      <Post author="Me" content="Whatever I want to say">
      <Post author="You" content="Whatever you want to say">
    </div>
  )
}
```

## Common Problems

### 502 Bad Gateway

When attempting to run the project on Codespaces, the server might give you a Bad Gateway error. You can solve this through one of the many ways suggested on https://github.com/orgs/community/discussions/28563, but here I'll just suggest adding the `--host` to the `dev` script on `package.json` file:

```json
{
    ...
    "scripts": {
        "dev": "vite --host",
        ...
    },
    ...
}
```
