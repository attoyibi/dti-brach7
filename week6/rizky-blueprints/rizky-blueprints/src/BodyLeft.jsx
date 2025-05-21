import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function BodyLeft() {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [isShow, setIsShow] = useState(true);
    const [disabled, setDisbaled] = useState(true);
    const [products, setProducts] = useState([]);

    // selalu berjalan
    useEffect(() => {
        //disinilah tempat logikanya nanti
        console.log("ini use effect selalu berjalan")
    });

    // tahap mounting
    useEffect(() => {
        //disinilah tempat logikanya nanti
        // biasanya menjadi tempat fetching data
        axios.get("https://dummyjson.com/products").then((respond) => {
            //tempat logic ketika berhasil
            console.log(respond.data.products);
            setProducts(respond.data.products);
        }).catch(
            // tempat logic ketaka gagal

        );

        console.log("ini use effect tahap mounting")
    }, []);

    // tahap updating
    useEffect(() => {
        //disinilah tempat logikanya nanti
        console.log("tahap updating name")
        if (name == "muchson") {
            setDisbaled(false);
        }
    }, [name]);


    function handleChangeName(e) {
        setName(e.target.value);
        console.log(e.target.value);
    }
    function handleChangeAge(e) {
        setAge(e.target.value);
        console.log(e.target.value);
    }
    function handleClick() {
        setIsShow(!isShow)
    }
    return (
        <div>
            <h1>
                Contoh Penggunaan "Lifecycle" menggunakan Use Effect
            </h1>
            <div>
                name :
                <input type="text" onChange={handleChangeName} />
                age :
                <input type="text" onChange={handleChangeAge} />
                <button type="button" disabled={disabled}>Submit</button>
            </div>
            <button type="button" onClick={handleClick} >Hidden/Show</button>
            {/* {isShow && <Timer />} */}
            <hr />
            {/* Ini Product Title : {products.map} */}
            List Product : {products.map((product, index) => (
                <>
                    <div style={{ border: 'solid 2px gray', margin: '2px' }}>
                        <div >
                            Product Title :   {product.title}
                        </div>
                        <div>
                            Description :   {product.description}
                        </div>
                    </div>
                </>
            ))}
        </div>
    )
}
