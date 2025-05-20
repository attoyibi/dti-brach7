import { useEffect, useState } from "react";

function Timer() {

    useEffect(() => {
        // tahap mounting
        console.log("tahap mounting di timer");
        // Cleanup saat unmount
        return () => {
            console.log("🧹 unmounting/hidden");
        };
    }, []);

    return (
        <div>
            <h2>Waktu: Tampil </h2>
        </div>
    );
}

export default Timer;
