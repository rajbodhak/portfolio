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
        <div className="flex flex-col sm:flex-row gap-4 p-4 bg-bg-primary rounded-xl hover:bg-bg-tertiary transition-all duration-200 border border-secondary-custom hover:border-primary-custom/20 hover:scale-105"
            style={{ boxShadow: 'var(--shadow-neomorph-sm)' }}>

            {/* Project Image */}
            <div className="relative w-full sm:w-32 md:w-40 h-24 sm:h-20 md:h-24 flex-shrink-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-xl"
                />
            </div>

            {/* Project Details */}
            <div className="flex-1 space-y-3">
                {/* Title and Links */}
                <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold text-primary-custom leading-tight">
                        {title}
                    </h3>

                    <div className="flex items-center gap-2">
                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg border border-secondary-custom text-secondary-custom hover:bg-secondary-custom hover:text-bg-primary hover:scale-110 transition-all duration-200"
                                style={{ boxShadow: 'var(--shadow-neomorph-sm)' }}
                                title="View Live"
                            >
                                <FiExternalLink size={14} />
                            </a>
                        )}

                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg border border-secondary-custom text-secondary-custom hover:bg-secondary-custom hover:text-bg-primary hover:scale-110 transition-all duration-200"
                                style={{ boxShadow: 'var(--shadow-neomorph-sm)' }}
                                title="View Code"
                            >
                                <FiGithub size={14} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm text-secondary-custom leading-relaxed">
                    {description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5">
                    {technologies.map((tech, index) => (
                        <SkillCard
                            key={`${tech.label}-${index}`}
                            icon={tech.icon}
                            label={tech.label}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;