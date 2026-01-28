"use client";

import React from 'react'
import Link from 'next/link'
import ProjectCard from './ui/ProjectCard'
import DeveloperToolCard from './ui/DeveloperToolCard';
import { FaArrowRight } from "react-icons/fa";
import { getWebApplications, getDeveloperTools } from '@/lib/projectsData';

const Projects = () => {
    const webApps = getWebApplications();
    const developerTools = getDeveloperTools();

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
                    {webApps.slice(0, 4).map((project) => (
                        <ProjectCard
                            key={project.id}
                            projectId={project.id}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            liveUrl={project.liveUrl}
                            githubUrl={project.githubUrl}
                        />
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
                        {developerTools.map((tool) => (
                            <DeveloperToolCard
                                key={tool.id}
                                projectId={tool.id}
                                title={tool.title}
                                description={tool.description}
                                technologies={tool.technologies}
                                packageName={tool.packageName}
                                installCommand={tool.installCommand}
                                npmUrl={tool.npmUrl}
                                githubUrl={tool.githubUrl}
                            />
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