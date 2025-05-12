import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function PDFViewer() {
  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-gray-50 p-4'>
      <div className='max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden'>
        <figure className='relative w-full h-full flex justify-center p-8'>
          <Image
            src='/pdf.png'
            width={800}
            height={1000}
            alt='PDF document preview'
            className='object-contain border border-gray-200 rounded-lg'
            quality={100}
            priority
          />
          <figcaption className='absolute bottom-4 left-0 right-0 text-center text-sm text-gray-500 mt-2'>
          </figcaption>
        </figure>

        <div className='bg-gray-100 p-4 text-center border-t border-gray-200'>
          <button>
            <a
              href="/solimani.pdf"
              download="solimani.pdf"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-300"
            >
              Download PDF
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}