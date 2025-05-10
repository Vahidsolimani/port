"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const toggleMenu = () => {
    setIsAnimating(true)
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsAnimating(true)
    setIsOpen(false)
  }

  return (
    <header className='bg-[#0a1f26] border-b border-blue-600 rounded sticky top-0 z-50'>
      <div className='max-w-6xl mx-auto p-4'>
        <div className='flex justify-between items-center'>
          {/* Logo/Name */}
          <div className='bg-gradient-to-r from-[#2b5876] to-[#fea55f] bg-clip-text'>
            <p className='text-transparent font-medium text-lg'>@vahid solimani</p>
          </div>

          {/* Desktop Navigation */}
          <nav className='hidden md:flex items-center space-x-8'>
            <div className='flex *:text-[#fea55f] space-x-6'>
              <Link href={'/'} className='hover:text-white capitalize transition-colors duration-300'>home_</Link>
              <Link href={'/about'} className='hover:text-white capitalize transition-colors duration-300'>about_me_</Link>
              <Link href={'/projects'} className='hover:text-white capitalize transition-colors duration-300'>projects_</Link>
              <Link href={'/contact'} className='hover:text-white capitalize transition-colors duration-300'>contact-me_</Link>
            </div>
            <Link 
              href={'/resume'} 
              className='
                text-[#fea55f] 
                border border-[#fea55f] 
                px-4 py-2 rounded 
                hover:bg-[#fea55f] hover:text-[#0a1f26] 
                transition-colors duration-300
                hover:shadow-lg hover:shadow-[#fea55f]/30
                ml-4
              '
            >
              View resume
            </Link>
          </nav>

          <button 
            className='md:hidden text-[#fea55f] cursor-pointer focus:outline-none z-50'
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>

          <div 
            className={`
              fixed inset-0 bg-[#0a1f26]/90 backdrop-blur-sm z-40
              transition-opacity duration-500 ease-in-out
              ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
            `}
            onClick={closeMenu}
          />

          {/* Mobile Menu Sidebar */}
          <div 
            className={`
              fixed top-0 right-0 h-full w-64 bg-[#0a1f26] 
              border-l border-[#fea55f]/30 shadow-2xl z-40
              transform transition-transform duration-500 ease-in-out
              ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
            onTransitionEnd={() => setIsAnimating(false)}
          >
            <div className='h-full flex flex-col items-end justify-start pt-24 pr-8 space-y-6'>
              <Link 
                href={'/'} 
                className='text-[#fea55f] hover:text-white text-xl capitalize transition-colors duration-300 w-full text-right'
                onClick={closeMenu}
              >
                home_
              </Link>
              <Link 
                href={'/about'} 
                className='text-[#fea55f] hover:text-white text-xl capitalize transition-colors duration-300 w-full text-right'
                onClick={closeMenu}
              >
                about_me_
              </Link>
              <Link 
                href={'/projects'} 
                className='text-[#fea55f] hover:text-white text-xl capitalize transition-colors duration-300 w-full text-right'
                onClick={closeMenu}
              >
                projects_
              </Link>
              <Link 
                href={'contact'} 
                className='text-[#fea55f] hover:text-white text-xl capitalize transition-colors duration-300 w-full text-right'
                onClick={closeMenu}
              >
                contact-me_
              </Link>
              
              <Link 
                href={'/resume'} 
                className='
                  text-[#fea55f] 
                  border border-[#fea55f] 
                  px-6 py-3 rounded 
                  hover:bg-[#fea55f] hover:text-[#0a1f26] 
                  transition-colors duration-300
                  hover:shadow-lg hover:shadow-[#fea55f]/30
                  text-lg
                  mt-8
                  mx-auto
                  w-full text-center
                  block
                '
                onClick={closeMenu}
              >
                View resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}