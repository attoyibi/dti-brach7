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
    },
    {
        name: "anisa",
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
        // versi 1
        // const newUserData = [...usersData];
        // newUserData.push({ name: name });
        // setUserData(newUserData);

        // versi 2
        setUserData([...usersData, { name: name, email: email }]);// contoh untuk create data di dalam sebuah array
        //baru di masukin logicnya
    }
    function handleLastDelete() {
        // const buah = ['apel', 'jeruk', 'mangga', 'pisang'];
        // const favorit = buah.pop();
        // console.log(buah);
        console.log("handleLastDelete");
        const updatedUsers = [...usersData];
        updatedUsers.pop();
        setUserData(updatedUsers);
    }
    function handleDeleteByIndex(indexDiTangkap) {
        console.log("index yang terkirim", indexDiTangkap);
        // ini contoh slice untuk data yang urut
        // const updatedUsers = [...usersData];
        // const buah = ['apel', 'jeruk', 'mangga', 'pisang', 'strobery', 'durian'];
        // const sliceBuah = buah.slice(0, 2); // apel jeruk
        // const hasilSlice = buah.slice(2, 4); // mangga pisang
        // const hasilSlice = buah.slice(4, 6); // strobery durian

        // v1. contoh untuk menghapus berdasarkan index
        // console.log(true);
        const indexYangDihilangkan = 1;
        const filteredUsers = usersData.filter((user, index) => index === indexDiTangkap);
        // console.log(filteredUsers);
        setUserData(filteredUsers);
        // v2. menggunakan set state masukkan function
        // setUserData(dataDiDalamState => dataDiDalamState.filter((user, index) => index !== indexDiTangkap));
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
            {usersData.map((user, index) => (
                <div style={{ border: "2px solid gray", marginBottom: "5px", padding: "5px" }}>
                    <li>{user.name}</li>
                    <li>{user.email}</li>
                    <li>
                        {user.age}
                        {/* {user.age >= 25 ? <>Umur 25 keatas</> : <>belum cukup umur</>} */}
                    </li>
                    <button type="button" onClick={() => handleDeleteByIndex(index)}>delete - {index}</button>
                </div>
            ))}
            <button type="button" onClick={handleClick}>submit</button>
            <button type="button" onClick={handleLastDelete}>Last delete</button>
        </>
    )
}
