"use client";
import { useState } from 'react';
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

interface FormStatus {
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
}

export default function ContactSection() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState<FormStatus>({
        type: 'idle',
        message: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus({ type: 'loading', message: 'Redirecting to Gmail...' });

        const subject = encodeURIComponent(formData.subject || 'Message from Portfolio');
        const body = encodeURIComponent(
            `Hi Raj,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent from your portfolio contact form`
        );

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=YOUR_ACTUAL_EMAIL@gmail.com&su=${subject}&body=${body}`;

        setTimeout(() => {
            window.open(gmailUrl, '_blank');
            setStatus({ type: 'success', message: 'Redirected to Gmail! Please send the message from there.' });
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 1000);
    };

    const socialLinks = [
        {
            icon: Github,
            label: 'GitHub',
            href: 'https://github.com/rajbodhak',
            color: 'hover:text-[#FF6B6B]'
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            href: 'https://linkedin.com/in/rajbodhak',
            color: 'hover:text-[#FF6B6B]'
        },
        {
            icon: Mail,
            label: 'Email',
            href: 'mailto:hello@yourname.com',
            color: 'hover:text-[#FF6B6B]'
        }
    ];

    return (
        <section className="bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] md:mx-0 mx-3 p-3 md:px-3 relative overflow-hidden border border-[#FF6B6B] rounded-md">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/5 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent 
             translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out"></div>

            <div className="max-w-5xl mx-auto relative">
                {/* Header */}
                <div className="text-center mb-3 md:mb-6 relative group">
                    <h1 className='md:px-2 font-bold text-2xl md:text-4xl bg-gradient-to-br from-[#8B0000] via-[#C9184A] to-[#FF4E50] text-transparent bg-clip-text mb-4'>
                        Let's Work Together
                    </h1>
                    <p className="text-sm md:text-xl text-[#F5F5F5]/80 max-w-2xl mx-auto">
                        Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-3">
                    {/* Contact Form */}
                    <div className="border border-[#FF6B6B]/50 rounded-lg flex flex-col bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] backdrop-blur-md hover:border-[#FF6B6B] hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 group/section relative overflow-hidden p-3 md:p-6">
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-0 group-hover/section:opacity-100 transition-opacity duration-300"></div>

                        <div className='mb-3 md:mb-5'>
                            <h2 className='text-base md:text-xl font-bold bg-gradient-to-br from-[#F5F5F5] via-[#ee3939] to-[#b80606] text-transparent bg-clip-text group-hover/section:text-[#FF6B6B] transition-colors duration-300'>
                                Send Message
                            </h2>
                            <div className="w-full h-px bg-[#FF6B6B]/30 group-hover/section:bg-[#FF6B6B]/60 transition-colors duration-300 mb-2 md:mb-3"></div>
                        </div>

                        <div className="space-y-2 md:space-y-4">
                            <div className="grid md:grid-cols-2 gap-2 md:gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-xs md:text-sm font-medium text-[#F5F5F5]/70 mb-1 md:mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-[#FF6B6B]/30 rounded-lg focus:ring-2 focus:ring-[#FF6B6B]/50 focus:border-[#FF6B6B] transition-all duration-200 bg-[#2a2a2a]/50 text-[#F5F5F5] placeholder-[#F5F5F5]/40"
                                        placeholder="Your full name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-xs md:text-sm font-medium text-[#F5F5F5]/70 mb-1 md:mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-[#FF6B6B]/30 rounded-lg focus:ring-2 focus:ring-[#FF6B6B]/50 focus:border-[#FF6B6B] transition-all duration-200 bg-[#2a2a2a]/50 text-[#F5F5F5] placeholder-[#F5F5F5]/40"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-xs md:text-sm font-medium text-[#F5F5F5]/70 mb-1 md:mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-[#FF6B6B]/30 rounded-lg focus:ring-2 focus:ring-[#FF6B6B]/50 focus:border-[#FF6B6B] transition-all duration-200 bg-[#2a2a2a]/50 text-[#F5F5F5] placeholder-[#F5F5F5]/40"
                                    placeholder="What's this about?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-xs md:text-sm font-medium text-[#F5F5F5]/70 mb-1 md:mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    required
                                    rows={2}
                                    className="w-full px-3 py-2 md:px-4 md:py-3 text-sm md:text-base border border-[#FF6B6B]/30 rounded-lg focus:ring-2 focus:ring-[#FF6B6B]/50 focus:border-[#FF6B6B] transition-all duration-200 bg-[#2a2a2a]/50 text-[#F5F5F5] placeholder-[#F5F5F5]/40 resize-none"
                                    placeholder="Tell me about your project or just say hi!"
                                />
                            </div>

                            {/* Status Message */}
                            {status.type !== 'idle' && (
                                <div className={`flex items-center space-x-2 p-3 md:p-4 rounded-lg border text-sm md:text-base ${status.type === 'success'
                                    ? 'bg-green-900/30 text-green-400 border-green-400/30'
                                    : status.type === 'error'
                                        ? 'bg-red-900/30 text-red-400 border-red-400/30'
                                        : 'bg-[#FF6B6B]/10 text-[#FF6B6B] border-[#FF6B6B]/30'
                                    }`}>
                                    {status.type === 'success' && <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />}
                                    {status.type === 'error' && <AlertCircle className="w-4 h-4 md:w-5 md:h-5" />}
                                    {status.type === 'loading' && (
                                        <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-[#FF6B6B] border-t-transparent rounded-full animate-spin" />
                                    )}
                                    <p className="font-medium">{status.message}</p>
                                </div>
                            )}

                            <button
                                onClick={handleSubmit}
                                disabled={status.type === 'loading'}
                                className="w-full bg-gradient-to-r from-[#8B0000] via-[#C9184A] to-[#FF4E50] text-white py-2.5 px-4 md:py-3 md:px-6 rounded-lg text-sm md:text-base font-semibold hover:from-[#b80606] hover:via-[#ee3939] hover:to-[#FF6B6B] focus:ring-2 focus:ring-[#FF6B6B]/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 group/button relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                                translate-x-[-200%] group-hover/button:translate-x-[200%] transition-transform duration-700 ease-in-out"></div>
                                {status.type === 'loading' ? (
                                    <>
                                        <div className="w-4 h-4 md:w-5 md:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send className="w-4 h-4 md:w-5 md:h-5 group-hover/button:translate-x-1 transition-transform duration-200" />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Social Links & Info */}
                    <div className="border border-[#FF6B6B]/50 rounded-lg flex flex-col bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] 
                        backdrop-blur-md hover:border-[#FF6B6B] hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 group/section relative overflow-hidden p-4">
                        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-400 to-transparent opacity-0 group-hover/section:opacity-100 transition-opacity duration-300"></div>

                        <div className='mb-3'>
                            <h2 className='text-lg md:text-xl font-bold bg-gradient-to-br from-[#F5F5F5] via-[#ee3939] to-[#b80606] text-transparent bg-clip-text group-hover/section:text-[#FF6B6B] transition-colors duration-300'>
                                Connect With Me
                            </h2>

                            <div className="pt-2 border-t border-[#FF6B6B]/20">

                                <div className="flex space-x-2">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-9 h-9 border border-[#FF6B6B]/30 rounded-lg flex items-center justify-center text-[#F5F5F5]/60 transition-all duration-200 hover:scale-110 hover:text-[#FF6B6B] hover:border-[#FF6B6B] hover:bg-[#FF6B6B]/10 group/social relative overflow-hidden"
                                            aria-label={social.label}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent 
                                            translate-x-[-100%] group-hover/social:translate-x-[100%] transition-transform duration-500 ease-in-out"></div>
                                            <social.icon className="w-4 h-4 relative z-10" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}