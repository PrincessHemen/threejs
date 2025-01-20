'use client'

import Image from 'next/image'
import {AnimatePresence, motion, MotionProps } from 'framer-motion'
import { useSnapshot } from 'valtio';
import state from '../../store'
import { CustomButton } from '@/components';
import {
   headContainerAnimation,
   headContentAnimation,
   headTextAnimation,
   slideAnimation, 
 } from '../../config/motion'


const HomePage = () => {

    const snap = useSnapshot(state)

    return (
        <AnimatePresence>
            {snap.intro && (
                <motion.section
                className="home"
                {...slideAnimation('left') as any}
                >
                    <motion.header>
                        <Image
                            src='/threejs.png'
                            alt='The Three.js logo'
                            width={32}
                            height={32}
                            className='w-8 h-8 object-contain'
                        />
                    </motion.header>

                    <motion.div className='home-content' {...headContainerAnimation as any}>
                        <motion.div {...headTextAnimation as any}>
                            <h1 className='head-text'>
                                LET'S <br className='x1:block hidden'/> DO IT.
                            </h1>
                        </motion.div>
                    </motion.div>

                    <motion.div className='flex flex-col gap-5' {...headContentAnimation as any}>
                        <p className='max-w-md font-normal text-gray-600 text-base'>
                            Create your own unique and exclusive jersey with our cutting edge 3D customization tool. <br/> <strong>Unleash your imagination</strong> {" "} and define your style.
                        </p>
                        <CustomButton
                           type='filled'
                           title='Customize It'
                           onClick={() => state.intro = false}
                           customStyle='w-fit px-4 py-2.5 font-bold text-sm' 
                        />
                    </motion.div>
                </motion.section>
            )}
        </AnimatePresence>
    )
    
} 

export default HomePage;