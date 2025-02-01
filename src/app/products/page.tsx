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
            style:"min-[676px]:flex-row "
        },
        {
            title:"Emotional Intelligence",
            description:"Misty has the ability to understand students' emotional states and react accordingly for a better learning experience. Based on signs of stress, frustration, or disengagement, Misty can personally support students.",
            image:"/img2.jpg",
            style:"min-[676px]:flex-row min-[676px]:flex-row-reverse"
        },
        {
            title:"Hyper Personalization",
            description:"Misty’s actual personalization extends beyond the scope of all education tools since after each lesson, Misty collects data of the child and varies the teaching approach according to the strengths, weaknesses of each student.",
            image:"/img3.jpg",
             style:"min-[676px]:flex-row"
        },
        {
            title:"95% Accurate Test Preparation",
            description:"Misty’s test preparation is 95% accurate because it uses AI in the generation of question papers and practice tests that mimic the actual format of the exams, based on historical data and trends.",
            image:"/img4.jpg",
             style:"min-[676px]:flex-row min-[676px]:flex-row-reverse"
        },
        {
            title:"Multilingual",
            description:"With Misty, language is not a barrier but a bridge to better understanding and connection. By supporting 95+ languages, Misty ensures that learning is accessible to students from diverse linguistic backgrounds.",
            image:"/img5.jpg",
            style:"min-[676px]:flex-row "
        }
    ]

    const reviews =[
        ["Misty explained algebra in such a simple way. I finally understood it!", "I loved how Misty turned boring history into an interesting story. It made everything easy to remember. ", "The way Misty uses examples is so cool. It makes learning new topics fun and easy. ", "I finally understood the physics concept I struggled with for days. Misty is amazing!"],
        ["I’ve never had such an easy time understanding geography. Misty made it so simple.","The best part is how Misty talks to you. It feels like a friend teaching you, not just an app.","I understood fractions so easily after Misty explained them. I feel more confident now.","Misty broke down a tough chemistry problem into small steps, and I solved it without stress."],
        ["I couldn’t believe how quickly I picked up a new math formula after Misty’s explanation.","The analogies Misty uses are so unique. They help me connect topics with real-life examples.","I feel like I learned more in a few minutes with Misty than I do in an entire class. ","Misty made even the hardest topics feel easy and fun to learn."]
    ]


  return (
    <main>


<article>
    <header className='mt-12'>

        <h1 id='product-heading' className='font-sans font-[600] text-4xl sm:text-5xl  text-center tracking-tighter p-2'>Introducting Misty</h1>
        <p className='text-center font-sans p-2 sm:text-lg'>The revolutionary AI tutor designed to transform how we learn.</p>
    </header>
    <section className='mt-10 p-4'>
        <Image className='object-cover  m-w-[100%] h-52 sm:h-[550px]  mx-auto rounded-lg shadow-2xl' src="/Image.jpg" alt='product' width={1100} height={669}/>
    </section>
    <section className='mt-[72px] sm:mt-28'>
         <div className='px-12 md:px-[7rem] lg:px-[18rem] py-2 font-sans min-[676px]:text-2xl'>
        <p>First-of-its-kind emotionally Intelligent AI tutor that adapts to every student&aposs unique learning style, ensuring no one is left behind. Misty is not just another online tutor providing recorded video lessons or same resources to each one; it’s a truly personalized AI who treats every student according to his or her grasping power and with that it designs modules so the child can learn at his pace. </p>
        <p className=' mt-4 py-8 '>We are creating a human like AI which mimics one-to-one human interaction by acting and speaking just like a human teacher. You can learn anything, anytime, anywhere from the comfort your home at the most affordable price ever, acting like your live companion.</p>
         </div>
    </section>
    <section className='mt-[72px] min-[676px]:mt-28'>
            <h2 className='font-sans font-[600] text-center text-3xl sm:text-5xl p-2 '>
            Key Features of Misty
            </h2>
<section className=' mt-[72px] lg:mt-28'>
{features.map(feature=>{
    return (
        <div className={`justify-around flex flex-col px-4 lg:px-28 gap-5 mb-28 ${feature.style} `} key={feature.title}> 
   <div className='self-center lg:w-[30rem] ' >
    <h3 className='font-sans sm:text-3xl mb-7 p-2 font-[600]'>{feature.title}</h3>
    <p className='font-sans  sm:text-lg p-2  '>{feature.description}</p>
  </div>
<div>
<Image className="w-full   mt-14 rounded-lg shadow-lg  h-[399px] min-[676px]:h-[576px] max-w-full" src={feature.image} alt={feature.title} width={342} height={400} quality={100} style={{objectFit:"cover"}}/>
</div>
   </div>
    )
})}
</section>

    </section>
<section className='mt-[72px] min-[676px]:mt-28'>
    <header>
        <h2 className='font-sans font-[600] text-3xl min-[676px]:text-5xl p-2 text-center '>real reviews</h2>
        <p className='font-sans  min-[676px]:text-lg p-2 text-center'>Tested by 1300+ students.</p>
    </header>
   <section className='mt-16 0 h-96 overflow-hidden'>
  <div className="flex   wrapper">{reviews[0].map((review,index)=>{
    return (
        <div className={`p-7 itemLeft h-28 w-[26rem] bg-white   rounded-lg item${index}`} key={review.slice(0,4)}>
        
          <p className='font-sans max-[676px]:text-sm  '>{review}</p>
            
        </div>           
    )
  })}</div>
  <div className='flex  wrapper' >
  {reviews[1].map((review,index)=>{
    return (
        <div className={`p-7 itemRight h-28 w-[26rem] bg-white  rounded-lg  item${index}`}  key={review.slice(0,4)}>
        
          <p className='font-sans max-[676px]:text-sm'>{review}</p>
            
        </div>
    )
  })}
  </div>
  <div className='flex  wrapper'>
  {reviews[2].map((review,index)=>{
    return (
        <div className={`min-[676px]:p-7 p-4 itemLeft h-24 min-[676px]:h-28 w-[26rem] bg-white  rounded-lg item${index}`} key={review.slice(0,4)}>
        
          <p className='font-sans max-[676px]:text-sm'>{review}</p>
            
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
