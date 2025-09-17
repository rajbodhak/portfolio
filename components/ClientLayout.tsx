'use client'
import { FloatingDock } from "@/components/ui/floating-dock";
import { Home, User, Code, Mail } from "lucide-react";
import { ThemeToggle } from "./ui/ThemeToggle";

const dockItems = [
    { title: "Home", icon: <Home className="w-full h-full" />, href: "#home" },
    { title: "Projects", icon: <Code className="w-full h-full" />, href: "#projects" },
    { title: "Theme", icon: <ThemeToggle />, onClick: () => { } },
];

export default function ClientLayout({ children }: { children: React.ReactNode }) {
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