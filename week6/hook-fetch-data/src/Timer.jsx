import { useEffect, useState } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        console.log("⏱️ Timer dimulai");
        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        // Cleanup saat unmount
        return () => {
            console.log("🧹 Timer dihentikan dan dibersihkan");
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <h2>Waktu: {seconds} detik</h2>
        </div>
    );
}

export default Timer;
