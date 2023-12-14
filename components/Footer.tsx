import React from 'react'
import { CgGym } from "react-icons/cg";
import fb from '../public/fb.png'
import insta from '../public/insta.png'
import twitter from '../public/twitter.png'
import Image from 'next/image';


interface Props {
    
}

const Footer = (props: Props) => {
    return (
        <div className='bg-black md:px-14 p-4 max-w-screen-2xl mx-auto text-white'>
        <div className="my-10 flex flex-col md:flex-row">
            <div className='md:w-1/2 space-y-2 py-5'>
                <div>
                    <CgGym color='#FDF0F0' className='w-10 h-10'/>
                </div>
                <p className='md:w-1/2 text-gray-300'>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                </p>
                
            </div>

            <div className='md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start'>
                <div className="space-y-6 mt-5">
                    <h4 className=" text-xl">Platform</h4>
                    <ul className='space-y-2'>
                        <a href="/" className='block text-gray-300'>Home</a>
                        <a href="/" className='block text-gray-300'>Vision</a>
                        <a href="/" className='block text-gray-300'>Services</a>
                        <a href="/" className='block text-gray-300'>Pricing</a>
                    </ul>
                </div>

                <div className="space-y-6 mt-5">
                    <h4 className=' text-xl'>Help</h4>
                    <ul className='space-y-2'>
                        <a href="/" className='block text-gray-300'>How does it work</a>
                        <a href="/" className='block text-gray-300'>Where to ask questions</a>
                        <a href="/" className='block text-gray-300'>How to pay</a>
                        <a href="/" className='block text-gray-300'>What is needed for this</a>
                    </ul>
                </div>

                <div className="space-y-6 mt-5">
                    <h4 className=" text-xl">Contacts</h4>
                    <ul className='space-y-2'>
                        <p  className='block text-gray-300'>(012) 12345-67890</p>
                        <p  className='block text-gray-300'>Naveen Kumar</p>
                        <p  className='block text-gray-300'>naveenmk@gmail.com</p>
                        <p  className='block text-gray-300'>Pricing</p>
                    </ul>
                </div>
            </div>
            
        </div>
        <hr className='bg-gray-200'></hr>

        <div className='flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-5'>
            <p className='text-gray-300 text-[14px]'><span className='text-white font-medium'>GetFit  </span>2023-2025. All rights reserved.</p>
            <div className='flex items-center space-x-6'>
                <Image src={fb} className='w-5 cursor-pointer hover:-translate-y-4 transition-all duration-500 ' alt=''></Image>
                <Image src={insta} className='w-5 cursor-pointer hover:-translate-y-4 transition-all duration-500 ' alt=''></Image>
                <Image src={twitter} className='w-5 cursor-pointer hover:-translate-y-4 transition-all duration-500 ' alt=''></Image>
               
            </div>
        </div>
    </div>
    )
}

export default Footer


