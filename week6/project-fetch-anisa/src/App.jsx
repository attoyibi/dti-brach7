import React, { useState } from 'react';
import axios from 'axios';

export default function App() {
  // const [title, setTitle] = useState();
  const [form, setForm] = useState({
    title: '',
    price: '',
    category: '',
  });

  function handleChange(e) {
    const { value, name } = e.target;
    // console.log(name + ':' + value);
    const updateForm = { ...form };
    updateForm[name] = value;
    setForm(updateForm);
    console.log(form);
  }
  return (
    <div>
      <form action="">
        <input onChange={handleChange} name="title" placeholder="Title"></input>
        <input onChange={handleChange} name="price" placeholder="Price"></input>
        <input onChange={handleChange} name="category" placeholder="Category"></input>
      </form>
    </div>
  );
}
