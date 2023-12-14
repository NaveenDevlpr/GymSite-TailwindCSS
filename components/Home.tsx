import React from 'react'
import banner from '../public/banner.jpg'
import Image from 'next/image'

interface Props {
    
}

const HomeBanner = (props: Props) => {
    return (
        <div className="max-w-screen-2xl lg:min-h-screen h-screen overflow-hidden flex items-center justify-center"  >
            <Image className="w-full h-full absolute inset-0  object-cover" src={banner} alt=""/>
            <div className="absolute inset-0 bg-black opacity-50" ></div>

            <div className="absolute text-center z-100">
               
                    <h2 className="text-[#FDF0F0] p-2 lg:p-0 text-[24px] md:text-[46px] lg:text-[60px] italic font-semibold ">Your fitness journey starts here</h2>
                    <p className='text-[#FDF0F0] text-[14px] md:text-[22px] lg:text-xl font-medium mb-5 opacity-70 italic'>build your body strong</p>
                    <button className="mt-5 border-[1.75px] border-[#FDF0F0] md:px-6 px-4 py-2 text-[#FDF0F0] font-medium rounded-md">
                        
                        Explore
                    </button>
               
            </div>
    </div>
    )
}

export default HomeBanner
