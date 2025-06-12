import React from 'react';
import { IconType } from 'react-icons';
import { FiExternalLink, FiGithub, FiEye } from 'react-icons/fi';
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
    views?: number;
}

const ProjectCard = ({
    image,
    title,
    description,
    technologies,
    liveUrl,
    githubUrl,
    views
}: ProjectCardProps) => {
    return (
        <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] border border-[#FF6B6B]/30 hover:border-[#FF6B6B]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF6B6B]/10 w-full">
            {/* Project Image */}
            <div className="relative overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-40 sm:h-44 md:h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Card Content */}
            <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                {/* Title and Actions Row */}
                <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#F5F5F5] group-hover:text-[#FF6B6B] transition-colors duration-300 leading-tight">
                        {title}
                    </h3>

                    <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                        {/* Live Project Views */}
                        {views && (
                            <div className="flex items-center gap-1 text-[#F5F5F5]/70 text-xs sm:text-sm">
                                <FiEye size={14} className="sm:w-4 sm:h-4" />
                                <span className="hidden sm:inline">{views.toLocaleString()}</span>
                            </div>
                        )}

                        {/* Live Project Link */}
                        {liveUrl && (
                            <a
                                href={liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-r from-[#8B0000] via-[#C9184A] to-[#FF4E50] hover:from-[#A0000A] hover:via-[#D4295A] hover:to-[#FF5E60] text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#FF6B6B]/25"
                                title="View Live Project"
                            >
                                <FiExternalLink size={14} className="sm:w-4 sm:h-4" />
                            </a>
                        )}

                        {/* GitHub Link */}
                        {githubUrl && (
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 sm:p-2 rounded-lg bg-[#2a2a2a] hover:bg-[#3a3a3a] text-[#F5F5F5]/70 hover:text-[#F5F5F5] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#2a2a2a]/50"
                                title="View Source Code"
                            >
                                <FiGithub size={14} className="sm:w-4 sm:h-4" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Description */}
                <p className="text-[#F5F5F5]/80 text-xs sm:text-sm md:text-base leading-relaxed line-clamp-3">
                    {description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                    {technologies.map((tech, index) => (
                        <SkillCard
                            key={`${tech.label}-${index}`}
                            icon={tech.icon}
                            label={tech.label}
                        />
                    ))}
                </div>
            </div>

            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#FF6B6B]/0 via-[#FF6B6B]/5 to-[#FF4E50]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
    );
};

export default ProjectCard;