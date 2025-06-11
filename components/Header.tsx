"use client"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes';
import { Sun, Moon, Clock } from 'lucide-react';

const Header = () => {
    const [currentTime, setCurrentTime] = useState<Date | null>(null);
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

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
                <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>Local Time: --:--, --/--/----</span>
                </div>
                <div>
                    <div className="w-10 h-10 rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse" />
                </div>
            </div>
        );
    }

    return (
        <div className='w-full flex justify-between items-center px-3 py-2'>
            <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{currentTime ? formatDateTime(currentTime) : 'Local Time: --:--, --/--/----'}</span>
            </div>
            <div>
                <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                >
                    {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
            </div>
        </div>
    )
}

export default Header