'use client'
import { useState } from 'react'
import { FiCopy } from 'react-icons/fi'

export default function CodeFormPair() {
  const [isCopied, setIsCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const codeSnippet = `const button = document.getElementById('sendBtn');

const message = {
  name: '',
  email: '',
  message: ''
};

button.addEventListener('click', () => {
  form.send(message);
});`

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet)
      .then(() => {
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="flex flex-col items-center min-h-[80vh] container mx-auto  p-6 bg-[#0a1f26] rounded-xl border border-[#1e2d3d]">
  

      <div className=" w-full pt-16 mx-auto lg:w-1/2">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-[#607B96] mb-1">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full bg-[#1e2d3d] border border-[#2b3b4d] rounded-lg md:p-3 text-white focus:border-[#fea55f] focus:outline-none"
              required
            />
          </div>
          
          <div>
            <label className="block text-[#607B96] mb-1">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full bg-[#1e2d3d] border border-[#2b3b4d] rounded-lg md:p-3 text-white focus:border-[#fea55f] focus:outline-none"
              required
            />
          </div>
          
          <div>
            <label className="block text-[#607B96] mb-1">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              rows="4"
              className="w-full bg-[#1e2d3d] border border-[#2b3b4d] rounded-lg md:p-3 text-white focus:border-[#fea55f] focus:outline-none"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-[#fea55f] text-[#0a1f26] font-medium py-2 md:px-6 rounded-lg hover:bg-[#ffb775] transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}