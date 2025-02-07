 "use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import Button from './ui/Button'
import Register from './ui/Register'
import useStore from '@/store/store'

interface NavbarProps {navLinks:string[]}

const Navbar = React.forwardRef<HTMLElement,NavbarProps>(({navLinks},ref)=>{

    const setFormState =useStore(state=>state.setFromState)

    const [isMenuVisible,setMenuVisibility] =useState(false)
    
    const layerStyle="w-5 h-[2px] transition-all ease-in-out duration-200  bg-black"
      return (<>
      <Register/>
    
        <header className={` -top-1 left-0 bg-[rgba(248,248,248,0.20)] backdrop-blur-2xl overflow-x-hidden  z-10  ${isMenuVisible?" h-[100vh] w-[100vw] absolute bg-[rgba(248,248,248,0.60)] ":"sticky"}`} ref={ref}>
            <nav className='flex justify-between h-14 md:h-16 lg:mx-14 min-[1350px]:mx-28  '>
                <Link href="/" className='flex p-3  '>
               <div className='flex relative  overflow-hidden w-12'>
               <Image src="/1.png" alt='Existense' width={200} height={200} className=' absolute -top-6 md:-top-8 left-2 object-cover h-[5rem]  md:h-[6rem] w-40'/>
               </div>
                <p className='p-1 font-sans text-lg font-[600]  '>Existense</p>
                </Link>
    
       <div id='hamburger' className="flex-col mt-3 gap-1 trasnition-all ease-in-out duration-300 delay-300 max-[800px]:mr-7 p-2 hidden max-[800px]:flex" onClick={()=>setMenuVisibility(prev=>!prev)}>
       
        <div className={`${layerStyle} ${isMenuVisible?"rotate-[45deg]  ":""}`}></div>
        <div className={`${layerStyle} bg-black ${isMenuVisible?"-translate-x-4 opacity-0":""}`}></div>
        <div className={`${layerStyle}  bg-black ${isMenuVisible?"-rotate-[45deg] -translate-y-[12px]":""}`}></div>
    
       </div>
          <div className={`max-[800px]:mobileNav w-[60%] min-[800px]:flex 
          
            min-[800px]:justify-between  ${isMenuVisible?"right-0":"-right-[100%]"}`}> 
          
          <ul className='grid min-[800px]:flex  min-[800px]:gap-10    '>
          <Link href="/" className=' hover:opacity-60 py-2 font-sans  min-[800px]:p-4  text-xl min-[800px]:text-[16px]' onClick={()=>setMenuVisibility(prev=>!prev)} >Home</Link>
              {navLinks.map(link=>{
                  return (
                       <Link href={`/${link. toLowerCase()}`} key={link} className='py-2 min-[800px]:p-4 hover:opacity-60  font-sans text-xl min-[800px]:text-[16px]' onClick={()=>setMenuVisibility(prev=>!prev)} >{link}</Link>
                  )
              })}
          </ul>
         <Button onClick={()=>{
            setFormState()
            setMenuVisibility(prev=>!prev)
         }} text='Join Now' className='py-1  max-md:py-2 text-sm my-4 max-[800px]:mt-5 min-[800px]:px-2 px-3' />
         </div>
            </nav> 
        </header>
    
         </>
      )
})

Navbar.displayName= "Navbar"

export default Navbar
