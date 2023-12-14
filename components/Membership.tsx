'use client'

import Image from 'next/image'
import React ,{useState}from 'react'

interface Props {
    
}

const Membership = (props: Props) => {

    const [isYearly,setYaerly]=useState(false)

    const packages=[
        {
            name:'Start',
            monthlyPrice:'19',
            yearlyPrice:'199',
            description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
            green:'bulletOne.png'
        },
        {
            name:'Advance',
            monthlyPrice:'39',
            yearlyPrice:'399',
            description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
            green:'bulletOne.png'
        },
        {
            name:'Premium',
            monthlyPrice:'59',
            yearlyPrice:'599',
            description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout',
            green:'bulletOne.png'
        },
    ]
    return (
        <div className='p-4 md:px-14 max-w-s  mx-auto space-y-8 mt-[120px]' id='pricing'>
        <div className='text-center'>
            <h2 className='md:text-3xl lg:text-[42px] md:text-[28px] text-[24px] text-[##132043] font-semibold mb-2'><span className='text-[#F1B4BB]'>Get</span><span className='text-[#1F4172]'> All</span> your Plan</h2>

            <div className="mt-[40px] ">
                <label htmlFor="toggle" className="inline-flex items-center cursor-pointer">
                    <span className='text-2xl text-[#132043] mr-8 font-semibold'>Monthly</span>
                    <div className='w-14 h-6 bg-gray-300 rounded-full transition-all duration-200 ease-in-out'>
                        <div className={`w-6 h-6 rounded-full ${isYearly?'bg-[#132043] ml-8':'bg-gray-500'}`}></div>
                    </div>
                    <span className='text-2xl text-[#132043] ml-8 font-semibold' >Yearly</span>
                    <input type="checkbox" id='toggle' className="hidden" checked={isYearly} onChange={()=>{setYaerly(!isYearly)}}></input>
                </label>
            </div>
        </div>

        <div 
        
       
        className='grid lg:grid-cols-3 sm:grid-cols-2 gap-10 mt-20 md:w-11/12 mx-auto'>
            {
                packages.map((e,i)=>{
                    return(
                        <div key={i} className='py-10 md:px-6 px-4 rounded-lg shadow-lg'>
                            <h3 className='text-3xl font-semibold text-center text-[#132043]'>{e.name}</h3>
                            <p className='text-[#132043] text-center my-5 text-md font-medium'>{e.description}</p>
                            <p className='text-center mt-6 text-3xl font-semibold text-[#132043] '>
                                {isYearly?`Rs ${e.yearlyPrice}`:`Rs ${e.monthlyPrice}`}
                                <span className='text-[#132043] text-sm font-medium'>{isYearly?` / year`:` / month`}</span>
                            </p>
                            <ul className='mt-6 space-y-2 px-4'>
                                <li className='flex gap-2 items-center  text-[#132043] font-medium '><img src={e.green} alt='' className='w-4 h-4'/>Videos of lessons</li>
                                <li className='flex gap-2 items-center  text-[#132043] font-medium'><img src={e.green} alt='' className='w-4 h-4'/>Homework check</li>
                                <li className='flex gap-2 items-center  text-[#132043] font-medium '><img src={e.green} alt='' className='w-4 h-4'/>Additional practice task</li>
                                <li className='flex gap-2 items-center  text-[#132043] font-medium'><img src={e.green} alt='' className='w-4 h-4'/>Monthly conferences</li>
                                <li className='flex gap-2 items-center  text-[#132043] font-medium'><img src={e.green} alt='' className='w-4 h-4'/>Personal advice from teachers</li>
                            </ul>
                            <div className="w-full mx-auto mt-8 flex items-center justify-center ">
                                <button className='py-2 px-8 border-[#132043] border-[1.75px] font-semibold text-[#132043] hover:text-[#FDF0F0] rounded-md hover:bg-[#132043] transition-all duration-300'>
                                    Get started
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
    )
}

export default Membership
