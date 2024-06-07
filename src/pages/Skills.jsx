import React from 'react'

const Skills = () => {
    return (
        <div>
            <h1 className='text-5xl flex justify-center mb-16 text-blue-500'>Skills</h1>

            <section className='cursor-pointer animate-slideUp'>
                <h2 className='text-3xl text-blue-500'>Languages</h2>
                <div className='flex gap-5'>
                    <p className='text-xl mt-4 border border-blue-500 p-2 hover:shadow-md text-white'>JavaScript</p>
                    <p className='text-xl mt-4 border border-blue-500 p-2 hover:shadow-md text-white'>Python</p>
                </div>
            </section>

            <section className='cursor-pointer animate-slideUp'>
                <h2 className='text-3xl mt-10 text-blue-500'>Front End</h2>
                <div className='flex gap-5'>
                    <p className='text-xl mt-4 border border-blue-500 p-2 hover:shadow-md text-white'>React</p>
                    <p className='text-xl mt-4 border border-blue-500 p-2 hover:shadow-md text-white'>Next.js</p>
                    <p className='text-xl mt-4 border border-blue-500 p-2 hover:shadow-md text-white'>Redux</p>
                    <p className='text-xl mt-4 border border-blue-500 p-2 hover:shadow-md text-white'>HTML/CSS</p>
                    <p className='text-xl mt-4 border border-blue-500 p-2 hover:shadow-md text-white'>TailWindCSS</p>
                </div>
            </section>

            <section className='cursor-pointer animate-slideUp'>
                <h2 className='text-3xl mt-10 text-blue-500'>Back End</h2>
                <div className='flex gap-5'>
                    <p className='text-xl mt-4 border border-blue-500 p-2 hover:shadow-md text-white'>Node.js</p>
                    <p className='text-xl mt-4 border border-blue-500 p-2 hover:shadow-md text-white'>Express</p>
                    <p className='text-xl mt-4 border border-blue-500 p-2 hover:shadow-md text-white'>Flask</p>
                    <p className='text-xl mt-4 border border-blue-500 p-2 hover:shadow-md text-white'>SQL</p>
                    <p className='text-xl mt-4 border border-blue-500 p-2 hover:shadow-md text-white'>PostgreSQL</p>
                </div>
            </section>
        </div>
    )
}

export default Skills
