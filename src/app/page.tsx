"use client"
import React from 'react'
import Link from 'next/link'

function Home() {


  return (
     <main className='relative overflow-y-hidden '>

<article>
  <section className='sm:px-10 px-3 border-2 '>
  <video src="/videos/Main.mp4"  loop preload="metadata" height={40}  muted className='w-full border-2 rounded-lg ml-auto mr-auto h-[90vh] object-cover'></video>
  
     <div  className='absolute top-[50%] left-[50%]  transform -translate-x-[50%] -translate-y-[50%] ml-auto mr-auto'>
     <div className='relative grid place-items-center'>
      <div id="title" className='mb-3'>
      <h1 className='font-sans text-center text-4xl text-white font-[600]'>
           EXISTENSE
        </h1>
        <p className='font-sans text-lg font-[300] sm:text-sm text-white text-center mt-1'>Revolutionising The Education System Forever</p>
      </div >
      <Link href="/company" className='border-none bg-white font-sans text-sm rounded-3xl max-w-[7.8rem] py-2 px-6 outline-none trasition-all duration-100  hover:opacity-95 mt-3 '>Learn More</Link>
      </div>
     </div>
  </section>
</article>


     </main>
  )
}

export default Home
