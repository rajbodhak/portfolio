"use client";

import React from 'react';
import ProjectCard from '@/components/ui/ProjectCard';
import DeveloperToolCard from '@/components/ui/DeveloperToolCard';
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { getWebApplications, getDeveloperTools } from '@/lib/projectsData';

const ProjectsPage = () => {
    const webApps = getWebApplications();
    const developerTools = getDeveloperTools();
    const router = useRouter();

    return (
        <div className="min-h-screen bg-primary-custom p-4 md:p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="bg-secondary-custom rounded-2xl p-6 mb-6"
                    style={{ boxShadow: 'var(--shadow-3d-border)' }}>
                    <button
                        onClick={() => router.push('/')}
                        className="group flex items-center gap-2 mb-4 text-secondary-custom hover:text-primary-custom transition-colors duration-200"
                    >
                        <FaArrowLeft
                            size={16}
                            className="transition-transform duration-200 group-hover:-translate-x-1"
                        />
                        <span className="text-sm font-medium">Back to Home</span>
                    </button>

                    <h1 className="text-3xl md:text-4xl font-bold text-primary-custom mb-2">
                        All Projects
                    </h1>
                    <p className="text-secondary-custom">
                        Explore my complete portfolio of web applications and developer tools
                    </p>
                </div>

                {/* Web Applications Section */}
                <div className="bg-secondary-custom rounded-2xl p-6 mb-6"
                    style={{ boxShadow: 'var(--shadow-3d-border)' }}>
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-1 h-6 bg-primary-custom rounded-full"></div>
                        <h2 className="text-2xl font-semibold text-primary-custom">
                            Web Applications
                        </h2>
                        <span className="ml-2 px-3 py-1 bg-primary-custom text-secondary-custom text-xs font-medium rounded-full">
                            {webApps.length}
                        </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {webApps.map((project) => (
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
                    <div className="bg-secondary-custom rounded-2xl p-6"
                        style={{ boxShadow: 'var(--shadow-3d-border)' }}>
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-1 h-6 bg-primary-custom rounded-full"></div>
                            <h2 className="text-2xl font-semibold text-primary-custom">
                                Developer Tools
                            </h2>
                            <span className="ml-2 px-3 py-1 bg-primary-custom text-secondary-custom text-xs font-medium rounded-full">
                                {developerTools.length}
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
            </div>
        </div>
    );
};

export default ProjectsPage;