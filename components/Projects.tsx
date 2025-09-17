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
        // Add more projects here when needed
    ];

    const hasMoreProjects = allProjects.length > 2;

    return (
        <div className="bg-bg-secondary rounded-2xl p-6 mt-3 md:mt-5"
            style={{ boxShadow: 'var(--shadow-3d-border)' }}>

            <h2 className="text-xl md:text-2xl font-bold text-primary-custom mb-6">
                Featured Projects
            </h2>

            <div className='space-y-4'>
                {/* Projects List */}
                {allProjects.slice(0, 3).map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}

                {/* View All Projects Button */}
                {hasMoreProjects && (
                    <div className='pt-2'>
                        <Link href="/projects">
                            <button className='w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary-custom text-bg-primary rounded-xl font-medium hover:scale-[1.02] transition-transform duration-200'>
                                <span>View All Projects</span>
                                <FaArrowRight size={14} />
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Projects