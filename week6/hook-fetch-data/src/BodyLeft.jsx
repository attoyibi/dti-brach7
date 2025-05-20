import React, { useState, useEffect } from 'react'
import Timer from './Timer';
export default function BodyLeft() {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [isShow, setIsShow] = useState(true);
    const [disabled, setDisbaled] = useState(true);

    // selalu berjalan
    useEffect(() => {
        //disinilah tempat loginya nanti
        console.log("ini use effect selalu berjalan")
    });

    // tahap mounting
    useEffect(() => {
        //disinilah tempat loginya nanti
        console.log("ini use effect tahap mounting")
    }, []);

    // tahap updating
    useEffect(() => {
        //disinilah tempat loginya nanti
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
            {isShow && <Timer />}
        </div>
    )
}
