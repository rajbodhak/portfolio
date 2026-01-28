'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { IconType } from 'react-icons';
import { FiGithub, FiPackage, FiTerminal, FiCopy } from 'react-icons/fi';
import { SiNpm } from 'react-icons/si';
import SkillCard from './SkillCard';

interface DeveloperToolCardProps {
    projectId: string;
    title: string;
    description: string;
    technologies: Array<{
        icon: IconType;
        label: string;
    }>;
    packageName?: string;
    installCommand?: string;
    npmUrl?: string;
    githubUrl?: string;
}

const DeveloperToolCard = ({
    projectId,
    title,
    description,
    technologies,
    packageName,
    installCommand,
    npmUrl,
    githubUrl
}: DeveloperToolCardProps) => {
    const [copied, setCopied] = React.useState(false);
    const router = useRouter();

    const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if (installCommand) {
            navigator.clipboard.writeText(installCommand);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleCardClick = () => {
        router.push(`/projects/${projectId}`);
    };

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
        e.stopPropagation();
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div
            onClick={handleCardClick}
            className="group bg-secondary-custom rounded-2xl border border-secondary-custom hover:border-primary-custom/30 transition-all duration-300 overflow-hidden cursor-pointer"
            style={{ boxShadow: 'var(--shadow-neomorph)' }}
        >
            {/* Header Section with Package Icon */}
            <div className="relative w-full h-48 md:h-52 bg-gradient-to-br from-primary-custom/10 to-secondary-custom flex items-center justify-center overflow-hidden">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                        backgroundSize: '24px 24px'
                    }}></div>
                </div>

                {/* Large Package Icon */}
                <div className="relative z-10 p-4 bg-primary-custom/10 rounded-2xl border border-primary-custom/20 group-hover:scale-105 transition-transform duration-300">
                    <FiPackage size={64} className="text-primary-custom" />
                </div>

                {/* NPM Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-secondary-custom/90 backdrop-blur-sm rounded-lg border border-secondary-custom">
                    <SiNpm size={16} className="text-[#CB3837]" />
                    <span className="text-xs font-medium text-primary-custom">NPM Package</span>
                </div>

                {/* Action buttons overlay */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {npmUrl && (
                        <a
                            href={npmUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => handleLinkClick(e, npmUrl)}
                            className="p-2.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-primary-custom hover:text-secondary-custom hover:border-primary-custom transition-all duration-200 shadow-lg"
                            title="View on NPM"
                        >
                            <SiNpm size={16} />
                        </a>
                    )}

                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => handleLinkClick(e, githubUrl)}
                            className="p-2.5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-primary-custom hover:text-secondary-custom hover:border-primary-custom transition-all duration-200 shadow-lg"
                            title="View Code"
                        >
                            <FiGithub size={16} />
                        </a>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-2 space-y-3">
                {/* Title */}
                <div className="space-y-2">
                    <h3 className="text-xl font-bold text-primary-custom group-hover:text-secondary transition-colors duration-200">
                        {title}
                    </h3>

                    {/* Description */}
                    <p className="text-secondary-custom text-sm leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Install Command */}
                {installCommand && (
                    <div className="pt-2">
                        <p className="text-xs font-medium text-tertiary-custom mb-2 uppercase tracking-wide flex items-center gap-1">
                            <FiTerminal size={12} />
                            Installation
                        </p>
                        <div className="relative group/code">
                            <div className="flex items-center gap-2 p-3 bg-tertiary-custom/50 rounded-lg border border-secondary-custom font-mono text-sm">
                                <span className="text-primary-custom flex-1">{installCommand}</span>
                                <button
                                    onClick={handleCopy}
                                    className="p-1.5 hover:bg-secondary-custom rounded transition-colors duration-200"
                                    title="Copy command"
                                >
                                    {copied ? (
                                        <span className="text-green-500 text-xs">✓</span>
                                    ) : (
                                        <FiCopy size={14} className="text-secondary-custom" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Technologies */}
                <div className="pt-2">
                    <p className="text-xs font-medium text-tertiary-custom mb-2 uppercase tracking-wide">
                        Built With
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <SkillCard
                                key={`${tech.label}-${index}`}
                                icon={tech.icon}
                                label={tech.label}
                            />
                        ))}
                    </div>
                </div>

                {/* Action buttons for mobile */}
                <div className="flex gap-3 pt-2 md:hidden">
                    {npmUrl && (
                        <a
                            href={npmUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => handleLinkClick(e, npmUrl)}
                            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-primary-custom text-secondary-custom rounded-lg font-medium hover:bg-secondary hover:scale-[1.02] transition-all duration-200"
                        >
                            <SiNpm size={14} />
                            <span>NPM</span>
                        </a>
                    )}

                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => handleLinkClick(e, githubUrl)}
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

export default DeveloperToolCard;