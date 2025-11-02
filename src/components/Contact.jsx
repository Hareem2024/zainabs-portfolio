import { useState } from 'react'
import { Mail, MapPin, Send, Linkedin } from 'lucide-react'
import emailjs from '@emailjs/browser'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // EmailJS configuration
    const serviceId = 'YOUR_SERVICE_ID' // You'll get this from EmailJS
    const templateId = 'YOUR_TEMPLATE_ID' // You'll get this from EmailJS
    const publicKey = 'YOUR_PUBLIC_KEY' // You'll get this from EmailJS

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'zainabakram115@gmail.com'
        },
        publicKey
      )
      
      setSubmitStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again or email me directly.' })
    } finally {
      setIsSubmitting(false)
    }
  }
  const contactInfo = [
    { icon: Mail, text: 'zainabakram115@gmail.com', link: 'mailto:zainabakram115@gmail.com' },
    { icon: MapPin, text: 'Islamabad, Pakistan', link: '#' },
    { icon: Linkedin, text: 'LinkedIn Profile', link: 'https://www.linkedin.com/in/zainab-akram-1151a7283' },
  ]

  const socialLinks = [
    { icon: Linkedin, link: 'https://www.linkedin.com/in/zainab-akram-1151a7283', label: 'LinkedIn' },
  ]

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-3"></div>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="glass-card h-full max-w-md md:max-w-none mx-auto md:mx-0">
            <h3 className="text-xl md:text-2xl font-semibold mb-5 text-center">Contact Information</h3>
            <div className="space-y-3">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 bg-blue-50/80 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 p-4 rounded-2xl hover:scale-105 transition-transform duration-300 group"
                >
                  <div className="p-3 bg-blue-200 dark:bg-blue-800 rounded-lg group-hover:bg-blue-500 dark:group-hover:bg-blue-400 transition-colors duration-300">
                    <info.icon className="w-5 h-5 text-blue-700 dark:text-blue-300 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-slate-800 dark:text-slate-200 font-medium">{info.text}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="hidden md:block glass-card h-full">
            <h3 className="text-xl md:text-2xl font-semibold mb-5 text-center">Send a Message</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-slate-800 dark:text-slate-200"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 text-slate-800 dark:text-slate-200"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 resize-none text-slate-800 dark:text-slate-200"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              {submitStatus && (
                <div className={`p-3 rounded-lg text-sm ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-500/20 text-green-700 dark:text-green-400' 
                    : 'bg-red-500/20 text-red-700 dark:text-red-400'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:from-blue-700 hover:to-purple-700 hover:scale-105'
                }`}
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center py-6">
          <p className="text-slate-600 dark:text-slate-400">
            Built and designed by Zainab Akram.
            <br />
            All rights reserved. © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Contact
