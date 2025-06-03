import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router';
export default function Login() {
    const [stateUsername, setUsername] = useState('');
    const [statePassword, setPassword] = useState('');
    const [loginResult, setLoginResult] = useState(null);
    const navigate = useNavigate()

    function handleChangeUsername(e) {
        setUsername(e.target.value);

    }
    function handleChangePassword(e) {
        setPassword(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        //logic dari login disi
        console.log(stateUsername + "-" + statePassword);
        const data = {
            username: stateUsername,
            password: statePassword
        }
        axios.post('https://dummyjson.com/auth/login', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((response) => {
            console.log(response);
            localStorage.setItem('hasil login', response.data.accessToken);
            alert("login berhasil");
            navigate('/dashboard');
        }).catch((error) => {
            alert("kamu gagal login");
        })
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={stateUsername}
                        onChange={handleChangeUsername}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="text"
                        value={statePassword}
                        onChange={handleChangePassword}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}