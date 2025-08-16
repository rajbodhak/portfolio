import React from 'react'
import Link from 'next/link'

import ProjectCard from './ui/ProjectCard'
import { FaHtml5, FaReact, FaArrowRight } from "react-icons/fa";
import { SiAppwrite } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";


const Projects = () => {
    // All projects data
    const allProjects = [
        {
            image: '/duggaKhojSS.webp',
            title: 'DuggaKhoj',
            description: 'DuggaKhoj is a full-stack web application built to simplify and enhance the experience of discovering Durga Puja pandals. The platform integrates interactive mapping with Leaflet and React-Leaflet, supports real-time GPS tracking, and enables location-based search and filtering for quick discovery. It also provides pre-planned route suggestions, allowing users to navigate and plan their visits efficiently',
            technologies: [
                { icon: FaHtml5, label: "HTML5" },
                { icon: RiTailwindCssFill, label: "Tailwind CSS" },
                { icon: FaReact, label: "React" },
                { icon: BiLogoTypescript, label: "TypeScript" },
                { icon: RiNextjsFill, label: "NextJS" },
                { icon: SiAppwrite, label: "Appwrite" }
            ],
            liveUrl: 'https://duggakhoj.site',
            githubUrl: 'https://github.com/rajbodhak'

        },
        // {
        //     image: '/kolkata.webp',
        //     title: 'Portfolio Website',
        //     description: 'A modern portfolio website built with Next.js and Tailwind CSS featuring smooth animations and responsive design',
        //     technologies: [
        //         { icon: FaReact, label: "React" },
        //         { icon: FaNodeJs, label: "Next.js" },
        //         { icon: FaCss3, label: "Tailwind" },
        //         { icon: FaGithub, label: "GitHub" }
        //     ],
        //     liveUrl: 'https://google.com',
        //     githubUrl: 'https://github.com/rajbodhak'

        // },
        // {
        //     image: '/kolkata.webp',
        //     title: 'E-Commerce App',
        //     description: 'Full-stack e-commerce application with payment integration and admin dashboard',
        //     technologies: [
        //         { icon: FaReact, label: "React" },
        //         { icon: FaNodeJs, label: "Node.js" },
        //         { icon: FaPython, label: "Python" },
        //         { icon: FaGitAlt, label: "Git" }
        //     ],
        //     liveUrl: 'https://google.com',
        //     githubUrl: 'https://github.com/rajbodhak',
        //     views: 45
        // },
        // {
        //     image: '/kolkata.webp',
        //     title: 'Task Manager',
        //     description: 'A collaborative task management tool with real-time updates and team collaboration features',
        //     technologies: [
        //         { icon: FaReact, label: "React" },
        //         { icon: FaNodeJs, label: "Node.js" },
        //         { icon: FaHtml5, label: "HTML5" },
        //         { icon: FaCss3, label: "CSS3" }
        //     ],
        //     liveUrl: 'https://google.com',
        //     githubUrl: 'https://github.com/rajbodhak',
        //     views: 18
        // }
    ];

    // Get limited projects based on screen size
    // Mobile: 1 card, Medium: 2 cards, Large: show all or limit as needed
    const getDisplayedProjects = () => {
        return allProjects;
    };

    const displayedProjects = getDisplayedProjects();
    const hasMoreProjects = allProjects.length > 2;
    return (
        <section className='p-3 mb-3 border border-[#FF6B6B] rounded-md relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] hover:border-[#FF6B6B]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF6B6B]/10'>
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent"></div>
            <h1 className='px-2 font-bold text-2xl md:text-4xl bg-gradient-to-br from-[#8B0000] via-[#C9184A] to-[#FF4E50] text-transparent bg-clip-text mb-3'>
                Projects
            </h1>

            <div className='space-y-4 md:space-y-6'>
                {/* Projects Grid - Responsive Display */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4'>
                    {/* Mobile: Show only first project */}
                    <div className='md:hidden'>
                        <ProjectCard {...displayedProjects[0]} />
                    </div>

                    {/* Medium screens and up: Show first 2 projects */}
                    <div className='hidden md:grid md:grid-cols-2 md:col-span-2 gap-4'>
                        {displayedProjects.slice(0, 2).map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>

                {/* More Button - Show if there are more projects */}
                {hasMoreProjects && (
                    <div className='mt-2 md:mt-3 flex justify-center'>
                        <Link href="/projects">
                            <button className='w-full md:w-auto bg-gradient-to-r from-[#8B0000] via-[#C9184A] to-[#FF4E50] text-white py-2 px-4 md:py-3 md:px-5 rounded-lg font-semibold hover:from-[#b80606] hover:via-[#ee3939] hover:to-[#FF6B6B] focus:ring-2 focus:ring-[#FF6B6B]/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 group/button relative overflow-hidden'>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                                    translate-x-[-200%] group-hover/button:translate-x-[200%] transition-transform duration-700 ease-in-out"></div>

                                {/* Button content */}
                                <div className='relative flex items-center gap-3 text-[#F5F5F5] group-hover:text-white transition-colors duration-300'>

                                    <span className='font-semibold text-xs md:text-base tracking-wide group-hover:tracking-wider transition-all duration-300'>
                                        View All Projects
                                    </span>

                                    <FaArrowRight className='text-[#F5F5F5] group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300' size={16} />
                                </div>

                                {/* Glowing border effect */}
                                <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-[#FF6B6B]/0 via-[#FF6B6B]/30 to-[#FF6B6B]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm'></div>
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </section>

    )
}

export default Projects