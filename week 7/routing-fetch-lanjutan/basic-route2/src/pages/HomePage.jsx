import React, { useState, useEffect } from 'react'
import axios from 'axios';
export default function HomePage() {
    const [formData, setFormData] = useState(
        {
            title: '',
            description: ''
        }
    );
    const [isForm, setIsForm] = useState(false);
    const globalVariable = "global";// global variabel

    useEffect(() => {
        // console.log('form data : ', formData);
    }, [formData]);

    function handleChange(e) {
        // console.log("value = ", e.target.value);
        // console.log("name =", e.target.name);
        const value = e.target.value; // sebagai variabel local
        const name = e.target.name; // sebagai variabel local

        const updatedFormData = { ...formData };
        // updatedFormData[title] = nisa
        updatedFormData[name] = value; // part ini itu menambahkan value 
        setFormData(updatedFormData);
    }

    function handleSubmit(e) {
        e.preventDefault();//mencegah agar tidak reload
        console.log("handle submit", formData);
        axios.post("https://dummyjson.com/products/add", formData).then((response) => {
            // logic post ketika berhasil memasukkan
            console.log("berhasil masuk", response.status);
            // bisa dikirmkan ke context untuk memasukkan state
            setFormData(
                {
                    title: '',
                    description: ''
                }
            );
            setIsForm(true);
        }).catch((error) => {
            // logic post ketika gagal memasukkan
            console.log("gagal masuk", error.status);

        });
    }
    return (
        <div>
            <h1>HomePage</h1>
            <form onSubmit={handleSubmit}>
                <input value={formData.title} name="title" onChange={handleChange} type="text" placeholder='title' />
                <input value={formData.description} name="description" onChange={handleChange} type="text" placeholder='description' />
                <button type="submit">submit</button>
            </form>
            {isForm && "data masuk"}
        </div>
    )
}
