'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme, resolvedTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <Sun className="w-full h-full" />

    const isDark = resolvedTheme === 'dark'

    const toggleTheme = () => {
        setTheme(isDark ? 'light' : 'dark')
    }

    return (
        <div
            onClick={toggleTheme}
            className="w-full h-full flex items-center justify-center cursor-pointer text-secondary-custom"
        >
            {isDark ? (
                <Sun className="w-full h-full " />
            ) : (
                <Moon className="w-full h-full " />
            )}
        </div>
    )
}