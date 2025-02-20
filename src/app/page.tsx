"use client"
import React from 'react'
import Link from 'next/link'

function Home() {


  return (
     <main className='relative  '>

<article>
  <section className='sm:px-7 px-3  '>
  <video src="/videos/Main.mp4"  loop preload="metadata" height={40}  muted className='w-full border-2 rounded-lg ml-auto mr-auto h-[90vh] object-cover'></video>
  
     <div  className='absolute top-[50%] left-[50%]  transform -translate-x-[50%] -translate-y-[50%] ml-auto mr-auto'>
     <div className='relative grid gap-5 place-items-center'>
      <div id="title" className='max-[676px]:w-80'>
      <h1 className='font-sans text-center text-4xl 2xl:text-5xl  py-1 lg:py-4 text-white font-[600]'>
           Existense
        </h1>
        <p className='font-sans text-xl 2xl:text-2xl text-white text-center '>Revolutionizing The Education System Forever</p>
      </div >
      <Link href="/company" className='border-none bg-white font-sans text-[17px] rounded-3xl  py-2 px-4 outline-none trasition-all duration-100  hover:opacity-95 lg:mt-3  '>Learn More</Link>
      </div>
     </div>
  </section>
</article>


     </main>
  )
}

export default Home
