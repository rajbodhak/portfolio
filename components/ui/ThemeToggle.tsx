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

    if (!mounted) return null

    const isDark = resolvedTheme === 'dark'

    const toggleTheme = () => {
        setTheme(isDark ? 'light' : 'dark')
    }

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-secondary-custom border border-primary-custom text-primary-custom hover:bg-tertiary-custom transition-all duration-200 hover:scale-105"
            aria-label="Toggle theme"
        >
            {isDark ? (
                <Sun size={20} className="text-yellow-400" />
            ) : (
                <Moon size={20} className="text-blue-500" />
            )}
        </button>
    )
}