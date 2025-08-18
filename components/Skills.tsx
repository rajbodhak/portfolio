import React from 'react'
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill, RiFirebaseFill, RiVercelFill } from "react-icons/ri";
import { SiShadcnui, SiExpress, SiPrisma, SiTypescript, SiNetlify, SiPostman, SiVite, SiAppwrite, SiCloudinary, SiSocketdotio, SiRedux } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { GiBearFace } from "react-icons/gi";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandCpp, TbBrandMysql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import SkillCard from './ui/SkillCard';

const Skills = () => {
    // Organized skill data
    const skillSections = [
        {
            title: "Frontend",
            skills: [
                { icon: FaHtml5, name: "HTML5" },
                { icon: FaCss3, name: "CSS3" },
                { icon: FaReact, name: "React" },
                { icon: RiNextjsLine, name: "NextJs" },
                { icon: SiShadcnui, name: "shadcn/ui" },
                { icon: RiTailwindCssFill, name: "Tailwind CSS" },
                { icon: GiBearFace, name: "Zustand" },
            ]
        },
        {
            title: "Backend",
            skills: [
                { icon: FaNodeJs, name: "NodeJS" },
                { icon: SiExpress, name: "ExpressJS" },
                { icon: SiPrisma, name: "Prisma" },
            ]
        },
        {
            title: "Languages",
            skills: [
                { icon: IoLogoJavascript, name: "JavaScript" },
                { icon: SiTypescript, name: "TypeScript" },
                { icon: FaPython, name: "Python" },
                { icon: TbBrandCpp, name: "C++" },
            ]
        },
        {
            title: "Databases",
            skills: [
                { icon: DiMongodb, name: "MongoDB" },
                { icon: BiLogoPostgresql, name: "PostgreSQL" },
                { icon: TbBrandMysql, name: "MySQL" },
                { icon: RiFirebaseFill, name: "Firebase" },
            ]
        },
        {
            title: "Tools",
            skills: [
                { icon: FaGitAlt, name: "Git" },
                { icon: FaGithub, name: "GitHub" },
                { icon: RiVercelFill, name: "Vercel" },
                { icon: SiNetlify, name: "Netlify" },
                { icon: VscVscode, name: "VS Code" },
                { icon: SiPostman, name: "Postman" },
            ]
        },
        {
            title: "Other Tech",
            skills: [
                { icon: SiVite, name: "Vite" },
                { icon: SiAppwrite, name: "Appwrite" },
                { icon: SiCloudinary, name: "Cloudinary" },
                { icon: SiSocketdotio, name: "Socket.io" },
                { icon: SiRedux, name: "Redux" },
            ]
        },
    ];

    return (
        <div className='main-container'>
            {/* Background overlay effects */}
            <div className="bg-overlay-static"></div>

            {/* Main title */}
            <h1 className='main-title md:px-2'>Skills & Tools</h1>

            {/* Skills grid container */}
            <div className='max-w-5xl mx-auto md:px-2 py-3'>
                <div className='grid-responsive-cards'>
                    {skillSections.map((section, index) => (
                        <div key={index} className='card-container'>
                            {/* Top animated line */}
                            <div className="interactive-top-line"></div>

                            {/* Section header */}
                            <div className='mb-2'>
                                <h2 className='interactive-section-title'>{section.title}</h2>
                                <div className="accent-divider"></div>
                            </div>

                            {/* Skills grid */}
                            <div className='flex flex-wrap gap-2 md:gap-3'>
                                {section.skills.map((item, skillIndex) => (
                                    <SkillCard
                                        key={skillIndex}
                                        icon={item.icon}
                                        label={item.name}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills