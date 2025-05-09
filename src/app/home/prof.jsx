import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Prof() {
  return (
    <div className='min-h-[77vh] flex items-center bg-[#0a1f26] text-white px-4 sm:px-6 lg:px-8'>
      <div className='max-w-7xl mx-auto w-full flex flex-col lg:flex-row justify-between items-center gap-8 py-12'>
        <div className='w-full lg:w-1/2 space-y-5 md:space-y-6 order-2 lg:order-1'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight'>
            Hi. I am <span className='text-[#fea55f]'>Vahid Solimani</span>
          </h1>
          
          <h2 className='text-xl sm:text-2xl md:text-3xl text-[#607B96] font-mono lowercase tracking-wider'>
            frontend_developer
          </h2>
          
          <div className='space-y-3 text-base sm:text-lg md:text-xl leading-relaxed'>
            <p className='opacity-90'>Are you ready to see some web wizardry?</p>
            <p className='opacity-80'>Scroll down and let me take you on a tour of my craft!</p>
          </div>
          
          <Link href={'/projects'} className=' px-6 py-2.5  my-10 inline-block sm:px-8 sm:py-3 bg-[#fea55f] text-[#0a1f26] rounded-lg font-medium hover:bg-[#ffb775] transition-colors duration-300 text-sm sm:text-base shadow-[0_4px_14px_rgba(254,165,95,0.3)] hover:shadow-[0_6px_20px_rgba(254,165,95,0.4)]'>
            View My Projects
          </Link>
        </div>
        
        <div className='w-full lg:w-1/2 flex justify-center order-1 lg:order-2 mb-8 lg:mb-0'>
          <div className='
            relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 
            rounded-full border-4 border-[#fea55f] overflow-hidden 
            shadow-[0_0_15px_rgba(254,165,95,0.5)]
            hover:shadow-[0_0_30px_rgba(254,165,95,0.7)]
            transition-shadow duration-500
            group
          '>
            <Image
              src="/img2.png"
              alt="Vahid Solimani"
              width={320}
              height={320}
              className='
                object-cover object-center w-full h-full 
                transition-transform duration-500 
                group-hover:scale-110  cursor-zoom-in
              '
              priority
            />
            <div className='
              absolute inset-0 rounded-full 
              shadow-[inset_0_0_20px_rgba(254,165,95,0.3)]
              group-hover:shadow-[inset_0_0_30px_rgba(254,165,95,0.5)]
              transition-shadow duration-500
              pointer-events-none
            '></div>
          </div>
        </div>
      </div>
    </div>
  )
}