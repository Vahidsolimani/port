"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: "shopping digikala",
    description: "  A feature-rich e-commerce platform inspired by Digikala, built with modern web technologies to deliver a seamless online shopping experience  and fully dynamic",
    features: [
      "Interactive shopping cart with persistent storage",
    "Secure payment gateway integration",
    "Product reviews & rating system",
    "Responsive design optimized for all devices"
    ],
    tech: ["Next.js", "Tailwind", "zustand","swiperjs"],
    image: "/shoop.png",
    demo: "https://digikala-home.vercel.app/"
  },
  {
    title: "panel_admin",
    description: "Dark/Light Mode: For better admin usability Responsive Design: Works on desktop & tablets.",
    features: ["Cart Dashboard Overview", "orders","profile","Login"],
    tech: ["React", "Next.js", "Mui"],
    image: "/admin.png",
    demo: "https://paneladmin-sigma.vercel.app/"
  },
  {
    title: "parallax",
    description: "An interesting project from Parallax.",
    features: ["scroll"],
    tech: ["Tailwind", "Html&css", "Js"],
    image: "/parallax.png",
    demo: "https://vahidsolimani.github.io/parallax/"
  },
  {
    title: "durian",
    description: "An interesting project from js.",
    features: ["Responsive"],
    tech: ["Tailwind", "Html&css", "Js","Responsive"],
    image: "/dorin.png",
    demo: "https://vahidsolimani.github.io/DURIAN/"
  },
  {
    title: " music player ",
    description: " **** You need to use a VPN to use it. **** ",
    features: ["Responsive"],
    tech: ["Tailwind", "Html&css", "Js","Responsive"],
    image: "/music_player.jpg",
    demo: "https://vahidsolimani.github.io/mix-player/"
  },
  {
    title: "parallax_web",
    description: "An interesting project from Parallax.",
    features: ["scroll"],
    tech: ["Tailwind", "Html&css", "Js","Responsive"],
    image: "/parallax2.png",
    demo: "https://vahidsolimani.github.io/parallax2/"
  },
  {
    title: "Responsive",
    description: "An interesting project from Responsive .",
    features: ["Responsive"],
    tech: ["Tailwind", "Html&css","Responsive"],
    image: "/web.png",
    demo: "https://vahidsolimani.github.io/pageflows/"
  },
  {
    title: "Responsive",
    description: "An interesting project from Responsive .",
    features: ["Responsive"],
    tech: ["Next.js","Tailwind", "Html&css","Responsive"],
    image: "/tapsi.png",
    demo: "https://tapsi-virid.vercel.app/"
  },
]
export default function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(4)
  
  return (
    <section className="bg-[#0a1f26] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#fea55f] mb-4 text-center">My Projects</h2>
        <p className="text-[#607B96] text-center mb-12 max-w-2xl mx-auto">
          Here are {projects.length}+ projects I've built, each solving unique challenges
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div 
              key={index}
              className="border border-[#1e2d3d] rounded-xl overflow-hidden hover:border-[#fea55f]/40 transition-all duration-500 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f26] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <div className="flex space-x-3">
                    <Link href={project.demo} className="p-2 bg-[#1e2d3d] rounded-full hover:bg-[#fea55f] transition-colors">
                      <FiExternalLink className="text-white" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-[#607B96] mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm text-[#fea55f] mb-2">KEY FEATURES</h4>
                  <ul className="grid grid-cols-2 gap-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-[#607B96]">
                        <span className="text-[#fea55f] mr-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-[#1e2d3d] rounded-full text-xs text-[#fea55f]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Link 
                    href={project.demo} 
                    className="text-sm text-[#fea55f] border border-[#fea55f] px-4 py-1 rounded hover:bg-[#fea55f] hover:text-[#0a1f26] transition-colors"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {visibleProjects < projects.length && (
          <div className="text-center mt-12">
            <button 
              onClick={() => setVisibleProjects(prev => prev + 4)}
              className="text-[#fea55f] border border-[#fea55f] px-6 py-2 rounded hover:bg-[#fea55f] hover:text-[#0a1f26] transition-colors"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  )
}