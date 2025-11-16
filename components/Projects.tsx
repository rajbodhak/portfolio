"use client";

import React from 'react'
import Link from 'next/link'
import ProjectCard from './ui/ProjectCard'
import DeveloperToolCard from './ui/DeveloperToolCard';
import { FaHtml5, FaReact, FaArrowRight, FaNodeJs } from "react-icons/fa";
import { SiAppwrite, SiPrisma, SiPostgresql, SiSupabase, SiGooglecloud, SiOpenai } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

const Projects = () => {
    // Web Applications
    const webApps = [
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
            image: '/rezumify.webp',
            title: 'Rezumify',
            description: 'Rezumify is an AI-powered resume analyzer that evaluates resumes, matches them with job descriptions, and provides precise improvement suggestions. It highlights ATS compatibility, missing keywords, skill gaps, and offers scoring with a modern, responsive UI.',
            technologies: [
                { icon: FaReact, label: "React" },
                { icon: BiLogoTypescript, label: "TypeScript" },
                { icon: RiNextjsFill, label: "NextJS" },
                { icon: RiTailwindCssFill, label: "Tailwind CSS" },
                { icon: SiPrisma, label: "Prisma" },
                { icon: SiPostgresql, label: "PostgreSQL" },
                { icon: SiSupabase, label: "Supabase" },
                { icon: SiGooglecloud, label: "Google Gemini AI" }
            ],
            liveUrl: 'https://rezumify.vercel.app/',
            githubUrl: 'https://github.com/rajbodhak/resume-analyzer'
        }
    ];

    // Developer Tools
    const developerTools = [
        {
            title: 'AICX',
            description: 'AI-powered CLI tool that generates beautiful, conventional commit messages and auto-pushes to remote. Say goodbye to "fix stuff" commits! Supports both OpenAI and Gemini with regenerate and edit options. Features include interactive workflow, auto-push, and conventional commits format.',
            technologies: [
                { icon: FaNodeJs, label: "Node.js" },
                { icon: BiLogoTypescript, label: "TypeScript" },
                { icon: SiOpenai, label: "OpenAI" },
                { icon: SiGooglecloud, label: "Google Gemini" }
            ],
            packageName: 'aicx',
            installCommand: 'npm i -g aicx',
            npmUrl: 'https://www.npmjs.com/package/aicx',
            githubUrl: 'https://github.com/rajbodhak/aicx'
        }
    ];

    const hasMoreProjects = (webApps.length + developerTools.length) > 4;

    return (
        <section id='projects' className="bg-secondary-custom rounded-2xl p-6 mt-3 md:mt-5"
            style={{ boxShadow: 'var(--shadow-3d-border)' }}>

            <div className="flex items-center justify-between mb-6">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-primary-custom mb-2">
                        Featured Projects
                    </h2>
                    <p className="text-secondary-custom text-sm">
                        A showcase of my recent work and personal projects
                    </p>
                </div>
            </div>

            {/* Web Applications Section */}
            <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 bg-primary-custom rounded-full"></div>
                    <h3 className="text-xl font-semibold text-primary-custom">
                        Web Applications
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {webApps.slice(0, 4).map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>

            {/* Developer Tools Section */}
            {developerTools.length > 0 && (
                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-1 h-6 bg-primary-custom rounded-full"></div>
                        <h3 className="text-xl font-semibold text-primary-custom">
                            Developer Tools
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {developerTools.map((tool, index) => (
                            <DeveloperToolCard key={index} {...tool} />
                        ))}
                    </div>
                </div>
            )}

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