import React, { useState, useEffect } from 'react';
import "../assets/tailwindoutput.css";

const Clock = () => {
    let today: any = new Date().toLocaleTimeString();
    const [time, updateTime] = useState<any>(today);
    
    useEffect(() => {
        updateTime(today);
        return () => {
            setTimeout(updateTime, 1000);
        }
    },[today])
    return (
        <div>
            <p className="font-poppins text-4xl text-white">{time}</p>
        </div>
    );
}

export default Clock;