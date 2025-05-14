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
  const [isShow, setIsShow] = useState(true); //string

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
    setIsShow(!isShow);
  }
  console.log("boolean", isShow);




  return (
    // tempat ditampikan
    <div>
      <p style={{ backgroundColor: color, fontSize: size }}>name : {name}</p>
      <p>Age : {age}</p>
      <p>Score : {score}</p>
      {isShow ? <p>Color : {color}</p> : false}  
      {/* <p>varAge : {varAge}</p> */}
      {/* <button type="button" onClick={handleClick}>+</button> */}
      <button type="button" onClick={handleClickScore}>+10</button>
      <button type="button" onClick={minusTen}>-10</button>
      <button type="button" onClick={changeGray}>gray</button>
      <button type='button' onClick={changeSize}>Size20</button>
      <button type='button' onClick={changeShow}>isShow</button>

    <Form />
    </div>
  )
}

