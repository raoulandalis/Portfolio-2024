import React from 'react';

const Contact = () => {
  return (
    <main className='w-full min-h-screen flex justify-center bg-gray-800'>
      <div className="max-w-4xl mx-auto my-36 justify-center">
        <h1 className='text-5xl flex justify-center mb-14 text-blue-500'>Want to connect?</h1>

        <div className='flex flex-col items-center gap-6 text-2xl animate-slideUp text-white'>

          <section className='flex gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 512 512"><path fill="#0981dc" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
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

          <section className='flex gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 448 512"><path fill="#74C0FC" d="M347.1 215.4c11.7-32.6 45.4-126.9 45.4-157.1 0-26.6-15.7-48.9-43.7-48.9-44.6 0-84.6 131.7-97.1 163.1C242 144 196.6 0 156.6 0c-31.1 0-45.7 22.9-45.7 51.7 0 35.3 34.2 126.8 46.6 162-6.3-2.3-13.1-4.3-20-4.3-23.4 0-48.3 29.1-48.3 52.6 0 8.9 4.9 21.4 8 29.7-36.9 10-51.1 34.6-51.1 71.7C46 435.6 114.4 512 210.6 512c118 0 191.4-88.6 191.4-202.9 0-43.1-6.9-82-54.9-93.7zM311.7 108c4-12.3 21.1-64.3 37.1-64.3 8.6 0 10.9 8.9 10.9 16 0 19.1-38.6 124.6-47.1 148l-34-6 33.1-93.7zM142.3 48.3c0-11.9 14.5-45.7 46.3 47.1l34.6 100.3c-15.6-1.3-27.7-3-35.4 1.4-10.9-28.8-45.5-119.7-45.5-148.8zM140 244c29.3 0 67.1 94.6 67.1 107.4 0 5.1-4.9 11.4-10.6 11.4-20.9 0-76.9-76.9-76.9-97.7 .1-7.7 12.7-21.1 20.4-21.1zm184.3 186.3c-29.1 32-66.3 48.6-109.7 48.6-59.4 0-106.3-32.6-128.9-88.3-17.1-43.4 3.8-68.3 20.6-68.3 11.4 0 54.3 60.3 54.3 73.1 0 4.9-7.7 8.3-11.7 8.3-16.1 0-22.4-15.5-51.1-51.4-29.7 29.7 20.5 86.9 58.3 86.9 26.1 0 43.1-24.2 38-42 3.7 0 8.3 .3 11.7-.6 1.1 27.1 9.1 59.4 41.7 61.7 0-.9 2-7.1 2-7.4 0-17.4-10.6-32.6-10.6-50.3 0-28.3 21.7-55.7 43.7-71.7 8-6 17.7-9.7 27.1-13.1 9.7-3.7 20-8 27.4-15.4-1.1-11.2-5.7-21.1-16.9-21.1-27.7 0-120.6 4-120.6-39.7 0-6.7 .1-13.1 17.4-13.1 32.3 0 114.3 8 138.3 29.1 18.1 16.1 24.3 113.2-31 174.7zm-98.6-126c9.7 3.1 19.7 4 29.7 6-7.4 5.4-14 12-20.3 19.1-2.8-8.5-6.2-16.8-9.4-25.1z" /></svg>
            <a href='https://wellfound.com/u/raoul-andalis' target='_blank' rel='noopener noreferrer' className='hover:text-blue-500'>Wellfound</a>
          </section>

          <section className='flex gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 384 512"><path fill="#5f819b" d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" /></svg>
            <a href='https://docs.google.com/document/d/1dWfIp819j9MZ5EEpuV2iVjnFB1eBjZlgzOOCOKkmht0/edit?usp=sharing' target='_blank' rel='noopener noreferrer' className='hover:text-blue-500'>Resume</a>
          </section>
        </div>

      </div>
    </main>
  );
};

export default Contact;
