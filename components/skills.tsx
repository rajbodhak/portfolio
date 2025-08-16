//TODO: Later have to work on this 

import React from 'react'
import CustomScreen from './CustomScreen'
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
    const frontendTech = [
        {
            icon: FaHtml5,
            name: "HTML5"
        },
        {
            icon: FaCss3,
            name: "CSS3"
        },
        {
            icon: FaReact,
            name: "React"
        },
        {
            icon: RiNextjsLine,
            name: "NextJs"
        },
        {
            icon: SiShadcnui,
            name: "shadcn/ui"
        },
        {
            icon: RiTailwindCssFill,
            name: "Tailwind CSS"
        },
        {
            icon: GiBearFace,
            name: "Zustand"
        },
    ];

    const backendTech = [
        {
            icon: FaNodeJs,
            name: "NodeJS"
        },
        {
            icon: SiExpress,
            name: "ExpressJS"
        },
        {
            icon: SiPrisma,
            name: "Prisma"
        },

    ];

    const LanguagesTech = [
        {
            icon: IoLogoJavascript,
            name: "JavaScript"
        },
        {
            icon: SiTypescript,
            name: "TypeScript"
        },
        {
            icon: FaPython,
            name: "Python"
        },
        {
            icon: TbBrandCpp,
            name: "C++"
        },
    ];

    const databasesTech = [
        {
            icon: DiMongodb,
            name: "MongoDB"
        },
        {
            icon: BiLogoPostgresql,
            name: "PostgreSQL"
        },
        {
            icon: TbBrandMysql,
            name: "MySQL"
        },
        {
            icon: RiFirebaseFill,
            name: "Firebase"
        },
    ];

    const toolsTech = [
        {
            icon: FaGitAlt,
            name: "Git"
        },
        {
            icon: FaGithub,
            name: "GitHub"
        },
        {
            icon: RiVercelFill,
            name: "Vercel"
        },
        {
            icon: SiNetlify,
            name: "Netlify "
        },
        {
            icon: VscVscode,
            name: "VS Code"
        },
        {
            icon: SiPostman,
            name: "Postman"
        },
    ]

    const otherstech = [
        {
            icon: SiVite,
            name: "Vite"
        },
        {
            icon: SiAppwrite,
            name: "Appwrite"
        },
        {
            icon: SiCloudinary,
            name: "Cloudinary"
        },
        {
            icon: SiSocketdotio,
            name: "Socket.io"
        },
        {
            icon: SiRedux,
            name: "Redux"
        },
    ]
    return (
        <div className='p-3 mb-3 border border-[#FF6B6B] rounded-md group relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]  hover:border-[#FF6B6B]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF6B6B]/10'>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent 
                translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></div>
            <h1 className='md:px-2 font-bold text-2xl md:text-4xl bg-gradient-to-br from-[#8B0000] via-[#C9184A] to-[#FF4E50] text-transparent bg-clip-text uppe'>Skills & Tools</h1>
            <div className='max-w-5xl mx-auto md:px-2 py-3'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>

                    {/* Frontend Section */}
                    <div className='border border-[#FF6B6B]/50 rounded-lg flex flex-col  bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] 
                        backdrop-blur-md hover:border-[#FF6B6B] hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 group/section relative overflow-hidden p-3'>
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-0 group-hover/section:opacity-100 transition-opacity duration-300"></div>
                        <div className='mb-2'>
                            <h2 className='text-lg md:text-xl font-bold bg-gradient-to-br from-[#F5F5F5] via-[#ee3939] to-[#b80606] text-transparent bg-clip-text group-hover/section:text-[#FF6B6B] transition-colors duration-300
                                '>Frontend</h2>
                            <div className="w-full h-px bg-[#FF6B6B]/30 group-hover/section:bg-[#FF6B6B]/60 transition-colors duration-300 mb-1"></div>
                        </div>

                        <div className='flex flex-wrap gap-2 md:gap-3'>
                            {frontendTech.map((item, index) => (
                                <SkillCard
                                    key={index}
                                    icon={item.icon}
                                    label={item.name} />
                            ))}
                        </div>
                    </div>
                    {/* Backend Section */}
                    <div className='border border-[#FF6B6B]/50 rounded-lg flex flex-col  bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] 
                        backdrop-blur-md hover:border-[#FF6B6B] hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 group/section relative overflow-hidden p-3'>
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-0 group-hover/section:opacity-100 transition-opacity duration-300"></div>
                        <div className='mb-2'>
                            <h2 className='text-lg md:text-xl font-bold bg-gradient-to-br from-[#F5F5F5] via-[#ee3939] to-[#b80606] text-transparent bg-clip-text group-hover/section:text-[#FF6B6B] transition-colors duration-300
                                '>Backend</h2>
                            <div className="w-full h-px bg-[#FF6B6B]/30 group-hover/section:bg-[#FF6B6B]/60 transition-colors duration-300 mb-1"></div>
                        </div>

                        <div className='flex flex-wrap gap-2 md:gap-3'>
                            {backendTech.map((item, index) => (
                                <SkillCard
                                    key={index}
                                    icon={item.icon}
                                    label={item.name} />
                            ))}
                        </div>
                    </div>
                    {/* Languages Section */}
                    <div className='border border-[#FF6B6B]/50 rounded-lg flex flex-col  bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] 
                        backdrop-blur-md hover:border-[#FF6B6B] hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 group/section relative overflow-hidden p-3'>
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-0 group-hover/section:opacity-100 transition-opacity duration-300"></div>
                        <div className='mb-2'>
                            <h2 className='text-lg md:text-xl font-bold bg-gradient-to-br from-[#F5F5F5] via-[#ee3939] to-[#b80606] text-transparent bg-clip-text group-hover/section:text-[#FF6B6B] transition-colors duration-300
                                '>Languages</h2>
                            <div className="w-full h-px bg-[#FF6B6B]/30 group-hover/section:bg-[#FF6B6B]/60 transition-colors duration-300 mb-1"></div>
                        </div>

                        <div className='flex flex-wrap gap-2 md:gap-3'>
                            {LanguagesTech.map((item, index) => (
                                <SkillCard
                                    key={index}
                                    icon={item.icon}
                                    label={item.name} />
                            ))}
                        </div>
                    </div>
                    {/* Databases Section */}
                    <div className='border border-[#FF6B6B]/50 rounded-lg flex flex-col  bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] 
                        backdrop-blur-md hover:border-[#FF6B6B] hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 group/section relative overflow-hidden p-3'>
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-0 group-hover/section:opacity-100 transition-opacity duration-300"></div>
                        <div className='mb-2'>
                            <h2 className='text-lg md:text-xl font-bold bg-gradient-to-br from-[#F5F5F5] via-[#ee3939] to-[#b80606] text-transparent bg-clip-text group-hover/section:text-[#FF6B6B] transition-colors duration-300
                                '>Databases</h2>
                            <div className="w-full h-px bg-[#FF6B6B]/30 group-hover/section:bg-[#FF6B6B]/60 transition-colors duration-300 mb-1"></div>
                        </div>

                        <div className='flex flex-wrap gap-2 md:gap-3'>
                            {databasesTech.map((item, index) => (
                                <SkillCard
                                    key={index}
                                    icon={item.icon}
                                    label={item.name} />
                            ))}
                        </div>
                    </div>

                    {/* Tools Section */}
                    <div className='border border-[#FF6B6B]/50 rounded-lg flex flex-col  bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] 
                        backdrop-blur-md hover:border-[#FF6B6B] hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 group/section relative overflow-hidden p-3'>
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-0 group-hover/section:opacity-100 transition-opacity duration-300"></div>
                        <div className='mb-2'>
                            <h2 className='text-lg md:text-xl font-bold bg-gradient-to-br from-[#F5F5F5] via-[#ee3939] to-[#b80606] text-transparent bg-clip-text group-hover/section:text-[#FF6B6B] transition-colors duration-300
                                '>Tools</h2>
                            <div className="w-full h-px bg-[#FF6B6B]/30 group-hover/section:bg-[#FF6B6B]/60 transition-colors duration-300 mb-1"></div>
                        </div>

                        <div className='flex flex-wrap gap-2 md:gap-3'>
                            {toolsTech.map((item, index) => (
                                <SkillCard
                                    key={index}
                                    icon={item.icon}
                                    label={item.name} />
                            ))}
                        </div>
                    </div>
                    {/* Others Section */}
                    <div className='border border-[#FF6B6B]/50 rounded-lg flex flex-col  bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] 
                        backdrop-blur-md hover:border-[#FF6B6B] hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 group/section relative overflow-hidden p-3'>
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-0 group-hover/section:opacity-100 transition-opacity duration-300"></div>
                        <div className='mb-2'>
                            <h2 className='text-lg md:text-xl font-bold bg-gradient-to-br from-[#F5F5F5] via-[#ee3939] to-[#b80606] text-transparent bg-clip-text group-hover/section:text-[#FF6B6B] transition-colors duration-300
                                '>Other Tech</h2>
                            <div className="w-full h-px bg-[#FF6B6B]/30 group-hover/section:bg-[#FF6B6B]/60 transition-colors duration-300 mb-1"></div>
                        </div>

                        <div className='flex flex-wrap gap-2 md:gap-3'>
                            {otherstech.map((item, index) => (
                                <SkillCard
                                    key={index}
                                    icon={item.icon}
                                    label={item.name} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Skills