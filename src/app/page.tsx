"use client"
import React from 'react'
import Link from 'next/link'
import Register from '@/components/ui/Register'
function Home() {


  return (
     <main className='relative '>

<article>
  <section className='sm:px-10 px-3 border-2 '>
  <video src="/videos/Main.mp4" loop preload="metadata" height={40}  muted className='w-full border-2 rounded-lg ml-auto mr-auto h-[90vh] object-cover'></video>
      <div  className='absolute top-[50%] left-[50%]  transform -translate-x-[50%] -translate-y-[50%] ml-auto mr-auto'>
      <div id="title" className='mb-3'>
      <h1 className='font-sans text-center text-4xl text-white font-[600]'>
           EXISTENSE
        </h1>
        <p className='font-sans text-lg font-[300] sm:text-sm text-white text-center mt-1'>Revolutionising The Education System Forever</p>
      </div >
      <Link href="/company" className='border-none bg-white font-sans text-sm rounded-3xl py-2 px-6 outline-none trasition-all duration-100 hover:opacity-95 absolute mt-3 left-[50%] transform -translate-x-[50%] '>Learn More</Link>
      </div>
  </section>
</article>


     </main>
  )
}

export default Home
