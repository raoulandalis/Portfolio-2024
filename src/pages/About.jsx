import React from 'react'

const About = () => {
  return (
    <main className='w-full h-screen relative'>
      <section className='flex flex-row justify-around m-36 bg-blue-50'>
        <article className='flex gap-36'>
          <h2 className='text-4xl flex items-center'>Past</h2>
          <p>Before diving into the world of coding, I actually had a different path—I started out in healthcare. After earning my bachelor's at the University of Florida, I spent some time as an EMT, where I learned the importance of quick thinking and problem-solving under pressure.</p>
        </article>
      </section>
      <section className='flex flex-row justify-around m-36 bg-red-50'>
        <article className='flex gap-36'>
          <p>However, I felt a calling towards something different. I discovered my love for creating and building, and that's what brought me to where I am now. I'm currently immersed in a full stack bootcamp, where I'm combining my previous experiences with my newfound passion for coding. It's been an exciting journey of discovery and growth!</p>
          <h2 className='text-4xl flex items-center'>Present</h2>
        </article>
      </section>
      <section className='flex flex-row justify-around m-36 bg-green-50'>
        <article className='flex gap-36'>
          <h2 className='text-4xl flex items-center'>Future</h2>
          <p>As I look ahead, I'm eager to make my mark in the tech world. I want to continue honing my skills, pushing myself to become an even stronger developer. But most importantly, I'm excited to keep learning and exploring new possibilities, because in this field, there's always something new to discover!</p>
        </article>
      </section>
    </main>
  )
}

export default About
