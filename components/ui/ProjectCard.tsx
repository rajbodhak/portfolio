import React from 'react';
import { IconType } from 'react-icons';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import SkillCard from './SkillCard';

interface ProjectCardProps {
    image: string;
    title: string;
    description: string;
    technologies: Array<{
        icon: IconType;
        label: string;
    }>;
    liveUrl?: string;
    githubUrl?: string;
}

const ProjectCard = ({
    image,
    title,
    description,
    technologies,
    liveUrl,
    githubUrl
}: ProjectCardProps) => {
    return (
        <div className="group bg-secondary-custom rounded-2xl border border-secondary-custom hover:border-primary-custom/30 transition-all duration-300 overflow-hidden"
            style={{ boxShadow: 'var(--shadow-neomorph)' }}>

            {/* Project Image */}
            <div className="relative w-full h-48 md:h-52 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Action buttons overlay */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 bg-secondary-custom/90 backdrop-blur-sm rounded-lg border border-secondary-custom text-primary-custom hover:bg-primary-custom hover:text-secondary-custom transition-all duration-200"
                            title="View Live"
                        >
                            <FiExternalLink size={16} />
                        </a>
                    )}

                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2.5 bg-secondary-custom/90 backdrop-blur-sm rounded-lg border border-secondary-custom text-primary-custom hover:bg-primary-custom hover:text-secondary-custom transition-all duration-200"
                            title="View Code"
                        >
                            <FiGithub size={16} />
                        </a>
                    )}
                </div>
            </div>

            {/* Project Content */}
            <div className="p-2 space-y-3">
                {/* Title */}
                <div className="space-y-2">
                    <h3 className="text-xl font-bold text-primary-custom group-hover:text-secondary transition-colors duration-200">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-secondary-custom text-sm leading-relaxed ">
                        {description}
                    </p>
                </div>

                {/* Technologies */}
                <div className="pt-2">
                    <p className="text-xs font-medium text-tertiary-custom mb-2 uppercase tracking-wide">
                        Technologies Used
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {technologies.slice(0, 6).map((tech, index) => (
                            <SkillCard
                                key={`${tech.label}-${index}`}
                                icon={tech.icon}
                                label={tech.label}
                            />
                        ))}
                        {technologies.length > 6 && (
                            <div className="px-2 py-1 bg-tertiary-custom rounded-md text-xs text-secondary-custom">
                                +{technologies.length - 6} more
                            </div>
                        )}
                    </div>
                </div>

                {/* Action buttons for mobile */}
                <div className="flex gap-3 pt-2 md:hidden">
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-primary-custom text-secondary-custom rounded-lg font-medium hover:bg-secondary hover:scale-[1.02] transition-all duration-200"
                        >
                            <FiExternalLink size={14} />
                            <span>Live Demo</span>
                        </a>
                    )}

                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 border border-secondary-custom text-primary-custom rounded-lg font-medium hover:bg-secondary-custom hover:scale-[1.02] transition-all duration-200"
                        >
                            <FiGithub size={14} />
                            <span>Code</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;