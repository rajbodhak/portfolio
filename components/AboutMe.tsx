"use client"
import React from 'react'
import Image from 'next/image'
import { IoBriefcaseSharp } from "react-icons/io5";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaLaptop } from "react-icons/fa";

const AboutMe = () => {
    return (

        <div className='my-3 flex flex-col md:flex-row items-stretch gap-3'>
            <div className='grid grid-cols-2 gap-3 md:grid-cols-1
                '>
                {/* Location */}
                <div className='relative md:h-40 md:w-52 border border-[#FF6B6B] rounded-md overflow-hidden'>
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
                        <div className="w-full h-px bg-[#FF6B6B] mt-1"></div>
                    </div>
                </div>

                {/* Availability Status */}
                <div className='relative md:h-40 md:w-52 border border-[#FF6B6B] rounded-md overflow-hidden flex flex-col pt-2 pb-1 px-2 text-[#E0E0E0] bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] hover:border-[#FF6B6B]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6B6B]/10'>
                    <div className='flex justify-between items-center px-1'>
                        <p className='text-xs md:text-sm'>Availability</p>
                        <span className="relative flex h-2 w-2">
                            {/* Radar effect */}
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>

                            {/* Core green dot */}
                            <span className="relative inline-flex h-2 w-2 bg-green-500 rounded-full"></span>
                        </span>
                    </div>

                    <div className="w-full h-px bg-[#FF4E50] my-1"></div>

                    {/* opportunities */}
                    <div className='p-1'>
                        <span className="text-xs md:text-xs mb-2 text-white/80 inline-flex items-center px-2 py-1 rounded-full font-medium bg-[#FF4E50]/40 text-green-40">Open to opportunities</span>
                        <div className="flex flex-col flex-wrap gap-2 text-xs md:text-sm">
                            <div className="flex items-center gap-3 text-[#F5F5F5]/80 text-xs sm:text-sm">
                                <div className="p-1 rounded-lg bg-gradient-to-r from-[#8B0000] via-[#C9184A] to-[#FF4E50]">
                                    <IoBriefcaseSharp className="w-3 h-3 text-white" />
                                </div>
                                <span>Full-time positions</span>
                            </div>
                            <div className="flex items-center gap-3 text-[#F5F5F5]/80 text-xs sm:text-sm">
                                <div className="p-1 rounded-lg bg-gradient-to-r from-[#8B0000] via-[#C9184A] to-[#FF4E50]">
                                    <RiGraduationCapFill className="w-3 h-3 text-white" />
                                </div>
                                <span>Internships</span>
                            </div>
                            <div className="flex items-center gap-3 text-[#F5F5F5]/80 text-xs sm:text-sm">
                                <div className="p-1 rounded-lg bg-gradient-to-r from-[#8B0000] via-[#C9184A] to-[#FF4E50]">
                                    <FaLaptop className="w-3 h-3 text-white" />
                                </div>
                                <span>Freelance projects</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="overflow-hidden rounded-xl bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] border border-[#FF6B6B] hover:border-[#FF6B6B]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6B6B]/10 flex-1 p-2 md:p-3">
                <div className='mb-2 md:mb-3'>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2  bg-gradient-to-br from-[#8B0000] via-[#C9184A] to-[#FF4E50] text-transparent bg-clip-text">About Me</h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-[#FF6B6B] to-[#FF4E50] rounded-full"></div>
                </div>
                <div className="text-sm md:text-base max-w-none flex-1">
                    <p className="leading-relaxed mb-2 text-[#F5F5F5]/90">
                        I'm <span className="text-[#FF6B6B] font-semibold">Raj Bodhak</span>, an aspiring Software Development Engineer passionate about building scalable solutions. I create user-friendly applications using MERN, TypeScript, Next.js, and modern databases, turning ideas into digital products that solve real-world problems.
                    </p>
                    <p className="leading-relaxed text-[#F5F5F5]/80">
                        I thrive on complex challenges, write clean code that matters, and I'm ready to build impactful software with world-class engineering teams.
                    </p>

                    <div className="mt-2 p-3 sm:p-2 rounded-lg bg-gradient-to-r from-[#FF6B6B]/10 via-[#FF4E50]/10 to-[#C9184A]/10 border border-[#FF6B6B]/20">
                        <p className="text-[#F5F5F5]/90 text-sm sm:text-base font-medium italic">
                            "Building the future, one line of code at a time - always learning, always growing."
                        </p>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default AboutMe
