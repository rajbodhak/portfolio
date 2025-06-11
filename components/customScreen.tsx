"use client"
import React from 'react';
import { motion } from "framer-motion";

interface CustomScreenProps {
    children: React.ReactNode
}

const CustomScreen = ({ children }: CustomScreenProps) => {
    return (
        <div className='md:w-[865px] mx-auto text-gray-700 dark:text-white font-popins md:px-0'>
            <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8 }}
            >
                {children}
            </motion.div>
        </div>
    )
}

export default CustomScreen;
