import { IconType } from 'react-icons';
import { FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import { SiAppwrite, SiPrisma, SiPostgresql, SiSupabase, SiGooglecloud, SiOpenai } from "react-icons/si";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";

export interface Technology {
    icon: IconType;
    label: string;
}

export interface Project {
    id: string;
    image?: string;
    title: string;
    description: string;
    technologies: Technology[];
    liveUrl?: string;
    githubUrl?: string;
    npmUrl?: string;
    packageName?: string;
    installCommand?: string;
    category: 'web' | 'tool';
    fullDescription: string;
    features: string[];
    challenges: string[];
    learnings: string[];
}

export const projectsData: Project[] = [
    {
        id: 'duggakhoj',
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
        githubUrl: 'https://github.com/rajbodhak',
        category: 'web',
        fullDescription: 'DuggaKhoj is a comprehensive platform designed to revolutionize how people discover and explore Durga Puja pandals. Built with modern web technologies, it offers an intuitive interface for users to find pandals near them, get directions, and explore details about each celebration. The application combines the power of real-time location services with an elegant user interface to provide a seamless experience for festival-goers.',
        features: [
            'Interactive mapping with Leaflet and React-Leaflet for smooth navigation',
            'Real-time GPS tracking for accurate location-based services',
            'Advanced search and filtering options to find specific pandals',
            'Responsive design optimized for all devices and screen sizes',
            'User-friendly interface with smooth animations and transitions',
            'Detailed pandal information including timings, location, and features'
        ],
        challenges: [
            'Implementing accurate geolocation services across different devices',
            'Optimizing map performance with large datasets and multiple markers',
            'Creating an intuitive search experience with real-time filtering',
            'Ensuring smooth performance on mobile devices with limited resources'
        ],
        learnings: [
            'Advanced React patterns and custom hooks for state management',
            'Working with mapping libraries and geospatial data',
            'Performance optimization techniques for large-scale applications',
            'Backend integration with Appwrite for database and authentication'
        ]
    },
    {
        id: 'rezumify',
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
        githubUrl: 'https://github.com/rajbodhak/resume-analyzer',
        category: 'web',
        fullDescription: 'Rezumify leverages cutting-edge AI technology to provide comprehensive resume analysis and optimization. It helps job seekers optimize their resumes for ATS (Applicant Tracking Systems), identify skill gaps, and improve their chances of landing interviews. The platform uses Google Gemini AI to analyze resumes against job descriptions and provides actionable feedback to improve resume quality.',
        features: [
            'AI-powered resume analysis using Google Gemini for intelligent insights',
            'ATS compatibility scoring to ensure resume passes automated systems',
            'Keyword optimization suggestions based on job descriptions',
            'Skill gap identification to help users understand missing competencies',
            'Job description matching with percentage-based compatibility scores',
            'Real-time feedback and suggestions for immediate improvements',
            'Secure document handling with encrypted storage'
        ],
        challenges: [
            'Integrating AI models for accurate and contextual resume analysis',
            'Processing various resume formats (PDF, DOCX) reliably',
            'Providing actionable insights that users can implement',
            'Ensuring data privacy and security for sensitive documents',
            'Building a scalable backend to handle concurrent analyses'
        ],
        learnings: [
            'Working with AI APIs and prompt engineering for consistent results',
            'Database design with Prisma for efficient data management',
            'File processing and parsing for different document formats',
            'Building scalable backend services with proper error handling'
        ]
    },
    {
        id: 'aicx',
        image: '/aicx-preview.webp',
        title: 'AICX',
        description: 'AI-powered CLI tool that generates beautiful, conventional commit messages and auto-pushes to remote. Say goodbye to "fix stuff" commits! Supports both OpenAI and Gemini with regenerate and edit options.',
        technologies: [
            { icon: FaNodeJs, label: "Node.js" },
            { icon: BiLogoTypescript, label: "TypeScript" },
            { icon: SiOpenai, label: "OpenAI" },
            { icon: SiGooglecloud, label: "Google Gemini" }
        ],
        packageName: 'aicx',
        installCommand: 'npm i -g aicx',
        npmUrl: 'https://www.npmjs.com/package/aicx',
        githubUrl: 'https://github.com/rajbodhak/aicx',
        category: 'tool',
        fullDescription: 'AICX is a powerful command-line tool that revolutionizes the Git workflow by using AI to generate meaningful, conventional commit messages. It eliminates the hassle of writing commit messages and ensures consistency across your projects. The tool supports both OpenAI and Google Gemini APIs, giving developers flexibility in choosing their preferred AI provider.',
        features: [
            'AI-powered commit message generation based on staged changes',
            'Support for both OpenAI and Google Gemini AI models',
            'Interactive workflow with regenerate option for refining messages',
            'Auto-push to remote repository after committing',
            'Conventional commits format following industry standards',
            'Edit messages before committing for full control',
            'Intelligent diff analysis for accurate message generation'
        ],
        challenges: [
            'Creating an intuitive CLI interface with proper error handling',
            'Handling Git operations programmatically across platforms',
            'Managing API rate limits and implementing fallback strategies',
            'Ensuring cross-platform compatibility (Windows, Mac, Linux)',
            'Providing meaningful error messages for debugging'
        ],
        learnings: [
            'Building CLI tools with Node.js and Commander.js',
            'Working with Git programmatically using simple-git',
            'API integration and error handling for multiple AI providers',
            'Package publishing and distribution on npm registry',
            'Writing comprehensive documentation for open-source tools'
        ]
    }
];

// Helper functions
export const getProjectById = (id: string): Project | undefined => {
    return projectsData.find(project => project.id === id);
};

export const getWebApplications = (): Project[] => {
    return projectsData.filter(project => project.category === 'web');
};

export const getDeveloperTools = (): Project[] => {
    return projectsData.filter(project => project.category === 'tool');
};