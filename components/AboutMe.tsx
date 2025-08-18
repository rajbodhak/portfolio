"use client"
import React from 'react'
import Image from 'next/image'
import { IoBriefcaseSharp } from "react-icons/io5";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaLaptop } from "react-icons/fa";

const AboutMe = () => {
    return (
        <div className='my-3 flex flex-col md:flex-row items-stretch gap-3'>
            <div className='grid-responsive-sidebar'>
                {/* Location */}
                <div className='relative md:h-40 md:w-52 card-container-alt'>
                    <Image src="/kolkata.webp"
                        alt='location'
                        fill
                        className='object-cover brightness-55 contrast-110 saturate-50 hue-rotate-15 zoom-effect'
                        sizes="(max-width:768px) 128px, 160px"
                        priority
                    />

                    {/* Text overlay */}
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent p-2 select-none">
                        <div className="flex justify-between items-center text-white text-xs md:text-sm ">
                            <span className="font-light">Location</span>
                            <span className="font-semibold">Kolkata</span>
                        </div>
                        <div className="accent-line-thin mt-1"></div>
                    </div>
                </div>

                {/* Availability Status */}
                <div className='relative md:h-40 md:w-52 card-container-alt flex flex-col pt-2 pb-1 px-2 text-muted'>
                    <div className='flex justify-between items-center px-1'>
                        <p className='text-xs md:text-sm'>Availability</p>
                        <div className="status-dot-container">
                            {/* Radar effect */}
                            <div className="status-dot-ping"></div>
                            {/* Core green dot */}
                            <div className="status-dot-core"></div>
                        </div>
                    </div>

                    <div className="accent-divider my-1"></div>

                    {/* opportunities */}
                    <div className='p-1'>
                        <span className="status-badge text-white/80">Open to opportunities</span>
                        <div className="flex flex-col flex-wrap gap-2 text-xs md:text-sm">
                            <div className="flex items-center gap-3 text-primary text-xs sm:text-sm">
                                <div className="icon-container">
                                    <IoBriefcaseSharp className="icon" />
                                </div>
                                <span>Full-time positions</span>
                            </div>
                            <div className="flex items-center gap-3 text-primary text-xs sm:text-sm">
                                <div className="icon-container">
                                    <RiGraduationCapFill className="icon" />
                                </div>
                                <span>Internships</span>
                            </div>
                            <div className="flex items-center gap-3 text-primary text-xs sm:text-sm">
                                <div className="icon-container">
                                    <FaLaptop className="icon" />
                                </div>
                                <span>Freelance projects</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="card-container-alt flex-1 p-2 md:p-3">
                <div className='mb-2 md:mb-3'>
                    <h2 className="section-subtitle">About Me</h2>
                    <div className="accent-line-thick"></div>
                </div>
                <div className="text-sm md:text-base max-w-none flex-1">
                    <p className="leading-relaxed mb-2 text-primary">
                        I'm <span className="accent-text">Raj Bodhak</span>, an aspiring Software Development Engineer passionate about building scalable solutions. I create user-friendly applications using MERN, TypeScript, Next.js, and modern databases, turning ideas into digital products that solve real-world problems.
                    </p>
                    <p className="leading-relaxed text-secondary">
                        I thrive on complex challenges, write clean code that matters, and I'm ready to build impactful software with world-class engineering teams.
                    </p>

                    <div className="mt-2 content-highlight-box">
                        <p className="text-primary text-sm sm:text-base font-medium italic">
                            "Building the future, one line of code at a time - always learning, always growing."
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMe