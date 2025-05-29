import React, { useState, useEffect } from "react";
import axios from "axios";

export default function HomePage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  // const [isForm, SetForm] = useState(false); //sebagai variabel local
  // const globalVariable = "global"; //sebagai variabel local

  useEffect(() => {
    console.log("form data : ", formData);
  }, [formData]);

  function handleChange(e) {
    console.log("value", e.target.value);
    console.log("name", e.target.name);
    const value = e.target.value;
    const name = e.target.name;

    const updatedFormData = { ...formData };
    //upadatedFormData[title] =  name
    updatedFormData[name] = value; //part ini menambahkan value
    setFormData(updatedFormData);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("handle submit", formData);
    axios
      .post("https://dummyjson.com/products/")
      .then((respond) => {
        // logic post ketika berhasil dimasukkan
        console.log("berhasil masuk", respond.status);
      })
      .catch((error) => {
        //logic post ketika gagal memasukkan
        console.log("gagal masuk", error.status);
      });
  }

  return (
    <div>
      <h1>Home Page</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder="title"></input>
        <input
          onChange={handleChange}
          type="text"
          placeholder="description"
        ></input>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
