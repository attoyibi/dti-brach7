// tempat import inisialisasi
import React, { useState } from 'react'

export default function App() {
  // tempat logic
  let name = "rizky";// variabel biasa 
  // buat dalam bentuk state
  let varAge = 25
  const [age, setAge] = useState(25); // dalam bentuk state

  //event handler
  function handleClick() {
    console.log("handle click")
    setAge(varAge + 1);
  }
  return (
    // tempat ditampikan
    <div>
      <p>name : {name}</p>
      <p>Age : {age}</p>
      <p>varAge : {varAge}</p>
      <button type="button" onClick={handleClick}>ganti</button>
    </div>
  )
}
