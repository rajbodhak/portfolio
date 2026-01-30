import Link from 'next/link';
import { FaArrowLeft, FaExclamationTriangle } from 'react-icons/fa';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-primary-custom flex items-center justify-center p-4">
            <div className="max-w-md w-full">
                <div className="bg-secondary-custom rounded-2xl p-8 text-center"
                    style={{ boxShadow: 'var(--shadow-3d-border)' }}>
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary-custom flex items-center justify-center"
                        style={{ boxShadow: 'var(--shadow-neomorph)' }}>
                        <FaExclamationTriangle className="text-secondary-custom text-3xl" />
                    </div>

                    <h1 className="text-3xl font-bold text-primary-custom mb-2">
                        Project Not Found
                    </h1>
                    <p className="text-secondary-custom mb-6">
                        Sorry, the project you're looking for doesn't exist or has been removed.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <Link href="/projects">
                            <button className="group flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-primary-custom text-secondary-custom rounded-lg font-medium hover:bg-secondary hover:scale-[1.02] transition-all duration-200 border border-primary-custom"
                                style={{ boxShadow: 'var(--shadow-neomorph-sm)' }}>
                                <FaArrowLeft
                                    size={16}
                                    className="transition-transform duration-200 group-hover:-translate-x-1"
                                />
                                <span>All Projects</span>
                            </button>
                        </Link>

                        <Link href="/">
                            <button className="w-full sm:w-auto px-6 py-3 border border-secondary-custom text-primary-custom rounded-lg font-medium hover:bg-secondary-custom hover:scale-[1.02] transition-all duration-200"
                                style={{ boxShadow: 'var(--shadow-neomorph-sm)' }}>
                                Go Home
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}