'use client'
import { FloatingDock } from "@/components/ui/floating-dock";
import { Home, Code } from "lucide-react";
import { ThemeToggle } from "./ui/ThemeToggle";
import { useTheme } from "next-themes";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const { theme, setTheme, resolvedTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    const dockItems = [
        { title: "Home", icon: <Home className="w-full h-full" />, href: "#home" },
        { title: "Projects", icon: <Code className="w-full h-full" />, href: "#projects" },
        {
            title: "Theme",
            icon: <ThemeToggle />,
            onClick: toggleTheme
        },
    ];

    return (
        <>
            {children}
            <FloatingDock
                items={dockItems}
                desktopClassName="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
                mobileClassName="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
            />
        </>
    );
}