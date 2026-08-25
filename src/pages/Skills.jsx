import React from 'react'
import { skillGroups } from '../content/skills'

const Skills = () => {
    return (
        <div>
            <h1 className='text-5xl flex justify-center mb-16 text-blue-500'>Skills</h1>

            {skillGroups.map((group, index) => (
                <section key={group.id} className='cursor-pointer animate-slideUp'>
                    <h2 className={`text-3xl text-blue-500${index > 0 ? ' mt-10' : ''}`}>{group.label}</h2>
                    <div className='flex gap-5'>
                        {group.items.map((item) => (
                            <p key={item} className='text-xl mt-4 border border-blue-500 p-2 hover:shadow-md text-white'>{item}</p>
                        ))}
                    </div>
                </section>
            ))}
        </div>
    )
}

export default Skills
