"use client"
import { useState, useEffect } from 'react'

const Header = () => {
    const [currentTime, setCurrentTime] = useState<Date>(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000);

        return () => clearInterval(timer);
    });

    const formatDateTime = (date: Date) => {
        const time = date.toLocaleTimeString(undefined, {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });

        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();

        const formattedYear = `${day}-${month}-${year}`;

        return `Local Time: ${time}, ${formattedYear}`
    }
    return (
        <div className='w-full flex justify-between items-center px-3 py-2'>
            <div>{formatDateTime(currentTime)}</div>
            <div>Hello</div>
        </div>
    )
}

export default Header
