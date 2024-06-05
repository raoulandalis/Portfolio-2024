import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <main className='w-full min-h-screen flex justify-center bg-blue-100'>
      <div className="max-w-4xl mx-auto my-36 justify-center">
        <h1 className='text-5xl flex justify-center mb-14'>Want to connect?</h1>

        <div className='flex flex-col items-center gap-6 text-2xl animate-slideUp'>
          <section>Email</section>
          <section>
            <Link to='https://www.linkedin.com/in/raoul-andalis/' target='_blank' className='hover:text-blue-500'>LinkedIn</Link>
          </section>
          <section>
            <Link to='https://github.com/raoulandalis' target='_blank' className='hover:text-blue-500'>GitHub</Link>
          </section>
          <section>
            <Link to='https://wellfound.com/u/raoul-andalis' target='_blank' className='hover:text-blue-500'>Wellfound</Link>
          </section>
          <section>
            <Link to='https://docs.google.com/document/d/1dWfIp819j9MZ5EEpuV2iVjnFB1eBjZlgzOOCOKkmht0/edit?usp=sharing' target='_blank' className='hover:text-blue-500'>Resume</Link>
          </section>
        </div>

      </div>
    </main>
  )
}

export default Contact
