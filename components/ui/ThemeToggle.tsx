'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false)
    const { resolvedTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return <Sun className="w-full h-full" />

    const isDark = resolvedTheme === 'dark'

    return (
        <>
            {isDark ? (
                <Sun className="w-full h-full" />
            ) : (
                <Moon className="w-full h-full" />
            )}
        </>
    )
}