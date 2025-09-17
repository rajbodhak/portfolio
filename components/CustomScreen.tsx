"use client"
import React from 'react';
import { motion } from "framer-motion";

interface CustomScreenProps {
    children: React.ReactNode
}

const CustomScreen = ({ children }: CustomScreenProps) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2,
            }
        }
    };

    const childVariants = {
        hidden: {
            opacity: 0,
            y: 30,
            filter: "blur(8px)",
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            transition: {
                duration: 0.6
            }
        }
    };

    // Convert children to array and wrap each in motion.div
    const childrenArray = React.Children.toArray(children);

    return (
        <div className='md:w-[765px] mx-auto text-gray-700 dark:text-white font-popins px-3 md:px-0'>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-0"
            >
                {childrenArray.map((child, index) => (
                    <motion.div
                        key={index}
                        variants={childVariants}
                    >
                        {child}
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default CustomScreen;