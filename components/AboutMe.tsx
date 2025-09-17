"use client"
import React from 'react'
import { IoLocationSharp } from "react-icons/io5";

const AboutMe = () => {
    return (
        <div className="space-y-3 md:space-y-5 mt-4 md:mt-5">
            {/* Main About Content */}
            <div className="bg-bg-secondary rounded-2xl p-6"
                style={{ boxShadow: 'var(--shadow-3d-border)' }}>
                <h2 className="text-xl md:text-2xl font-bold text-primary-custom mb-3">
                    About Me
                </h2>

                <div className="space-y-4 text-secondary-custom text-sm md:text-base">
                    <p className="leading-relaxed">
                        I'm <span className="text-primary-custom font-semibold">Raj Bodhak</span>, an aspiring Software Development Engineer passionate about building scalable solutions. I create user-friendly applications using MERN, TypeScript, Next.js, and modern databases.
                    </p>
                    <p className="leading-relaxed">
                        I thrive on complex challenges, write clean code that matters, and I'm ready to build impactful software with world-class engineering teams.
                    </p>
                </div>
            </div>

            {/* Location & Status - Compact Design */}
            <div className="flex flex-col sm:flex-row gap-3">
                {/* Location */}
                <div className="flex items-center gap-3 bg-bg-secondary rounded-xl p-4 flex-1"
                    style={{ boxShadow: 'var(--shadow-3d-border)' }}>
                    <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
                        <IoLocationSharp className="w-4 h-4 text-success" />
                    </div>
                    <div>
                        <p className="text-xs text-secondary-custom">Based in</p>
                        <p className="font-semibold text-primary-custom text-sm">Kolkata, India</p>
                    </div>
                </div>

                {/* Availability Status */}
                <div className="flex items-center gap-3 bg-bg-secondary rounded-xl p-4 flex-1"
                    style={{ boxShadow: 'var(--shadow-3d-border)' }}>
                    <div className="relative">
                        <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center relative">
                            {/* Dot */}
                            <div className="w-2.5 h-2.5 bg-success rounded-full relative">
                                <div className="absolute inset-0 rounded-full bg-success animate-ping opacity-75"></div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-xs text-secondary-custom">Status</p>
                        <p className="font-semibold text-primary-custom text-sm">Open to work</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe