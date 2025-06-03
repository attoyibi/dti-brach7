import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
export default function Dashboard() {
    const navigate = useNavigate();
    useEffect(() => {
        const tokenJWT = localStorage.getItem('hasil login')
        console.log("token", tokenJWT)
        if (tokenJWT === null) {
            // kita arahkan ke halaman login
            navigate('/login');
        }
        // akan mengarahkan ke arah backedn untuk cek ulang jwt token
        // fetch data terkait dashboard, nanti jwtnya dikirimkan sekalian. 
    }, []);
    function handleClickLogout() {
        localStorage.removeItem('hasil login');
        alert('kamu logout');
        navigate('/login');
    }
    return (
        <div>Dashboard
            <button onClick={handleClickLogout}>Logout</button>
        </div>
    )
}
