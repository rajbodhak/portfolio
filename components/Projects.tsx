import React from 'react'
import Link from 'next/link'
import CustomScreen from './CustomScreen'
import ProjectCard from './ui/ProjectCard'
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaArrowRight, FaCode } from "react-icons/fa";

const Projects = () => {
    // All projects data
    const allProjects = [
        {
            image: '/kolkata.webp',
            title: 'DevNet',
            description: 'This is A social media kind of project for developers where Developers can get connected with each others',
            technologies: [
                { icon: FaHtml5, label: "HTML5" },
                { icon: FaReact, label: "React" },
                { icon: FaPython, label: "Python" },
                { icon: FaNodeJs, label: "NodeJs" }
            ],
            liveUrl: 'https://google.com',
            githubUrl: 'https://github.com/rajbodhak',
            views: 12
        },
        {
            image: '/kolkata.webp',
            title: 'Portfolio Website',
            description: 'A modern portfolio website built with Next.js and Tailwind CSS featuring smooth animations and responsive design',
            technologies: [
                { icon: FaReact, label: "React" },
                { icon: FaNodeJs, label: "Next.js" },
                { icon: FaCss3, label: "Tailwind" },
                { icon: FaGithub, label: "GitHub" }
            ],
            liveUrl: 'https://google.com',
            githubUrl: 'https://github.com/rajbodhak',
            views: 25
        },
        {
            image: '/kolkata.webp',
            title: 'E-Commerce App',
            description: 'Full-stack e-commerce application with payment integration and admin dashboard',
            technologies: [
                { icon: FaReact, label: "React" },
                { icon: FaNodeJs, label: "Node.js" },
                { icon: FaPython, label: "Python" },
                { icon: FaGitAlt, label: "Git" }
            ],
            liveUrl: 'https://google.com',
            githubUrl: 'https://github.com/rajbodhak',
            views: 45
        },
        {
            image: '/kolkata.webp',
            title: 'Task Manager',
            description: 'A collaborative task management tool with real-time updates and team collaboration features',
            technologies: [
                { icon: FaReact, label: "React" },
                { icon: FaNodeJs, label: "Node.js" },
                { icon: FaHtml5, label: "HTML5" },
                { icon: FaCss3, label: "CSS3" }
            ],
            liveUrl: 'https://google.com',
            githubUrl: 'https://github.com/rajbodhak',
            views: 18
        }
    ];

    // Get limited projects based on screen size
    // Mobile: 1 card, Medium: 2 cards, Large: show all or limit as needed
    const getDisplayedProjects = () => {
        return allProjects;
    };

    const displayedProjects = getDisplayedProjects();
    const hasMoreProjects = allProjects.length > 2;
    return (
        <CustomScreen>
            <div className='p-3 mb-3 border border-[#FF6B6B] rounded-md'>
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
                        <div className='flex justify-center mt-2 md:mt-3'>
                            <Link href="/projects">
                                <button className='group relative overflow-hidden px-3 py-2 md:px-4 md:py-2 rounded-xl bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] border-2 border-[#FF6B6B]/40 hover:border-[#FF6B6B]/80 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FF6B6B]/20 '>
                                    {/* Vintage fade overlay */}
                                    <div className='absolute inset-0 bg-gradient-to-r from-[#8B0000]/10 via-[#C9184A]/10 to-[#FF4E50]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>

                                    {/* Animated background bars */}
                                    <div className='absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-[#FF6B6B]/20 to-transparent'></div>

                                    {/* Button content */}
                                    <div className='relative flex items-center gap-3 text-[#F5F5F5] group-hover:text-white transition-colors duration-300'>


                                        <span className='font-semibold text-xs md:text-lg tracking-wide group-hover:tracking-wider transition-all duration-300'>
                                            View All Projects
                                        </span>

                                        <FaArrowRight className='text-[#FF6B6B] group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300' size={16} />
                                    </div>

                                    {/* Glowing border effect */}
                                    <div className='absolute inset-0 rounded-xl bg-gradient-to-r from-[#FF6B6B]/0 via-[#FF6B6B]/30 to-[#FF6B6B]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm'></div>
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </CustomScreen>
    )
}

export default Projects