import React from 'react'
import { skillGroups } from '../content/skills'

const Skills = () => {
  return (
    <div className='mt-24'>
      <h2 className='page-title mb-12 text-center'>Skills</h2>
      {skillGroups.map((group) => (
        <section key={group.id} className='mb-10 last:mb-0'>
          <h3 className='label-kicker mb-4'>{group.label}</h3>
          <ul className='flex flex-wrap gap-2'>
            {group.items.map((item) => (
              <li
                key={item}
                className='rounded-[2px] border border-steel bg-ink-elevated px-3 py-1.5 text-sm text-mist'
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

export default Skills
