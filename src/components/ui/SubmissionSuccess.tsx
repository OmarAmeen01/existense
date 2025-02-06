"use client"
import React from 'react'
export default function SubmissionSuccess({isSubmitted}:{isSubmitted:boolean}) {


  return (
 <div className={`absolute  top-[50%] left-[50%] p-6  -translate-x-[50%] -translate-y-[50%]  transition-all duration-500 ease-in rounded-lg  ${isSubmitted?"bg-white shadow-xl opacity-100 min-w-[17rem] min-[400px]:min-w-[20rem]":" h-[0px] -z-50 w-[0px] opacity-0 "}`} >
    <svg viewBox="0 0 76 76" className={` delay-200   mx-auto  mb-4 transition-all ease-in duration-500 ${isSubmitted? "fill-green-500  h-24":"h-1 fill-white"}   `}>
        <circle cx="38" cy="38" r="36"/>
        <path fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" d="M17.7,40.9l10.9,10.9l28.7-28.7"/>
    </svg>
    <h1 className={`font-sans  text-green-500 delay-100   text-center font-[600] py-2 transition-all duration-200 ease-in ${isSubmitted? "text-3xl  sm:text-4xl font-[600] opacity-100 ":" font-[100] opacity-0"}`}>Details Received</h1>
    <div className={`text-center  font-sans transition-all delay-100 duration-500 ease-in  max-[400px]:px-4   m-auto ${isSubmitted?"max-sm:text-lg text-xl  text-gray-500 opacity-100":"opacity-0"}`}>
        <p>You have successfully joined the waitlist</p>
    </div>
</div>
  )
}
