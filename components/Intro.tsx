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
            link: "https://github.com/rajbodhak",
            logo: <FaGithub />
        },
        {
            name: "linkedin",
            link: "https://www.linkedin.com/in/rajbodhak/",
            logo: <FaLinkedinIn />
        },
        {
            name: "X",
            link: "https://x.com/Rajidesu",
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
            <div className='relative size-28 md:size-36 bg-bg-primary rounded-2xl p-1'
                style={{ boxShadow: 'var(--shadow-3d-border-lg)' }}>
                <Image src="/rajidesu.webp"
                    alt='rajidesu'
                    fill
                    className='object-cover rounded-xl'
                    sizes="(max-width:768px) 128px, 160px"
                    priority
                />
            </div>
            <div className='flex flex-col'>
                <div className='text-2xl md:text-4xl font-bold capitalized'>
                    <span className='text-primary-custom bg-clip-text'>Raj Bodhak</span>
                </div>
                <div className='text-sm'>
                    <span className="text-secondary-custom">Full Stack Developer</span>
                </div>
                <div className='flex flex-wrap gap-2 items-center text-lg md:text-xl mt-2 text-primary-custom '>
                    {links.map((item) => (
                        <Link
                            key={item.name}
                            href={item.link}
                            target='_blank'
                            className='border p-1 rounded-sm hover:text-secondary-custom'
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
