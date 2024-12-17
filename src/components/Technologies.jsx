import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { TbBrandMysql } from 'react-icons/tb';
import { SiExpress } from 'react-icons/si';
import { TbBrandLaravel } from 'react-icons/tb';
import { FaAngular } from 'react-icons/fa';
import { motion } from 'framer-motion';

const iconVariants = (delay) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: 2, // 2 seconds for up-down animation
            ease: 'linear',
            repeat: Infinity,
            repeatType: 'reverse',
            delay: delay, // Staggered delay for each icon
        },
    },
});

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h1
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y: -100}}
            transition={{duration: 1.5}}
            className='my-20 text-center text-4xl'>Technologies
            </motion.h1>
            <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x: -100}}
            transition={{duration: 1.5}}
            className='flex flex-wrap items-center justify-center gap-4'>
                <motion.div
                    variants={iconVariants(0.2)} // Delay: 0.2s
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'
                >
                    <RiReactjsLine className='text-7xl text-cyan-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(0.4)} // Delay: 0.4s
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'
                >
                    <SiMongodb className='text-7xl text-green-900' />
                </motion.div>
                <motion.div
                    variants={iconVariants(0.6)} // Delay: 0.6s
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'
                >
                    <FaNodeJs className='text-7xl text-green-400' />
                </motion.div>
                <motion.div
                    variants={iconVariants(0.8)} // Delay: 0.8s
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'
                >
                    <TbBrandMysql className='text-7xl text-blue-950' />
                </motion.div>
                <motion.div
                    variants={iconVariants(1)} // Delay: 1s
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'
                >
                    <SiExpress className='text-7xl text-white' />
                </motion.div>
                <motion.div
                    variants={iconVariants(1.2)} // Delay: 1.2s
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'
                >
                    <TbBrandLaravel className='text-7xl text-red-600' />
                </motion.div>
                <motion.div
                    variants={iconVariants(1.4)} // Delay: 1.4s
                    initial='initial'
                    animate='animate'
                    className='rounded-2xl border-4 border-neutral-800 p-4'
                >
                    <FaAngular className='text-7xl text-pink-500' />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Technologies;
