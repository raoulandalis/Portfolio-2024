import React from 'react'

const About = () => {

  return (
    <main className='w-full min-h-screen flex justify-center items-center bg-blue-100'>
      <div className="max-w-4xl mx-auto mt-40 my-36">
        <h1 className='text-5xl flex justify-center mb-14'>Exploring My</h1>
        <section className='flex flex-col md:flex-row justify-around md:justify-between mb-8 md:mb-36 animate-slideUp'>
          <article className='flex flex-col md:flex-row gap-8 md:gap-36 items-center md:items-start'>
            <h2 className='text-4xl flex items-center gap-2'>Past
              <div>⬅️</div>
            </h2>
            <p className="max-w-md">Before diving into the world of coding, I actually had a different path—I started out in healthcare. After earning my bachelor's at the University of Florida, I spent some time as an EMT, where I learned the importance of quick thinking and problem-solving under pressure.</p>
          </article>
        </section>
        <section className='flex flex-col md:flex-row justify-around md:justify-between mb-8 md:mb-36 animate-slideUp'>
          <article className='flex flex-col md:flex-row gap-8 md:gap-36 items-center md:items-start'>
            <h2 className='text-4xl flex items-center gap-2 md:block sm:block lg:hidden'>Present 🎉
            </h2>
            <p className="max-w-md">However, I felt a calling towards something different. I discovered my love for creating and building, and that's what brought me to where I am now. I'm currently immersed in a full stack bootcamp, where I'm combining my previous experiences with my newfound passion for coding. It's been an exciting journey of discovery and growth!</p>
            <h2 className='text-4xl flex items-center gap-2 hidden lg:block'>Present 🎉
            </h2>
          </article>
        </section>
        <section className='flex flex-col md:flex-row justify-around animate-slideUp'>
          <article className='flex flex-col md:flex-row gap-8 md:gap-36 items-center md:items-start'>
            <h2 className='text-4xl flex items-center gap-2'>Future
              <div>➡️</div>
            </h2>
            <p className="max-w-md">As I look ahead, I'm eager to make my mark in the tech world. I want to continue honing my skills, pushing myself to become an even stronger developer. But most importantly, I'm excited to keep learning and exploring new possibilities, because in this field, there's always something new to discover!</p>
          </article>
        </section>
      </div>
    </main>
  )
}




export default About
