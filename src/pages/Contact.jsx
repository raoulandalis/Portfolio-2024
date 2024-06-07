import React from 'react';

const Contact = () => {
  return (
    <main className='w-full min-h-screen flex justify-center bg-gray-800'>
      <div className="max-w-4xl mx-auto my-36 justify-center">
        <h1 className='text-5xl flex justify-center mb-14 text-blue-500'>Want to connect?</h1>

        <div className='flex flex-col items-center gap-6 text-2xl animate-slideUp text-white'>
          <section>
            <a href="mailto:raoulandalis@gmail.com" className="hover:text-blue-500">Email</a>
          </section>
          <section className='flex gap-2'>

            <img src="https://devicon-website.vercel.app/api/linkedin/original.svg" className='h-8'></img>

            <a href='https://www.linkedin.com/in/raoul-andalis/' target='_blank' rel='noopener noreferrer' className='hover:text-blue-500'>LinkedIn</a>
          </section>
          <section className='flex gap-2'>


            <img src="https://devicon-website.vercel.app/api/github/original.svg?color=%232C2CA3" className='h-8'></img>


            <a href='https://github.com/raoulandalis' target='_blank' rel='noopener noreferrer' className='hover:text-blue-500'>GitHub</a>
          </section>
          <section>
            <a href='https://wellfound.com/u/raoul-andalis' target='_blank' rel='noopener noreferrer' className='hover:text-blue-500'>Wellfound</a>
          </section>
          <section>
            <a href='https://docs.google.com/document/d/1dWfIp819j9MZ5EEpuV2iVjnFB1eBjZlgzOOCOKkmht0/edit?usp=sharing' target='_blank' rel='noopener noreferrer' className='hover:text-blue-500'>Resume</a>
          </section>
        </div>

      </div>
    </main>
  );
};

export default Contact;
