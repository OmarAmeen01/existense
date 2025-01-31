 "use client"
import Link from 'next/link'
import React, { MouseEventHandler,useState } from 'react'
import Image from 'next/image'
import Button from './ui/Button'
import Register from './ui/Register'
import useStore from '@/store/store'
function Navbar({navLinks}:{navLinks:string[]}) {
   const setFormState =useStore(state=>state.setFromState) as MouseEventHandler<HTMLButtonElement>

const [isMenuVisible,setMenuVisibility] =useState(false)
  return (<>

    <header className="sticky  p-[14px] top-0 left-0 bg-[rgba(248,248,248,0.90)] backdrop-blur-md  z-10 ">
        <nav className='flex justify-between lg:mx-32'>
            <div id="logo" className='flex'>
           <div className='flex relative overflow-hidden w-8'>
           <Image src="/1.png" alt='Existense' width={150} height={150} className=' absolute -top-4 left-1 object-cover  h-[4.5rem] w-28'/>
           </div>
            <p className='p-1 font-sans  font-[600] '>Existense</p>
            </div>

   <div id='hamburger' className=' flex-col gap-1 p-2 hidden max-[674px]:flex' onClick={()=>setMenuVisibility(prev=>!prev)}>
   
    <div className="w-8 h-1 bg-black "></div>
    <div className="w-8 h-1 bg-black "></div>
    <div className="w-8 h-1 bg-black "></div>

   </div>
      <div className={`max-[674px]:mobileNav w-[50%] min-[676px]:flex min-[676px]:justify-between transition-all duration-200 ease-in-out ${isMenuVisible?"right-0":"-right-[100%]"}`}> 
      
      <ul className='grid min-[676px]:flex   '>
      <Link href="/" className='p-2 hover:opacity-60 font-sans text-2xl min-[676px]:text-sm' onClick={()=>setMenuVisibility(prev=>!prev)} >Home</Link>
          {navLinks.map(link=>{
              return (
                   <Link href={`/${link. toLowerCase()}`} key={link} className='p-2 hover:opacity-60  font-sans text-2xl min-[676px]:text-sm' onClick={()=>setMenuVisibility(prev=>!prev)} >{link}</Link>
              )
          })}
      </ul>
     <Button onClick={()=>{
        setFormState()
        setMenuVisibility(prev=>!prev)
     }} text='Join Now' className='py-2 max-[676px]:mt-5' />
     </div>
        </nav> 
    </header>
     <Register/>
     </>
  )
}

export default Navbar
