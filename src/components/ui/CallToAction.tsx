"use client"
import React from 'react'
import useStore from '@/store/store'
import Button from './Button'
export default function CallToAction() {
    const setFormState= useStore(state=>state.setFromState)
  return (
    <section className='mt-28 min-[676px]:mt-64 mb-28'>
    <header>
        <h2 className='font-sans  text-center text-2xl min-[676px]:text-5xl p-2 px-16 '>Join the revolution in education </h2>
    </header>
        <Button onClick={()=>setFormState()} className='text-sm/7 font-sans p-2 px-8 mt-8 relative left-[50%] -translate-x-[50%]' text='Join Now'/>
        
</section>
  )
}
