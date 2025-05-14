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
    function handleClick() {
        // console.log("user data", usersData);
        console.log("spread operator user data", [...usersData]);
        console.log("user data", usersData);
        // cara ini tidak menghasilkan re render. untuk data cuman di masukkan. 
        // usersData.push({ name: name });
        // setUserData(usersData);

        setUserData([...usersData, { name: name }]);// contoh untuk create data di dalam sebuah array
        //baru di masukin logicnya
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
                <div style={{ border: "2px solid gray", marginBottom: "5px", padding: "5px" }}>
                    <li>{user.name}</li>
                    <li>
                        {user.age}
                        {/* {user.age >= 25 ? <>Umur 25 keatas</> : <>belum cukup umur</>} */}
                    </li>
                    <li>{user.email}</li>
                </div>
            ))}
            <button type="button" onClick={handleClick}>submit</button>
        </>
    )
}
