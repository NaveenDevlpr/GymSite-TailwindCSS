'use client'
import React, { useState } from 'react'
import { CgGym } from "react-icons/cg";
import { CgMenu } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
interface Props {
    
}

interface Links{
    name:string
}
const links:Links[]=[

   {
    name:'Home'
   },
   {
    name:'Vision'
   },
   {
    name:'About'
   },
   {
    name:'Contact'
   },
    
]
const Navbar = (props: Props) => {

    const [isOpen,setIsOpen]=useState<boolean>(false)
    return (
        
        <nav className='max-w-screen-2xl mx-auto z-50 bg-transparent lg:px-14 px-8 py-5 relative'>
            <div className='container mx-auto flex items-center justify-between'>
                <div>
                    <CgGym color='#FDF0F0' className='w-10 h-10'/>
                </div>
                <ul className='hidden lg:flex gap-10 lg:items-center justify-center'>
                    {
                        links.map((link,i)=>{
                            return(
                                <li key={i} className='text-xl text-[#FDF0F0] font-medium'>{link.name}</li>
                            )
                        })
                    }
                </ul>
                <button className='hidden lg:inline-block border-[1.75px] border-[#FDF0F0] px-4 py-2 text-[#FDF0F0] font-medium rounded-md'>
                    Join Now
                </button>

                {/**mobile view menu*/}
                <div className='block lg:hidden z-10 cursor-pointer' onClick={()=>setIsOpen(!isOpen)}>
                    {
                        isOpen?<AiOutlineClose color='#FDF0F0' className='w-10 h-10'/>:<CgMenu color='#FDF0F0' className='w-10 h-10'/>
                    }
                </div>

                <div className={`${isOpen?'absolute':'hidden'} lg:hidden h-screen top-0 right-0 md:w-2/5 w-1/2 bg-black cursor-pointer`}>
                <ul className='flex flex-col items-center justify-center h-full space-y-8'>
                    {
                        links.map((link,i)=>{
                            return(
                                <li key={i} className='text-xl text-[#FDF0F0] font-medium'>{link.name}</li>
                            )
                        })
                    }
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
