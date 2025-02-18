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
    
        <header className={` -top-1 left-0 bg-[rgba(248,248,248,0.20)] backdrop-blur-2xl  overflow-hidden  z-10  ${isMenuVisible?"  max-[800px]:h-[110vh] max-[800px]:w-[100vw]  max-[800px]:fixed  max-[800px]:bg-[rgba(248,248,248,0.60)] -top-1 ":"sticky"}`} ref={ref}>
            <nav className='flex justify-between h-14 2xl:h-16 lg:mx-14 min-[1350px]:mx-28  '>
                <Link href="/" className='flex p-3  '>
               <div className='flex relative  overflow-hidden w-12'>
               <Image src="/1.png" alt='Existense' width={200} height={200} className=' absolute -top-6 2xl:-top-8 left-2 object-cover h-[5rem]  2xl:h-[6rem] w-40'/>
               </div>
                <p className='p-1 font-sans text-lg font-[600]  '>Existense</p>
                </Link>
    
       <div id='hamburger' className="flex-col mt-3 gap-1 trasnition-all ease-in-out duration-300 delay-300 max-[800px]:mr-7 p-2 hidden max-[800px]:flex" onClick={()=>setMenuVisibility(prev=>!prev)}>
       
        <div className={` transition-all duration-200 ease-in-out ${layerStyle} ${isMenuVisible?"rotate-[45deg]  ":""}`}></div>
        <div className={` transition-all duration-200 ease-in-out ${layerStyle} bg-black ${isMenuVisible?"-translate-x-4 opacity-0":""}`}></div>
        <div className={` transition-all duration-200 ease-in-out ${layerStyle}  bg-black ${isMenuVisible?"-rotate-[45deg] -translate-y-[12px]":""}`}></div>
    
       </div>
          <div className={`max-[800px]:mobileNav w-[60%] min-[800px]:flex min-[800px]:justify-between  ${isMenuVisible?"right-0":"-right-[100%]"}`}> 
          
          <ul className='grid min-[800px]:flex min-[800px]:gap-6 gap-2   '>
          <Link href="/" className=' hover:opacity-60 py-2 font-sans
          text-sm 
          max-[800px]:text-2xl 
          2xl:text-lg min-[800px]:p-4   ' onClick={()=>setMenuVisibility(prev=>!prev)} >Home</Link> 
              {navLinks.map(link=>{
                  return (
                       <Link href={`/${link. toLowerCase()}`} key={link} className='py-2 m max-[800px]:text-2xl   text-sm  min-[800px]:p-4 2xl:text-lg hover:opacity-60  font-sans ' onClick={()=>setMenuVisibility(prev=>!prev)} >{link}</Link>
                  )
              })}
          </ul>
         <Button onClick={()=>{
            setFormState()
            setMenuVisibility(prev=>!prev)
         }} text='Join Now' className='py-1  max-md:py-2 min-[800px]:text-sm my-3 max-[800px]:mt-9 min-[800px]:px-3 text-lg px-8  ' />
         </div>
            </nav> 
        </header>
    
         </>
      )
})

Navbar.displayName= "Navbar"

export default Navbar
