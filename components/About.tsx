import React from 'react'
import aboutOne from '../public/aboutOne.jpg'
import aboutTwo from '../public/aboutTwo.jpg'
import aboutThree from'../public/aboutThree.jpg'
import aboutFour from '../public/aboutFour.jpg'
import Image from 'next/image'
interface Props {
    
}

const About = (props: Props) => {
    return (
        <div className='max-w-screen-2xl mx-auto relative'>
            <div className='flex flex-col items-center space-y-12 py-5 px-4 lg:px-0'>
                <div className=''>
                    <h2 className='text-[#132043] lg:text-[42px] md:text-[28px] text-[24px] font-semibold'>
                        <span className='text-[#F1B4BB]'>Our</span> Vision
                    </h2>
                </div>
                <div className='flex lg:h-[400px] h-[250px] lg:max-w-5xl max-w-xl rounded-lg shadow-lg overflow-hidden bg-[#F1B4BB]'>
                    <div className='w-1/2'>
                        <Image className='h-full object-cover object-center' src={aboutFour} alt=''></Image>
                    </div>
                    <div className='lg:w-1/2 w-3/5 p-6 flex flex-col justify-center items-start'>
                        <h2 className='lg:text-4xl md:text-2xl font-bold mb-4 text-[#FDF0F0]'>Reinventing<br/>resistance</h2>
                        <p className='text-[#FDF0F0] lg:text-xl md:text-md text-sm opacity-50 lg:mt-4'>We took one of the most versatile pieces of fitness equipment and re-engineered it from the ground up</p>
                    </div>
                </div>

                <div className='flex flex-row-reverse lg:h-[400px] h-[250px] lg:max-w-5xl max-w-xl rounded-lg shadow-lg overflow-hidden bg-[#1F4172]'>
                    <div className='w-1/2'>
                        <Image className='h-full object-cover object-center' src={aboutTwo} alt=''></Image>
                    </div>
                    <div className='w-1/2 p-6 flex flex-col justify-center items-start '>
                        <h2 className='lg:text-4xl md:text-2xl font-bold mb-4 text-[#FDF0F0]'>Fitness made<br/>for you</h2>
                        <p className='text-[#FDF0F0] lg:text-xl md:text-md text-sm opacity-50 lg:mt-4'>Designed for absolutely all fitness levels from first time fitness doers to lifelong fitness fanatics.</p>
                    </div>
                </div>


                <div className='flex lg:h-[400px] h-[250px] lg:max-w-5xl max-w-xl rounded-lg shadow-lg overflow-hidden bg-[#132043]'>
                    <div className='w-1/2'>
                        <Image className='h-full object-cover object-center' src={aboutThree} alt=''></Image>
                    </div>
                    <div className='w-1/2 p-6 flex flex-col justify-center items-start'>
                        <h2 className='lg:text-4xl md:text-2xl font-bold mb-4 text-[#FDF0F0]'>Take it<br/>anywhere</h2>
                        <p className='text-[#FDF0F0] lg:text-xl md:text-md text-sm opacity-50 lg:mt-4'>Pull it apart and break it down to take your personal gym with you wherever you go.</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default About
