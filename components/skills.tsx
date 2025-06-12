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
        <CustomScreen>
            <div className='p-3 mb-3 border border-[#FF6B6B] rounded-md'>
                <h1 className='md:px-2 font-bold text-2xl md:text-4xl bg-gradient-to-br from-[#8B0000] via-[#C9184A] to-[#FF4E50] text-transparent bg-clip-text uppe'>Skills & Tools</h1>
                <div className='max-w-5xl mx-auto md:px-2 py-3'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                        {/* Frontend Section */}
                        <div className='border border-[#FF6B6B] rounded-md flex flex-col p-3'>
                            <div className='mb-2'>
                                <h2 className='text-lg md:text-xl font-bold bg-gradient-to-br from-[#F5F5F5] via-[#ee3939] to-[#b80606] text-transparent bg-clip-text
                                '>Frontend</h2>
                                <div className="w-full h-px bg-[#FF6B6B] mb-1"></div>
                            </div>

                            <div className='flex flex-wrap gap-3'>
                                {frontendTech.map((item, index) => (
                                    <SkillCard
                                        key={index}
                                        icon={item.icon}
                                        label={item.name} />
                                ))}
                            </div>
                        </div>
                        {/* Backend Section */}
                        <div className='border border-[#FF6B6B] rounded-md flex flex-col p-3'>
                            <div className='mb-2'>
                                <h2 className='text-lg md:text-xl font-bold bg-gradient-to-br from-[#F5F5F5] via-[#ee3939] to-[#ff4b4b] text-transparent bg-clip-text'>Backend</h2>
                                <div className="w-full h-px bg-[#FF6B6B] mb-1"></div>
                            </div>

                            <div className='flex flex-wrap gap-3'>
                                {backendTech.map((item, index) => (
                                    <SkillCard
                                        key={index}
                                        icon={item.icon}
                                        label={item.name} />
                                ))}
                            </div>
                        </div>
                        {/* Languages Section */}
                        <div className='border border-[#FF6B6B] rounded-md flex flex-col p-3'>
                            <div className='mb-2'>
                                <h2 className='text-lg md:text-xl font-bold bg-gradient-to-br from-[#F5F5F5] via-[#ee3939] to-[#b80606] text-transparent bg-clip-text'>Languages</h2>
                                <div className="w-full h-px bg-[#FF6B6B] mb-1"></div>
                            </div>

                            <div className='flex flex-wrap gap-3'>
                                {LanguagesTech.map((item, index) => (
                                    <SkillCard
                                        key={index}
                                        icon={item.icon}
                                        label={item.name} />
                                ))}
                            </div>
                        </div>
                        {/* Databases Section */}
                        <div className='border border-[#FF6B6B] rounded-md flex flex-col p-3'>
                            <div className='mb-2'>
                                <h2 className='text-lg md:text-xl font-bold bg-gradient-to-br from-[#F5F5F5] via-[#ee3939] to-[#b80606] text-transparent bg-clip-text'>Databases</h2>
                                <div className="w-full h-px bg-[#FF6B6B] mb-1"></div>
                            </div>

                            <div className='flex flex-wrap gap-3'>
                                {databasesTech.map((item, index) => (
                                    <SkillCard
                                        key={index}
                                        icon={item.icon}
                                        label={item.name} />
                                ))}
                            </div>
                        </div>
                        {/* Tools Section */}
                        <div className='border border-[#FF6B6B] rounded-md flex flex-col p-3'>
                            <div className='mb-2'>
                                <h2 className='text-lg md:text-xl font-bold bg-gradient-to-br from-[#F5F5F5] via-[#ee3939] to-[#b80606] text-transparent bg-clip-text'>Tools</h2>
                                <div className="w-full h-px bg-[#FF6B6B] mb-1"></div>
                            </div>

                            <div className='flex flex-wrap gap-3'>
                                {toolsTech.map((item, index) => (
                                    <SkillCard
                                        key={index}
                                        icon={item.icon}
                                        label={item.name} />
                                ))}
                            </div>
                        </div>
                        {/* Others Section */}
                        <div className='border border-[#FF6B6B] rounded-md flex flex-col p-3'>
                            <div className='mb-2'>
                                <h2 className='text-lg md:text-xl font-bold bg-gradient-to-br from-[#F5F5F5] via-[#ee3939] to-[#b80606] text-transparent bg-clip-text'>Other Tech</h2>
                                <div className="w-full h-px bg-[#FF6B6B] mb-1"></div>
                            </div>

                            <div className='flex flex-wrap gap-3'>
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

        </CustomScreen>

    )
}

export default Skills