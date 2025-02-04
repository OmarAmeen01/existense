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
        ["Misty explained algebra in such a simple way. I finally understood it!", "I loved how Misty turned boring history into an interesting story. It made everything . ", "The way Misty uses examples is so cool. It makes learning new topics fun and easy. ", "I finally understood the physics concept I struggled with for days. Misty is amazing!"],
        ["I’ve never had such an easy time understanding geography. Misty made it so simple.","The best part is how Misty talks to you. It feels like a friend teaching you, not just an app.","I understood fractions so easily after Misty explained them. I feel more confident now.","Misty broke down a tough chemistry problem into small steps, and I solved it without stress."],
        ["I couldn’t believe how quickly I picked up a new math formula after Misty’s explanation.","The analogies Misty uses are so unique. They help me connect topics with real-life examples.","I feel like I learned more in a few minutes with Misty than I do in an entire class. ","Misty made even the hardest topics feel easy and fun to learn."]
    ]


  return (
    <main>


<article>
    <header className='mt-12'>

        <h1 className='font-sans font-[600] max-[400px]:text-4xl text-5xl min-[676px]:text-6xl   text-center tracking-tighter py-4'>Introducting Misty</h1>
        <p className='text-center text-lg font-sans max-[330px]:px-1  max-[440px]:px-8 px-16 p-4  min-[676px]:text-2xl'>The revolutionary AI tutor designed to transform how we learn.</p>
    </header>
    <section className='mt-12 px-4 sm:px-11 min-[1350px]:px-40 md:px-20 lg:px-30  '>
        <Image  className='object-cover  m-w-[100%]   sm:h-96  lg:h-[800px] rounded-lg min-[1350px]:h-[1000px] w-full ' src="/Image.jpg" alt='product' width={100000} height={669}/>
    </section>
    <section className='mt-[72px] sm:mt-20 '>
         <div className=' md:px-[9rem] sm:px-[7rem] px-[4rem] lg:px-[12rem]  text-xl min-[1350px]:px-[17rem] sm:text-2xl py-2 font-sans min-[1350px]:text-3xl '>
        <p>Misty is a first-of-its-kind AI tutor designed to transform how we learn. Misty is an emotionally Intelligent AI tutor that adapts to every student&apos;s unique learning style, pace ensuring no one is left behind. Misty is not just another online tutor providing recorded video lessons or same resources to each one; it’s a truly personalized AI who treats every student according to his or her grasping power and with that it designs modules so the child can learn at his pace.</p>
        <p className=' mt-4 py-8 '>Unlike other GPT powered AI Chatbot, We are creating a human like AI who mimics one-to-one human interaction by acting and speaking just like a human teacher. You can learn anything, anytime, anywhere from the comfort your home at the most affordable price ever, acting like your live companion.</p>
         </div>
    </section>
    <section className='mt-[72px] min-[676px]:mt-20 '>
            <h2 className='font-sans font-[600] text-center max-[470px]:text-3xl text-4xl sm:text-6xl tracking-tighter p-2 '>
            Key Features of Misty
            </h2>
<section className=' px-4 mt-[72px] lg:mt-28'>
{features.map(feature=>{
    return (
        <div className={`justify-between flex flex-col md:gap-5  rounded-lg bg-white  mb-28 ${feature.style} `} key={feature.title}> 
   <div className='self-center md:w-[40rem]  min-[1350px]:mx-32 px-4 lg:w-[44rem] lg:mx-20 ' >
    <h3 className='font-sans 
    max-[338px]:text-2xl text-3xl min-[1350px]:text-4xl min-md:mb-7 p-2 max-md:pt-12 max-md:py-8 font-[600]'>{feature.title}</h3>
    <p className='font-sans max-[400px]:text-lg text-xl min-[675px]:text-2xl md:py-12  p-2  '>{feature.description}</p>
  </div>
<div>
<Image className=" w-full min-[1350px]:w-[950px]   max-md:mt-14 rounded-lg shadow-lg md:h-[550px] min-[1350px]:h-[700px]  max-w-full" src={feature.image} alt={feature.title} width={34200} height={400} quality={100} style={{objectFit:"cover"}}/>
</div>
   </div>
    )
})}
</section>

    </section>
<section className='mt-[72px] min-[676px]:mt-20 '>
    <header>
        <h2 className='font-sans font-[600] max-[400px]:text-4xl text-5xl sm:text-6xl  p-2 text-center '>Real Reviews</h2>
        <p className='font-sans text-xl min-[676px]:py-6 min-[676px]:text-2xl p-2 text-center'>Tested by 1000+ students.</p>
    </header>
   <section className='h-[28rem] md:h-[38rem] mt-12  overflow-hidden'>
  <div className="flex  wrapper">{reviews[0].map((review,index)=>{
    return (
        <div className={` itemLeft min-[1350px]:h-32 min-[1350px]:w-[28rem] h-22 md:h-32  w-[25rem]   bg-white  rounded-lg item${index}`} key={review.slice(0,4)}>
        
          <p className='font-sans p-4  md:text-xl'>{review}</p>
            
        </div>           
    )
  })}</div>
  <div className='flex  wrapper' >
  {reviews[1].map((review,index)=>{
    return (
        <div className={` itemRight min-[1350px]:h-32 min-[1350px]:w-[28rem] h-22 md:h-32  w-[25rem]  bg-white  rounded-lg  item${index}`}  key={review.slice(0,4)}>
        
          <p className='font-sans p-4  md:text-xl'>{review}</p>
            
        </div>
    )
  })}
  </div>
  <div className='flex  wrapper'>
  {reviews[2].map((review,index)=>{
    return (
        <div className={`  itemLeft min-[1350px]:h-32 min-[1350px]:w-[28rem]  h-22 md:h-32  w-[25rem] bg-white  rounded-lg item${index}`} key={review.slice(0,4)}>
        
          <p className='font-sans p-4  md:text-xl'>{review}</p>
            
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
