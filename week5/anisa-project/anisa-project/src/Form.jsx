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
  const [usersData, setUserData] = useState([
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
  function handleClick() {
    // console.log("user data", usersData);
    console.log("spread operator user data", [...usersData]);
    console.log("user data", usersData);
    //cara versi 1
    const newUserData = [...usersData];
    newUserData.push({ name: name });
    setUserData(newUserData);

    //cara versi 2
    // setUserData([...usersData, { name: name, age: age }]); //contoh untuk create data pada array
    //dimasukkan logicnya
  }
  function handleLastDelete() {
    // const buah = ["apel", "jeruk", "mangga", "pisang"];
    // const favorit = buah.pop();
    //console.log("buah");
    console.log("handleLastDelete");
    const updatedUsers = [...usersData];
    updatedUsers.pop();
    setUserData(updatedUsers);
  }
  // function handleDeleteByIndex() {
  //   console.log("handleDeleteByIndex");
  //   const updatedUsers = [...usersData];
  //   updatedUsers.slice(1, 0);
  //   console.log("Setelah di slice updatedUsers", updatedUsers);
  //   setUserData(updatedUsers);
  // }
  return (
    <>
      <div onMouseEnter={handleMouseEnter}>Form Component</div>
      <p>Name : {name}</p>
      <input onChange={handleChangeName} type="text" placeholder="name"></input>
      <p>Age : {age}</p>
      <input onChange={handleChangeAge} type="number" placeholder="age"></input>
      {emailStatus && <p>Status : Email Valid</p>}
      <p>Email : {email}</p>
      <input
        onChange={handleChangeEmail}
        type="text"
        placeholder="email"
        required
      ></input>
      <hr></hr>
      <h5>List Of Users</h5>
      {usersData.map((user) => (
        <div
          style={{
            border: "2px solid gray",
            marginBottom: "5px",
            padding: "5px",
          }}
        >
          <li>{user.name}</li>
          <li>{user.age}</li>
          <li>{user.email}</li>
          {/* {user.age >= 25 ? <p>Umur 25 keatas</p> : <p>belum cukup umur</p>} */}
          {/* <button type="button" onClick={handleDeleteByIndex}>
            Delete - {usersData}
          </button> */}
        </div>
      ))}
      <button type="button" onClick={handleClick}>
        submit
      </button>
      <button type="button" onClick={handleLastDelete}>
        Last Delete
      </button>
    </>
  );
}
