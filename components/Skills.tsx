import React from 'react'
import { FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill, RiFirebaseFill } from "react-icons/ri";
import { SiExpress, SiPrisma, SiTypescript, SiPostman, SiSupabase } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { VscVscode } from "react-icons/vsc";

const SkillsAndTools = () => {
    const skills = [
        { icon: IoLogoJavascript, name: "JavaScript" },
        { icon: SiTypescript, name: "TypeScript" },
        { icon: FaPython, name: "Python" },
        { icon: FaReact, name: "React" },
        { icon: RiNextjsLine, name: "Next.js" },
        { icon: FaNodeJs, name: "Node.js" },
        { icon: SiExpress, name: "Express" },
        { icon: DiMongodb, name: "MongoDB" },
        { icon: BiLogoPostgresql, name: "PostgreSQL" },
        { icon: SiPrisma, name: "Prisma" },
        { icon: RiTailwindCssFill, name: "Tailwind" },
        { icon: RiFirebaseFill, name: "Firebase" },
        { icon: SiSupabase, name: "Supabase" },
        { icon: FaGitAlt, name: "Git" },
        { icon: VscVscode, name: "VS Code" },
        { icon: SiPostman, name: "Postman" },
    ];

    return (
        <div className="bg-bg-secondary rounded-2xl p-6 mt-3 md:mt-5"
            style={{ boxShadow: 'var(--shadow-3d-border)' }}>
            <h2 className="text-xl md:text-2xl font-bold text-primary-custom mb-6">
                Skills & Tools
            </h2>

            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <div key={index}
                        className="flex items-center gap-2 px-2 py-1 rounded-md bg-bg-primary hover:scale-105 transition-transform duration-200"
                        style={{ boxShadow: 'var(--shadow-neomorph-sm)' }}>
                        <skill.icon className="text-[16px] md:text-[20px] lg:text-[24px] text-primary-custom" />
                        <span className="text-primary-custom text-xs md:text-sm">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillsAndTools