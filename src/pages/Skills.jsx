import React from 'react'

const Skills = () => {
    return (
        <div>
            <h1 className='text-5xl flex justify-center mb-16'>Skills</h1>

            <section className='cursor-pointer animate-slideUp'>
                <h2 className='text-3xl'>Languages</h2>
                <div className='flex gap-5'>
                    <p className='text-xl mt-4 border border-blue-500 p-2 hover:shadow-md'>JavaScript</p>
                    <p className='text-xl mt-4 border border-blue-500 p-2 hover:shadow-md'>Python</p>
                </div>
            </section>

            <section className='cursor-pointer animate-slideUp'>
                <h2 className='text-3xl mt-10'>Front End</h2>
                <div className='flex gap-5'>
                    <p className='text-xl mt-4 border border-blue-500 p-2 hover:shadow-md'>React</p>
                    <p className='text-xl mt-4 border border-blue-500 p-2 hover:shadow-md'>Next.js</p>
                    <p className='text-xl mt-4 border border-blue-500 p-2 hover:shadow-md'>Redux</p>
                    <p className='text-xl mt-4 border border-blue-500 p-2 hover:shadow-md'>HTML/CSS</p>
                    <p className='text-xl mt-4 border border-blue-500 p-2 hover:shadow-md'>TailWindCSS</p>
                </div>
            </section>

            <section className='cursor-pointer animate-slideUp'>
                <h2 className='text-3xl mt-10'>Back End</h2>
                <div className='flex gap-5'>
                    <p className='text-xl mt-4 border border-blue-500 p-2 hover:shadow-md'>Node.js</p>
                    <p className='text-xl mt-4 border border-blue-500 p-2 hover:shadow-md'>Express</p>
                    <p className='text-xl mt-4 border border-blue-500 p-2 hover:shadow-md'>Flask</p>
                    <p className='text-xl mt-4 border border-blue-500 p-2 hover:shadow-md'>SQL</p>
                    <p className='text-xl mt-4 border border-blue-500 p-2 hover:shadow-md'>PostgreSQL</p>
                </div>
            </section>
        </div>
    )
}

export default Skills
