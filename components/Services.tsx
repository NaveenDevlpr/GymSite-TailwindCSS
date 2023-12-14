import React from 'react'
import gymone from '../public/gymone.png'
import gymtwo from '../public/gymtwo.png'
import Image from 'next/image'
import gymthree from '../public/gymthree.png'

interface Props {
    
}

const Services = (props: Props) => {
    return (
    <div className='max-w-screen-2xl mx-auto px-14'>
        <div className='lg:h-[80px]'></div>
        <div className='flex flex-col lg:flex-row items-center py-10'>
            <div className='lg:w-1/4 max-w-lg flex items-center justify-center'>
                <h2 className='lg:text-[42px] md:text-[28px] text-[24px] text-[#132043] font-semibold leading-[46px]'>
                    <span className='text-[#F1B4BB]'>Training</span><span className='text-[#1F4172]'> programs</span> that we offer you
                </h2>
             </div>

        <div className='lg:w-3/4 lg:grid lg:grid-cols-3 gap-4 mt-5 lg:mt-0'>
            <div className='h-[300px] max-w-sm rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4 p-4'>
                <div className='w-12 h-12'>
                    <Image className='w-full h-full' src={gymone} alt=''></Image>
                </div>
                <p className='w-3/4 text-[#132043] font-medium'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed maiores veniam dignissimos commodi harum ipsam aspernatur nobis.
                </p>
            </div>

             <div className='h-[300px] max-w-sm rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4 p-4'>
                 <div className='w-12 h-12'>
                    <Image className='w-full h-full' src={gymtwo} alt=''></Image>
                </div>
                <p className='w-3/4 text-[#132043] font-medium'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed maiores veniam dignissimos commodi harum ipsam aspernatur nobis.
                </p>
            </div>

            <div className='h-[300px] max-w-sm rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4 p-4'>
                <div className='w-12 h-12'>
                    <Image className='w-full h-full' src={gymthree} alt=''></Image>
                </div>
                <p className='w-3/4 text-[#132043] font-medium'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed maiores veniam dignissimos commodi harum ipsam aspernatur nobis.
                </p>
            </div>
        </div>
     </div>
    </div>
    )
}

export default Services
