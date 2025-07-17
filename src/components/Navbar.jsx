import React, { useEffect, useState } from 'react'
import {assets} from "../assets/assets"
const Navbar = () => {
    const [showMobileView,setMobileView]=useState(false);
    useEffect(()=>{
        if (showMobileView){
            document.body.style.overflow='hidden'
        }
        else{
            document.body.style.overflow='auto'
        }
        return ()=>{
            document.body.style.overflow='auto'
        }
    },[showMobileView])
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.logo} alt="" />
            <ul className='hidden md:flex gap-7 text-white'>
                <a href="#Home" className='cursor-pointer hover:text-gray-400'>Home</a>
                <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
                <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
            </ul>
            <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign Up</button>
            <img src={assets.menu_icon} alt="" className='md:hidden w-7 cursor-pointer' onClick={()=>setMobileView(true)}/>
        </div>
        <div className={`md:hidden ${showMobileView? 'fixed w-full':'w-0 h-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`} onClick={()=>setMobileView(false)}>
            <div className='flex justify-end p-6 cursor-pointer'>
                <img src={assets.cross_icon} alt="" className='w-6'/>
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                <a href="#Header" className='px-4 py-2 rounded-full inline-block' onClick={()=>setMobileView(false)}>Home</a>
                <a href="#About" className='px-4 py-2 rounded-full inline-block' onClick={()=>setMobileView(false)}>About</a>
                <a href="#Project" className='px-4 py-2 rounded-full inline-block' onClick={()=>setMobileView(false)}>Project</a>
                <a href="#Testimonials" className='px-4 py-2 rounded-full inline-block' onClick={()=>setMobileView(false)}>Testimonials</a>
            </ul>
        </div>
    </div>
  )
} 

export default Navbar
