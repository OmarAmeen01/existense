import React from 'react'
import Image from 'next/image'
import Footer from '@/components/Footer'
import CallToAction from '@/components/ui/CallToAction'
export default function page() {
 
    const features= [
        {
            title:"24/7 Access",
            description:"Misty offers 24/7 access. This way, the student can learn and get help from anywhere, at any time. Be it homework or midnight exam preparation, Misty is there to guide them in detail, acting like your live companion.",
            image:"/img1.png",
            style:"md:flex-row "
        },
        {
            title:"Emotional Intelligence",
            description:"Misty has the ability to understand students' emotional states and react accordingly for a better learning experience. Based on signs of stress, frustration, or disengagement, Misty can personally support students.",
            image:"/img2.jpg",
            style:"md:flex-row md:flex-row-reverse"
        },
        {
            title:"Hyper Personalization",
            description:"Misty’s actual personalization extends beyond the scope of all education tools since after each lesson, Misty collects data of the child and varies the teaching approach according to the strengths, weaknesses of each student.",
            image:"/img3.jpg",
             style:"md:flex-row"
        },
        {
            title:"95% Accurate Test Preparation",
            description:"Misty’s test preparation is 95% accurate because it uses AI in the generation of question papers and practice tests that mimic the actual format of the exams, based on historical data and trends.",
            image:"/img4.jpg",
             style:"md:flex-row md:flex-row-reverse"
        },
        {
            title:"Multilingual",
            description:"With Misty, language is not a barrier but a bridge to better understanding and connection. By supporting 95+ languages, Misty ensures that learning is accessible to students from diverse linguistic backgrounds.",
            image:"/img5.jpg",
            style:"md:flex-row "
        }
    ]

    const reviews =[
        ["Misty explained algebra in such a simple way. I finally understood it!", "I loved how Misty turned boring history into an interesting story.", "The way Misty uses examples is so cool. It makes learning fun and easy ", "I finally understood the physics concept I struggled with for days. "],
        ["I’ve never had such an easy time understanding geography.","The best part is how Misty talks to you. It feels like a friend teaching you","I understood fractions so easily after Misty explained them.","Misty broke down a tough chemistry problem into small steps."],
        ["I couldn’t believe how quickly I picked up a new math formula after Misty’s explanation.","The analogies Misty uses are so unique. They help me connect topics with real-life examples.","I feel like I learned more in a few minutes with Misty than I do in an entire class. ","Misty made even the hardest topics feel easy and fun to learn."]
    ]

//styles 




  return (
    <main>


<article className=' '>
  <section className=' mx-4 min-[1200px]:mx-36'>


    <header className='mt-24 md:w-[44rem] m-auto '>

        <h1 className='font-sans font-[500] text-3xl sm:text-4xl 2xl::text-5xl  text-center  py-4'>Introducting Misty</h1>
        <p className='text-center  min-[480px]:w-[28rem] font-sans  py-4 max-[400px]:px-4 text-lg sm:w-[38rem] m-auto'>The revolutionary AI tutor designed to transform how we learn.</p>
    </header>
    </section>
    <section className='mt-12 md:px-10 lg:px-48 min-[1600px]:px-[14rem]  '>
        <Image  className='object-cover w-full h-96 2xl:h-[700px] min-[1100px]:h-[500px] max-sm:h-64  max-[370px]:h-44 rounded-lg  ' src="/img8.webp" alt='product' width={100000} height={669}/>
    </section>
    <section className="mx-4 min-[1200px]:mx-36 mt-[72px] min-[676px]:mt-28 min-[500px]:px-16 px-4 sm:px-28 md:px-44 lg:px-64 xl:px-72 2xl:px-96 min-[1660px]:px-[430px]">
         <div className='font-sans  py-8 max-md:py-4 text-lg    
         
        '>
        <p>Misty is a first-of-its-kind AI tutor designed to transform how we learn. Misty is an emotionally Intelligent AI tutor that adapts to every student&apos;s unique learning style, pace ensuring no one is left behind. Misty is not just another online tutor providing recorded video lessons or same resources to each one; it’s a truly personalized AI who treats every student according to his or her grasping power and with that it designs modules so the child can learn at his pace.</p>
        <p className=' mt-4 py-1 '>Unlike other GPT powered AI Chatbot, We are creating a human like AI who mimics one-to-one human interaction by acting and speaking just like a human teacher. You can learn anything, anytime, anywhere from the comfort your home at the most affordable price ever, acting like your live companion.</p>
         </div>
    </section>
    <section className='mx-4 lg:mr-32 min-[1200px]:mx-36 mt-[72px] min-[676px]:mt-20 '>
            <h2 className='font-sans font-[500] text-3xl sm:text-4xl 2xl:text-5xl  text-center  '>
            Key Features of Misty
            </h2>
<section className='justify-between flex flex-col lg:mx-16 md:mx-12 2xl:mx-28   gap-16 rounded-lg min[400px]:px-10 my-20 mt-16 min-[700px]:mx-10 '>
{features.map(feature=>{
    return (
        <div className={`justify-between flex flex-col-reverse md:gap-5 mb-6 max-w-[1306px]  2xl:mx-4 rounded-lg bg-[rgb(248,248,248)]   ${feature.style} `} key={feature.title}> 
   <div className='self-center  lg:mx-24  2xl:mx-24 md:max-w-[20rem] 2xl:max-w-[26rem] px-4   ' >
    <h3 className='font-sans 
 text-2xl 2xl:text-3xl min-md:mb-7 max-md:pt-8 font-[500]'>{feature.title}</h3>
    <p className='font-sans  py-8 max-md:py-4 text-lg    
         
         '>{feature.description}</p>
  </div>
<div>
<Image className=" w-full    rounded-lg  lg:w-[27rem] 2xl:w-[35rem] min-[700px]:h-[450px]  2xl:h-[532px] min-[1100px]:h-[434px]   max-w-full" src={feature.image} alt={feature.title} width={34200} height={400} quality={100} style={{objectFit:"cover"}}/>
</div>
   </div>
    )
})}
</section>

    </section>
<section className=' mt-[72px] min-[676px]:mt-20'>
    <header>
        <h2 className='font-sans font-[500] text-3xl sm:text-4xl 2xl:text-5xl  text-center  '>Real Reviews</h2>
        <p className='text-center  min-[480px]:w-[28rem] font-sans  py-3 max-[400px]:px-4 text-lg  2xl:text-xl sm:w-[38rem] m-auto'>Tested by 1000+ students.</p>
    </header>
   <section className='  overflow-hidden mt-10  mx-4 min-[1250px]:w-[1080px] min-[1400px]:w-[1224px] mr-auto ml-auto mb-28'>
  <div className="flex  wrapper">{reviews[0].map((review,index)=>{
    return (
        <div className={` itemLeft  h-[77px]  w-[340px]  bg-[#F8F8F8]  rounded-lg item${index}`} key={review.slice(0,4)}>
        
          <p className='font-sans p-4 font-[500] text-sm'>{review}</p>
            
        </div>           
    )
  })}</div>
  <div className='flex  wrapper' >
  {reviews[1].map((review,index)=>{
    return (
        <div className={` itemRight h-[77px]  w-[340px]   bg-[#F8F8F8] rounded-lg  item${index}`}  key={review.slice(0,4)}>
        
          <p className='font-sans p-4 font-[500] text-sm'>{review}</p>
            
        </div>
    )
  })}
  </div>
  <div className='flex  wrapper'>
  {reviews[2].map((review,index)=>{
    return (
        <div className={`  itemLeft h-[77px]  w-[340px] font-[500] bg-[#F8F8F8] rounded-lg item${index}`} key={review.slice(0,4)}>
        
          <p className='font-sans p-4  text-sm'>{review}</p>
            
        </div>
    )
  })}
  </div>
   </section>
</section>

<CallToAction/>

</article>
<Footer/>
</main>
  )
}
