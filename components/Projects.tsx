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
            image: '/duggakhojSS.webp',
            title: 'DuggaKhoj',
            description: 'DuggaKhoj is a full-stack web application built to simplify and enhance the experience of discovering Durga Puja pandals. The platform integrates interactive mapping with Leaflet and React-Leaflet, supports real-time GPS tracking, and enables location-based search and filtering for quick discovery.',
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
        {
            image: '/duggakhojSS.webp',
            title: 'Rezumify',
            description: 'A modern, responsive portfolio website built with Next.js and TypeScript. Features dark/light theme switching, smooth animations, and a clean design showcasing projects and skills.',
            technologies: [
                { icon: FaReact, label: "React" },
                { icon: BiLogoTypescript, label: "TypeScript" },
                { icon: RiNextjsFill, label: "NextJS" },
                { icon: RiTailwindCssFill, label: "Tailwind CSS" }
            ],
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com/rajbodhak'
        },
        {
            image: '/duggakhojSS.webp',
            title: 'E-Commerce Dashboard',
            description: 'A comprehensive admin dashboard for managing e-commerce operations. Built with React and modern UI libraries, featuring analytics, inventory management, and order tracking.',
            technologies: [
                { icon: FaReact, label: "React" },
                { icon: BiLogoTypescript, label: "TypeScript" },
                { icon: RiTailwindCssFill, label: "Tailwind CSS" }
            ],
            liveUrl: 'https://example.com',
            githubUrl: 'https://github.com/rajbodhak'
        }
    ];

    const hasMoreProjects = allProjects.length > 3;

    return (
        <section id='projects' className="bg-secondary-custom rounded-2xl p-6 mt-3 md:mt-5"
            style={{ boxShadow: 'var(--shadow-3d-border)' }}>

            <div className="flex items-center justify-between mb-3">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-custom mb-2">
                        Featured Projects
                    </h2>
                    <p className="text-secondary-custom text-sm">
                        A showcase of my recent work and personal projects
                    </p>
                </div>
            </div>

            {/* Projects Grid - 1 per row on mobile, 2 per row on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                {allProjects.slice(0, 4).map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>

            {/* View All Projects Button */}
            {hasMoreProjects && (
                <div className="flex justify-center">
                    <Link href="/projects">
                        <button className="group flex items-center gap-3 py-3 px-6 bg-primary-custom text-secondary-custom rounded-xl font-medium hover:bg-secondary hover:text-primary-custom hover:scale-[1.02] transition-all duration-200 border border-primary-custom"
                            style={{ boxShadow: 'var(--shadow-neomorph-sm)' }}>
                            <span>View All Projects</span>
                            <FaArrowRight
                                size={14}
                                className="transition-transform duration-200 group-hover:translate-x-1"
                            />
                        </button>
                    </Link>
                </div>
            )}
        </section>
    )
}

export default Projects