"use client";
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
const Intro = () => {
    const links = [
        {
            name: "github",
            link: "",
            logo: <FaGithub />
        },
        {
            name: "linkedin",
            link: "",
            logo: <FaLinkedinIn />
        },
        {
            name: "X",
            link: "",
            logo: <FaXTwitter />
        },
        {
            name: "gmail",
            link: "",
            logo: <BiLogoGmail />
        }
    ]
    return (
        <div className='flex flex-row gap-3 items-center'>
            <div className='relative size-28 md:size-36 border border-[#FF6B6B] rounded-md overflow-hidden'>
                <Image src="/rajidesu.webp"
                    alt='rajidesu'
                    fill
                    className='object-cover'
                    sizes="(max-width:768px) 128px, 160px"
                    priority
                />
            </div>
            <div className='flex flex-col'>
                <div className='text-2xl md:text-4xl font-bold capitalized'>
                    <span className='bg-gradient-to-br from-[#8B0000] via-[#C9184A] to-[#FF4E50] text-transparent bg-clip-text'>Raj Bodhak</span>
                </div>
                <div className='text-sm'>
                    <span className="text-[#E0E0E0]">Full Stack Developer</span>
                </div>
                <div className='flex flex-wrap gap-2 items-center text-xl mt-2 text-[#FF6B6B]'>
                    {links.map((item) => (
                        <Link
                            key={item.name}
                            href={item.link}
                            target='_blank'
                            className='border p-1 rounded-sm'
                        >
                            {item.logo}
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Intro
