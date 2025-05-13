import React from "react";
import { useState } from "react";

export default function Form() {
  let data = [
    {
      name: "anisa",
      age: 23,
      email: "anisafebriyani@gmail.com",
    },
    {
      name: "muchson",
      age: 25,
      email: "muchson@gmail.com",
    },
  ];
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [emailStatus, setEmailStatus] = useState(false);
  const [userData, setUserData] = useState([
    {
      name: "anisa",
      age: 23,
      email: "anisafebriyani@gmail.com",
    },
    {
      name: "muchson",
      age: 25,
      email: "muchson@gmail.com",
    },
  ]);

  function handleMouseEnter() {
    // console.log("handle Mouse Enter")
  }
  function handleChangeName(element) {
    console.log("change", element.target.value);
    setName(element.target.value);
  }
  function handleChangeAge(element) {
    console.log("change", element.target.value);
    setAge(element.target.value);
  }
  function handleChangeEmail(element) {
    setEmail(element.target.value);
    if (email == "anisafebriyani.com") {
      setEmailStatus(emailStatus);
    } else {
      setEmailStatus(false);
    }
  }
  return (
    <>
      <div onMouseEnter={handleMouseEnter}>Form Component</div>
      <input onChange={handleChangeName} type="text" placeholder="name"></input>
      <p>Name : {name}</p>
      <p>Age : {age}</p>
      <p>Email : {email}</p>
      {emailStatus && <p>Status : Email Valid</p>}
      <input onChange={handleChangeAge} type="number" placeholder="age"></input>
      <input
        onChange={handleChangeEmail}
        type="text"
        placeholder="email"
        required
      ></input>
      <h5>List Of Users</h5>
      {userData.map((user) => (
        <div>
          <li>{user.name}</li>
          {user.age >= 25 ? <p>Umur 25 keatas</p> : <p>belum cukup umur</p>}
        </div>
      ))}
    </>
  );
}
