"use client"
import { useState, useEffect } from 'react'
import { Clock } from 'lucide-react';
import { ThemeToggle } from './ui/ThemeToggle';

const Header = () => {
    const [currentTime, setCurrentTime] = useState<Date | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setCurrentTime(new Date());

        const timer = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatDateTime = (date: Date) => {
        const time = date.toLocaleTimeString('en-GB', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });

        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const year = date.getFullYear();

        const formattedDate = `${day}-${month}-${year}`;

        return `Local Time: ${time}, ${formattedDate}`
    }

    // Show loading state until mounted
    if (!mounted) {
        return (
            <div className='w-full flex justify-between items-center px-3 py-2'>
                <div className="flex items-center space-x-2 text-sm text-text-secondary">
                    <Clock className="w-4 h-4" />
                    <span>Local Time: --:--, --/--/----</span>
                </div>
                <div className="w-24 h-10 bg-surface rounded-lg animate-pulse" />
            </div>
        );
    }

    return (
        <div className='w-full flex justify-between items-center px-3 py-2'>
            <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Clock className="w-4 h-4" />
                <span>{currentTime ? formatDateTime(currentTime) : 'Local Time: --:--, --/--/----'}</span>
            </div>

        </div>
    )
}

export default Header