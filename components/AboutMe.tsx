"use client"
import React from 'react'
import Image from 'next/image'
import { IoBriefcaseSharp } from "react-icons/io5";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaLaptop } from "react-icons/fa";
import CustomScreen from './CustomScreen';


const AboutMe = () => {
    return (
        <CustomScreen>
            <div className='my-3 flex flex-col md:flex-row items-stretch gap-3'>
                <div className='flex flex-row md:flex-col gap-3 justify-between
                '>
                    {/* Location */}
                    <div className='relative h-38 w-50 md:h-40 md:w-52 border border-[#FF6B6B] rounded-md overflow-hidden'>
                        <Image src="/kolkata.webp"
                            alt='location'
                            fill
                            className='object-cover brightness-55 contrast-110 saturate-50 hue-rotate-15 zoom-effect'
                            sizes="(max-width:768px) 128px, 160px"
                            priority
                        />

                        {/* Text overlay */}
                        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent p-2 select-none">
                            <div className="flex justify-between items-center text-white text-xs md:text-sm">
                                <span className="font-light">Location</span>
                                <span className="font-semibold">Kolkata</span>
                            </div>
                            <div className="w-full h-px bg-[#FF6B6B] mt-1"></div>
                        </div>
                    </div>

                    {/* Availability Status */}
                    <div className='relative h-38 w-50 md:h-40 md:w-52 border border-[#FF6B6B] rounded-md overflow-hidden flex flex-col py-2 px-2 text-[#E0E0E0]'>
                        <div className='flex justify-between items-center px-1'>
                            <p className='text-xs md:text-sm'>Status</p>
                            <span className="relative flex h-2 w-2">
                                {/* Radar effect */}
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>

                                {/* Core green dot */}
                                <span className="relative inline-flex h-2 w-2 bg-green-500 rounded-full"></span>
                            </span>
                        </div>
                        <div className="w-full h-px bg-[#FF4E50] my-1"></div>
                        <div className='p-1'>
                            <h2 className="text-sm md:text-base font-bold mb-1 text-[#FF4E50]">Available For</h2>
                            <div className="flex flex-col flex-wrap gap-2 text-xs md:text-sm">
                                <div className="flex items-center gap-2">
                                    <span className="text-[#FF4E50]"><IoBriefcaseSharp /></span>
                                    <span>Full-time positions</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#FF4E50]"><RiGraduationCapFill /></span>
                                    <span>Internships</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#FF4E50]"><FaLaptop /></span>
                                    <span>Freelance projects</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="border border-[#FF6B6B] text-[#E0E0E0] flex-1 p-4 md:p-6 flex flex-col rounded-md">
                    <h2 className="text-3xl font-bold mb-4 bg-gradient-to-br from-[#8B0000] via-[#C9184A] to-[#FF4E50] text-transparent bg-clip-text">About Me</h2>
                    <div className="text-sm md:text-base max-w-none flex-1">
                        <p className="leading-relaxed mb-2">
                            I’m Raj Bodhak, a full stack developer who builds fast, functional, and user-focused web experiences. I enjoy turning ideas into real products. Whether it's frontend or backend, I focus on clarity, speed, and purpose.
                        </p>
                        <p className="leading-relaxed mb-2">
                            I’m a curious problem solver who loves exploring new technologies and building with purpose using modern tools.
                        </p>
                        <p className="leading-relaxed">
                            I care about clean code and building things people enjoy. My goal is to create meaningful digital experiences that are simple, reliable, and centered around real users
                        </p>
                    </div>
                </section>
            </div>
        </CustomScreen>
    )
}

export default AboutMe
