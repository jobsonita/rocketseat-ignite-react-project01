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

### CSS Modules

```css
/* src/App.module.css */
.danger {
  background: red;
}
```

```jsx
import styles from './App.module.css';

export function App() {
  return (
    <div styles={styles.danger}>
      <p>This paragraph has a red background</p>
    </div>
  )
}
```

### Iteration

```jsx
import { Post } from './Post'

const posts = [
  { author: 'Me', content: 'Whatever I want to say' },
  { author: 'You', content: 'Whatever you want to say' },
]

export function App() {
  return(
    <div>
      {posts.map(post => {
        return (
          <Post author={post.author} content={post.content}>
        );
      })}
    </div>
  )
}
```

#### Keys

Keys should be unique to each item in the lists, because they're often used for caching purposes.

```jsx
const posts = [
  { id: 1, author: 'Me', content: 'Whatever I want to say' },
  { id: 2, author: 'You', content: 'Whatever you want to say' },
]

export function App() {
  return(
    <div>
      {posts.map(post => {
        return (
          <Post key={post.id} author={post.author} content={post.content}>
        );
      })}
    </div>
  )
}
```

### State

```jsx
import { useState } from 'react'

export function App() {
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return(
    <div>
      <p>Value: {value}</p>
      <br />
      <input type="text" onChange={handleChange} />
    </div>
  )
}
```

#### Closure

In React, queuing state update function calls won't affect the state in the current context.

```jsx
import { useState } from 'react

export function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
    console.log(counter);
    setCounter(counter + 1);
    console.log(counter);
    setCounter(counter + 1);
    console.log(counter);
    // The same value of counter will be printed to the console 3 times
    // and the next value displayed on screen will just be increased by 1.
  }

  return (
    <div>
      <p>Count: {counter}</p>
      <br />
      <button type="button" onClick={incrementCounter}>Increment</button>
    </div>
  );
}
```

However, we can pass functions to state update functions. These functions receive the latest state as a parameter, allowing us to queue multiple calls to the state update function, like below:

```jsx
import { useState } from 'react

export function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter => counter + 1);
    setCounter(counter => counter + 1);
    setCounter(counter => counter + 1);
    // Each call will increment the latest state of the counter by 1
    // The next value displayed on screen will be increased by 3.
  }

  return (
    <div>
      <p>Count: {counter}</p>
      <br />
      <button type="button" onClick={incrementCounter}>Increment</button>
    </div>
  );
}
```

### Communication between components

```jsx
function Child({ onMyChange }) {
  function handleChange(event) {
    onMyChange(event.target.value);
  }

  return (
    <input type="text" onChange={handleChange}>
  );
}

function Parent() {
  const [value, setValue] = useState('');

  function handleMyChange(value) {
    setValue(value);
  }

  return (
    <>
      <p>{value}</p>
      <Child onMyChange={handleMyChange} />
    </>
  );
}
```

### Immutability

We should never change the variables directly (like the `list` below). Instead, we create a new list and use the `setList` method to update the state of our `list` variable.

```jsx
import { useState } from 'react'

export function App() {
  const [list, setList] = useState([1, 2, 3]);

  function handleClick() {
    const newList = [...list, list.length + 1];

    setList(newList);
  }

  return(
    <div>
      <ul>
        {list.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <br />
      <button type="button" onClick={handleClick} />
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
