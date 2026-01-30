"use client";

import React, { use } from 'react';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SiNpm } from "react-icons/si";
import SkillCard from '@/components/ui/SkillCard';
import { notFound } from 'next/navigation';
import { getProjectById } from '@/lib/projectsData';
import CustomScreen from '@/components/CustomScreen';

const ProjectDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = use(params);
    const project = getProjectById(id);

    if (!project) {
        notFound();
    }

    const isToolProject = project.category === 'tool';

    return (
        <CustomScreen>
            <div className="min-h-screen bg-primary-custom p-4 md:p-6 mb-8 md:mb-20">
                <div className="max-w-5xl mx-auto">

                    {/* Project Header */}
                    <div className="bg-secondary-custom rounded-2xl p-6 mb-6"
                        style={{ boxShadow: 'var(--shadow-3d-border)' }}>
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                            <div>
                                <span className="inline-block px-3 py-1 bg-primary-custom text-secondary-custom text-xs font-medium rounded-full mb-3">
                                    {isToolProject ? 'Developer Tool' : 'Web Application'}
                                </span>
                                <h1 className="text-3xl md:text-4xl font-bold text-primary-custom mb-2">
                                    {project.title}
                                </h1>
                                <p className="text-secondary-custom text-lg">
                                    {project.description}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-3 flex-shrink-0">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2.5 bg-primary-custom text-secondary-custom rounded-lg font-medium hover:bg-secondary hover:scale-[1.02] transition-all duration-200 border border-primary-custom"
                                        style={{ boxShadow: 'var(--shadow-neomorph-sm)' }}
                                    >
                                        <FaExternalLinkAlt size={16} />
                                        <span>Live Demo</span>
                                    </a>
                                )}
                                {project.npmUrl && (
                                    <a
                                        href={project.npmUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2.5 bg-primary-custom text-secondary-custom rounded-lg font-medium hover:bg-secondary hover:scale-[1.02] transition-all duration-200 border border-primary-custom"
                                        style={{ boxShadow: 'var(--shadow-neomorph-sm)' }}
                                    >
                                        <SiNpm size={16} />
                                        <span>NPM</span>
                                    </a>
                                )}
                                {project.githubUrl && (
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2.5 border border-secondary-custom text-primary-custom rounded-lg font-medium hover:bg-secondary-custom hover:scale-[1.02] transition-all duration-200"
                                        style={{ boxShadow: 'var(--shadow-neomorph-sm)' }}
                                    >
                                        <FaGithub size={16} />
                                        <span>Source Code</span>
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Install Command for CLI Tools */}
                        {isToolProject && project.installCommand && (
                            <div className="mt-4 p-4 bg-primary-custom rounded-lg border border-secondary-custom">
                                <p className="text-xs text-secondary-custom mb-2 font-medium">INSTALL</p>
                                <code className="text-primary-custom font-mono text-sm">
                                    {project.installCommand}
                                </code>
                            </div>
                        )}
                    </div>

                    {/* Project Image */}
                    {!isToolProject && project.image && (
                        <div className="bg-secondary-custom rounded-2xl p-6 mb-6"
                            style={{ boxShadow: 'var(--shadow-3d-border)' }}>
                            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden border border-secondary-custom">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    )}

                    {/* Technologies Used */}
                    <div className="bg-secondary-custom rounded-2xl p-6 mb-6"
                        style={{ boxShadow: 'var(--shadow-3d-border)' }}>
                        <h2 className="text-2xl font-bold text-primary-custom mb-4">
                            Technologies Used
                        </h2>
                        <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech, index) => (
                                <SkillCard
                                    key={`${tech.label}-${index}`}
                                    icon={tech.icon}
                                    label={tech.label}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Project Overview */}
                    <div className="bg-secondary-custom rounded-2xl p-6 mb-6"
                        style={{ boxShadow: 'var(--shadow-3d-border)' }}>
                        <h2 className="text-2xl font-bold text-primary-custom mb-4">
                            Project Overview
                        </h2>
                        <p className="text-secondary-custom leading-relaxed">
                            {project.fullDescription}
                        </p>
                    </div>

                    {/* Key Features */}
                    <div className="bg-secondary-custom rounded-2xl p-6 mb-6"
                        style={{ boxShadow: 'var(--shadow-3d-border)' }}>
                        <h2 className="text-2xl font-bold text-primary-custom mb-4">
                            Key Features
                        </h2>
                        <div className="space-y-3">
                            {project.features?.map((feature, index) => (
                                <div key={index} className="flex gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-custom flex items-center justify-center mt-0.5">
                                        <span className="text-secondary-custom text-xs font-bold">
                                            {index + 1}
                                        </span>
                                    </div>
                                    <p className="text-secondary-custom flex-1">
                                        {feature}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Challenges & Solutions */}
                    {project.challenges && project.challenges.length > 0 && (
                        <div className="bg-secondary-custom rounded-2xl p-6 mb-6"
                            style={{ boxShadow: 'var(--shadow-3d-border)' }}>
                            <h2 className="text-2xl font-bold text-primary-custom mb-4">
                                Challenges & Solutions
                            </h2>
                            <div className="space-y-3">
                                {project.challenges.map((challenge, index) => (
                                    <div key={index} className="flex gap-3">
                                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-primary-custom mt-2"></div>
                                        <p className="text-secondary-custom flex-1">
                                            {challenge}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Key Learnings */}
                    {project.learnings && project.learnings.length > 0 && (
                        <div className="bg-secondary-custom rounded-2xl p-6 mb-6"
                            style={{ boxShadow: 'var(--shadow-3d-border)' }}>
                            <h2 className="text-2xl font-bold text-primary-custom mb-4">
                                Key Learnings
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {project.learnings.map((learning, index) => (
                                    <div key={index} className="flex gap-3 p-3 bg-primary-custom rounded-lg border border-secondary-custom">
                                        <div className="flex-shrink-0 text-secondary-custom">✓</div>
                                        <p className="text-secondary-custom text-sm">
                                            {learning}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Call to Action */}
                    <div className="bg-secondary-custom rounded-2xl p-6 text-center"
                        style={{ boxShadow: 'var(--shadow-3d-border)' }}>
                        <h3 className="text-xl font-bold text-primary-custom mb-2">
                            Interested in this project?
                        </h3>
                        <p className="text-secondary-custom mb-4">
                            Check out the live demo or explore the source code
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-custom text-secondary-custom rounded-lg font-medium hover:bg-secondary hover:scale-[1.02] transition-all duration-200 border border-primary-custom"
                                    style={{ boxShadow: 'var(--shadow-neomorph-sm)' }}
                                >
                                    <FaExternalLinkAlt size={16} />
                                    <span>View Live Demo</span>
                                </a>
                            )}
                            {project.npmUrl && (
                                <a
                                    href={project.npmUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-custom text-secondary-custom rounded-lg font-medium hover:bg-secondary hover:scale-[1.02] transition-all duration-200 border border-primary-custom"
                                    style={{ boxShadow: 'var(--shadow-neomorph-sm)' }}
                                >
                                    <SiNpm size={16} />
                                    <span>Install from NPM</span>
                                </a>
                            )}
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 px-6 py-3 border border-secondary-custom text-primary-custom rounded-lg font-medium hover:bg-secondary-custom hover:scale-[1.02] transition-all duration-200"
                                    style={{ boxShadow: 'var(--shadow-neomorph-sm)' }}
                                >
                                    <FaGithub size={16} />
                                    <span>View Source Code</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </CustomScreen>

    );
};

export default ProjectDetailPage;