import React from 'react'

export default function About() {
  return (
    <section className='bg-[#0a1f26] text-[#607B96] p-8 md:p-12 w-full'>
      <h3 className='text-[#fea55f] text-2xl md:text-3xl font-bold mb-6 group'>
        <span className='inline-block transition-all duration-300 group-hover:translate-x-2'>
          From Code to Coffee: About Me
        </span>
        <span className='block w-0 h-0.5 bg-[#fea55f] transition-all duration-500 group-hover:w-full mt-1'></span>
      </h3>
      <div className='space-y-6'>
        <p className='text-base md:text-lg leading-relaxed hover:text-white transition-colors duration-300'>
          Though I've been on this coding journey for less than a year, my passion for frontend development 
          has already transformed me into a dedicated craftsman, obsessed with creating clean, 
          intuitive interfaces that users love.
        </p>

        <p className='text-base md:text-lg leading-relaxed hover:text-white transition-colors duration-300'>
          What excites me most is the constant learning - each day brings new challenges and opportunities 
          to grow. I may be early in my career, but my enthusiasm and commitment to quality 
          make up for the years I haven't yet accumulated.
        </p>

        <p className='text-base md:text-lg leading-relaxed hover:text-white transition-colors duration-300'>
          If you're looking for fresh perspectives, creative solutions, or just want to connect 
          with someone who's genuinely passionate about web development, I'd love to chat!
        </p>
        <div className='mt-8'>
          <h4 className='text-[#fea55f] text-xl font-medium mb-4 group'>
            <span className='inline-block transition-all duration-300 group-hover:translate-x-2'>
              My current toolkit includes:
            </span>
          </h4>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-3 mb-6'>
            {['Next.js', 'React', 'SEO', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'].map((skill) => (
              <div 
                key={skill} 
                className='
                  bg-[#1e2d3d]/50 px-4 py-2 rounded-md
                  border border-transparent
                  hover:border-[#fea55f]/40 hover:bg-[#1e2d3d]/70
                  hover:shadow-[0_0_10px_rgba(254,165,95,0.2)]
                  transition-all duration-300
                  group
                '
              >
                <span className='text-white group-hover:text-[#fea55f] transition-colors duration-300'>
                  {skill}
                </span>
              </div>
            ))}
          </div>
          <h4 className='text-[#fea55f] text-lg font-medium mb-3 group'>
            <span className='inline-block transition-all duration-300 group-hover:translate-x-2'>
              Exploring and learning:
            </span>
          </h4>
          <div className='flex flex-wrap *:capitalize gap-2'>
            {['Git','github', 'Restful apis','Mui', 'react query', 'Sass','Bootstrap','zunstand'].map((skill) => (
              <div 
                key={skill} 
                className='
                  bg-[#1e2d3d]/30 px-3 py-1 rounded-full text-sm
                  border border-transparent
                  hover:border-[#fea55f]/30 hover:bg-[#1e2d3d]/50
                  transition-all duration-200
                  group
                '
              >
                <span className='group-hover:text-[#fea55f] transition-colors duration-300'>
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='
        mt-12 p-6 bg-[#1e2d3d]/40 rounded-lg border border-[#fea55f]/20
        hover:border-[#fea55f]/50 hover:bg-[#1e2d3d]/60
        hover:shadow-[0_0_15px_rgba(254,165,95,0.3)]
        transition-all duration-500
        group
      '>
        <p className='
          text-center text-lg italic
          group-hover:text-white transition-colors duration-300
        '>
          "Coffee, code, and conversation - let's make something great together!"
        </p>
        <div className='flex justify-center mt-3'>
          <div className='
            w-8 h-0.5 bg-[#fea55f]/40
            group-hover:w-16 group-hover:bg-[#fea55f]/80
            transition-all duration-500
          '></div>
        </div>
      </div>
    </section>
  )
}