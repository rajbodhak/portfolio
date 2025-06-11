import React from 'react'
import CustomScreen from './CustomScreen'

const Skills = () => {
    return (
        <CustomScreen>
            <div className='flex flex-col justify-between items-center gap-2'>

                <div className='h-20 w-20 bg-gradient-to-br from-[#8B0000] via-[#C9184A] to-[#FF4E50]'>gradient</div>
                <div className='h-20 w-20 dark:bg-gray-800 bg-[#EAEAEA]'>Main</div>
                <div className='h-20 w-20 bg-[#FF6B6B]'>Link</div>
                <div className='h-20 w-20 bg-[#1A1A1A]'>Card</div>
                <div className='h-20 w-20 bg-[#ECEFF1]'>Icon</div>
                <div className='h-20 w-20 bg-[#E0E0E0]'>Icon</div>
                <div className='h-20 w-20 bg-[#F5F5F5]'>Icon</div>
            </div>
        </CustomScreen>

    )
}

export default Skills
