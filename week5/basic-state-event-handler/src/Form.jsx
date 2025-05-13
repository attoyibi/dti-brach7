import React, { useState } from 'react'

export default function Form() {


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailStatus, setEmailStat] = useState(false);
    const [usersData, setUserData] = useState([{
        name: "muchson",
        age: 25,
        email: "muchson@gmail.com"
    },
    {
        name: "rizky",
        age: 18,
        email: "muchson@gmail.com"
    }]);
    function handleMouseEnter() {
        // console.log("handle Mouse Enter")
    }
    function handleChangeName(element) {
        console.log("name=", element);
        setName(element.target.value)
        if (name == "muchson") {
            alert("hai pak muchson")
            setName("")
        }
    }

    function handleChangeEmail(e) {
        setEmail(e.target.value);
        if (email == "rizky@gmail.com") {
            setEmailStat(!emailStatus);
        } else {
            setEmailStat(false);
        }
    }

    return (
        <>
            <div onMouseEnter={handleMouseEnter}>Form Component</div>
            <p>Name : {name}</p>
            <input onChange={handleChangeName} type="text" placeholder="name" />
            <p>Email : {email}</p>
            {emailStatus && <p>Status : Email Valid</p>}
            <input onChange={handleChangeEmail} type="email" required />
            <hr />
            <h5>List of Users</h5>
            {usersData.map((user) => (
                <>
                    <li>{user.name}</li>
                    {user.age >= 25 ? <p>Umur 25 keatas</p> : <p>belum cukup umur</p>}
                </>
            ))}
        </>
    )
}
