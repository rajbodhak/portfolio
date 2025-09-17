"use client";
import React from 'react'
import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";


const CallToAction = () => {
    const socialLinks = [
        {
            icon: FaGithub,
            label: 'GitHub',
            href: 'https://github.com/rajbodhak',
            description: 'View code'
        },
        {
            icon: FaLinkedinIn,
            label: 'LinkedIn',
            href: 'https://linkedin.com/in/rajbodhak',
            description: 'Connect'
        },
        {
            icon: BiLogoGmail,
            label: 'Email',
            href: 'mailto:rajlaptop2004@gmail.com',
            description: 'Send email'
        },
        {
            icon: FaXTwitter,
            label: 'X',
            href: 'https://x.com/Rajidesu',
            description: 'Follow me'
        }
    ];

    return (
        <div className="space-y-4 mt-3 md:mt-5 mb-28">
            {/* Main CTA with Social Links */}
            <div className="bg-bg-secondary rounded-2xl p-6"
                style={{ boxShadow: 'var(--shadow-3d-border)' }}>
                <div className="text-center mb-6">
                    <h2 className="text-xl md:text-2xl font-bold text-primary-custom mb-3">
                        Let's Work Together
                    </h2>
                    <p className="text-secondary-custom text-sm md:text-base max-w-md mx-auto">
                        Ready to bring your ideas to life? Connect with me through any of these platforms.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social, index) => (
                        <Link
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 bg-bg-primary rounded-xl hover:scale-105 transition-transform duration-200 group"
                            style={{ boxShadow: 'var(--shadow-neomorph-sm)' }}
                        >
                            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary-custom/10">
                                <social.icon className="w-4 h-4 text-primary-custom group-hover:text-secondary-custom transition-colors" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="font-semibold text-primary-custom text-sm group-hover:text-secondary-custom transition-colors">
                                    {social.label}
                                </p>
                                <p className="text-xs text-secondary-custom truncate">
                                    {social.description}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default CallToAction