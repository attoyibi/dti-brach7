// tempat import inisialisasi
import React, { useState } from 'react'
import Form from './Form';


export default function App() {
  // tempat logic
  // let name = "rizky";// variabel biasa
  // buat dalam bentuk state
  // let varAge = 25
  const [name, setName] = useState("muchson"); // dalam bentuk state
  const [age, setAge] = useState(25); // dalam bentuk state
  const [score, setScore] = useState(90); // number
  const [color, setColor] = useState("red");
  const [size, setSize] = useState("10"); //string
  const [isShow, setIsShow] = useState(true); //boolean
  const [isLoading, setIsLoading] = useState(false); //boolean

  //event handler
  function handleClick() {
    console.log("handle click")
    setAge(age + 1);
  }
  function handleClickScore() {
    console.log("handleClickScore");
    setScore(score + 10);
    if (score >= 100) {
      alert("maximum");
      setScore(100);
    }
  }
  function minusTen() {
    setScore(score - 10);
  }

  function changeGray() {
    setColor("gray");
  }

  function changeSize() {
    setSize(20);
    console.log(size);
  }

  function changeShow() {
    //untuk merupah value dari true menjadi false
    setIsShow(!isShow);
  }
  console.log("boolean", isShow);

  return (
    // tempat ditampikan
    <div>
      <h1>App Component</h1>
      <p style={{ backgroundColor: color, fontSize: size }}>name : {name}</p>
      <p>Age : {age}</p>
      <p>Score : {score}</p>
      {/* pakek ? artinya ternary versi if else*/}
      {isShow ? <p>Color : {color}</p> : <p>Loading...</p>}
      {isShow && <p>Color and : {color}</p>}
      {/* pakek ? artinya ternary versi else if*/}
      {/* {
        isShow ?// kondisi
          (<p>Color : {color}</p>) // hasil
          : isLoading ? ( // kondisi
            <p>Loading ..</p>
          ) : null
      } */}

      {/* <p>varAge : {varAge}</p> */}
      {/* <button type="button" onClick={handleClick}>+</button> */}
      <button type="button" onClick={handleClickScore}>+10</button>
      <button type="button" onClick={minusTen}>-10</button>
      <button type="button" onClick={changeGray}>gray</button>
      <button type='button' onClick={changeSize}>Size20</button>
      <button type='button' onClick={changeShow}>isShow</button>
      <hr />
      <Form />
    </div>
  )
}

