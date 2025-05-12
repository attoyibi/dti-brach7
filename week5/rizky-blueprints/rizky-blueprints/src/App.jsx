import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
//import './App.css';

function App() {
  const [index, setIndex] = useState(0);

  function plusClick() {
    setIndex(index + 1);
  }

  function minClick() {
    setIndex(index - 1);
  }

  function notes() {
    if (index == 10) {
      return "you're doing great!";
    }
    return null;
  }

  return (
    <div>
      <h1>hello world</h1>
      <p>index : {index}</p>
      <p>notes : {notes()}</p>
      <button type="button" onClick={plusClick}>
        click me to add
      </button>
      <button type="button" onClick={minClick}>
        click me to decrease
      </button>
    </div>
  );
}

export default App;
