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
    
    const layerStyle="w-7 h-[2px] transition-all ease-in-out duration-200  bg-black"
      return (<>
      <Register/>
        <header className={`sticky   p-[14px] -top-1 left-0 bg-[rgba(248,248,248,0.90)] backdrop-blur-2xl overflow-x-hidden  z-10  ${isMenuVisible?"max-[800px]:h-[100vh] ":""}`} ref={ref}>
            <nav className='flex justify-between   lg:mx-20 min-[1350px]:mx-44 '>
                <Link href="/" className='flex'>
               <div className='flex relative overflow-hidden w-12'>
               <Image src="/1.png" alt='Existense' width={200} height={200} className=' absolute -top-10 left-1 object-cover  h-[8.7rem] w-40'/>
               </div>
                <p className='p-1 font-sans text-[33px] font-[600]  '>Existense</p>
                </Link>
    
       <div id='hamburger' className="flex-col mt-3 gap-1 trasnition-all ease-in-out duration-300 delay-300 p-2 hidden max-[800px]:flex" onClick={()=>setMenuVisibility(prev=>!prev)}>
       
        <div className={`${layerStyle} ${isMenuVisible?"rotate-[50deg]  ":""}`}></div>
        <div className={`${layerStyle} bg-black ${isMenuVisible?"-translate-x-4 opacity-0":""}`}></div>
        <div className={`${layerStyle}  bg-black ${isMenuVisible?"-rotate-[50deg] -translate-y-4":""}`}></div>
    
       </div>
          <div className={`max-[800px]:mobileNav w-[60%] min-[800px]:flex min-[800px]:justify-between  ${isMenuVisible?"right-0":"-right-[100%]"}`}> 
          
          <ul className='grid min-[800px]:flex  min-[800px]:gap-10  '>
          <Link href="/" className='p-2 hover:opacity-60 font-sans  text-3xl min-[800px]:text-lg' onClick={()=>setMenuVisibility(prev=>!prev)} >Home</Link>
              {navLinks.map(link=>{
                  return (
                       <Link href={`/${link. toLowerCase()}`} key={link} className='p-2 hover:opacity-60 font-sans text-3xl min-[800px]:text-lg' onClick={()=>setMenuVisibility(prev=>!prev)} >{link}</Link>
                  )
              })}
          </ul>
         <Button onClick={()=>{
            setFormState()
            setMenuVisibility(prev=>!prev)
         }} text='Join Now' className='py-2 my-2 max-[800px]:mt-8' />
         </div>
            </nav> 
        </header>
    
         </>
      )
})

Navbar.displayName= "Navbar"

export default Navbar
