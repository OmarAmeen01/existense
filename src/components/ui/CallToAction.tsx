"use client"
import React from 'react'
import useStore from '@/store/store'
import Button from './Button'
export default function CallToAction() {
    const setFormState= useStore(state=>state.setFromState)
  return (
    <section className='bg-[#F8F8F8] h-[27rem] py-14 px-8 sm:p-14 items-center rounded-lg mx-3 min-[1200px]:mx-20 min-[500px]:mx-10 mb-16 '>
    <header className='mt-24 '>
        <h2 className='font-sans  tracking-tight 
         max-[400px]:
        text-center max-[400px]:text-2xl text-3xl md:text-4xl min-[1350px]:text-5xl font-[500] p-2'>Join the revolution in education </h2>
    </header>
        <Button onClick={()=>setFormState()} className='text-xl font-sans p-2 px-8   max-[400px]:mt-2 mt-8 relative left-[50%] -translate-x-[50%]' text='Join Now'/>
        
</section>
  )
}
