"use client"
import React from 'react'
import useStore from '@/store/store'
import Button from './Button'
export default function CallToAction() {
    const setFormState= useStore(state=>state.setFromState)
  return (
    <section className='bg-white h-[27rem] p-14 items-center mt-28 min-[676p rounded-lg sm:mx-12 mx-4 min-[1350px]:mx-44 mb-16'>
    <header className='mt-24 '>
        <h2 className='font-sans  tracking-tight 
         max-[400px]:
        text-center max-[400px]:text-lg text-3xl md:text-4xl min-[1350px]:text-6xl p-2'>Join the revolution in education </h2>
    </header>
        <Button onClick={()=>setFormState()} className='text-xl font-sans p-2 px-8   max-[400px]:mt-2 mt-8 relative left-[50%] -translate-x-[50%]' text='Join Now'/>
        
</section>
  )
}
