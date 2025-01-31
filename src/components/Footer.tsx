import React from 'react'
import Image from 'next/image'
export default function Footer() {
  const socialIcons = [
    {title:"instagram",
      icon:"/instagram.svg"
    },
    {title:"youtube",
      icon:"/youtube.svg"
    },
    {title:"github",
      icon:"/github.svg"
    },
    {title:"discord",
      icon:"/discord.svg"
    },
    {title:"linkedin",
      icon:"/linkedin.svg"
    }

  ]
  return (
    <footer className='flex min-max-[676px]:flex-row-reverse flex-col justify-center items-center gap-5 min-max-[676px]:justify-between min-[676px]:px-40 py-10'>
      <h2 className='font-sans  max-max-[676px]:font-[600]  min-max-[676px]:hidden py-2'>English (US)</h2>
     <section className='flex max-[676px]:gap-8  '>
      {socialIcons.map(icon=>{
        return (
          <a href="#" target='_blank'  key={icon.title}>  <Image src={icon.icon} alt={icon.title}className='hover:opacity-70   max-[676px]:mx-5' width={24} height={24}/></a>
        )
      })}

     </section>
     <section>
      <h2 className='font-sans font-[600] text-center max-[676px]:hidden py-2'>English (US)</h2>
      <p className='font-sans text-sm t  flex gap-1'>Existense <Image src="/cc.svg" className='hover:opacity-70' alt="Existense copyright" width={12} height={12}/> 2025-2026</p>
     </section>

    </footer>
  )
}
