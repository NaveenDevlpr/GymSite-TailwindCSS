import React from 'react'

interface Props {
    
}

const NewsLetter = (props: Props) => {
    return (
        <div className='max-w-screen-2xl mx-auto my-[80px]'>
            <div className='max-w-lg mx-auto flex flex-col items-center justify-center py-10'>
                <h2 className='lg:text-[42px] text-[24px] md:text-[28px]  text-[#132043] font-semibold'>
                    <span className='text-[#F1B4BB]'>Contact</span> Us
                </h2>

                <div className='w-full flex items-center justify-between mt-10'>
                    <input type='email' placeholder='email' className='outline-none border-none w-full px-4 py-3 text-[#FDF0F0] bg-black placeholder:text-[#FDF0F0] rounded-md'/>
                    <button className='ml-2 bg-[#F1B4BB] px-4 py-3 text-[#FDF0F0] rounded-md'>send</button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter
