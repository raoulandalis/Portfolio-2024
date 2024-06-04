import React from 'react'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <main className='w-full min-h-screen flex justify-center items-center'>
      <div className="max-w-4xl mx-auto mt-40 my-36">
        <h1 className='text-5xl flex justify-center mb-14'>Dive Into...</h1>
        <section className='flex flex-col md:flex-row justify-around md:justify-between mb-8 md:mb-36'>
          <article className='flex flex-col md:flex-row gap-8 md:gap-36 items-center md:items-start'>
            <div>
              <div className='flex flex-row gap-3'>
                <h2 className='text-4xl flex items-center italic'>FearFace
                </h2>
                <div className='flex items-end'>
                  <Link to='https://fearface.onrender.com/' target='_blank' className="hover:text-blue-500">
                    live
                  </Link>
                </div>
                <div className='flex items-end'>
                  <Link to='https://github.com/jgodfrey324/FearFace' target='_blank' className="hover:text-blue-500">
                    github
                  </Link>
                </div>
              </div>
              <p className="max-w-md mt-2">A team developed, horror-themed social app where users can browse and post comments, interact with others, and explore a haunted marketplace featuring witty horror movie references. Horror fans will enjoy this playful and engaging community.</p>
            </div>
            <img
              src={'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHFpOHc2OGRibGpyYjM4MW9jdXd1YzVoeHBtdW81ZHpvazBxYXBwOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/715gr12wchOLl7BO90/giphy.gif'}
              className='-m-10'
            ></img>
          </article>
        </section>

        <section className='flex flex-col md:flex-row justify-around md:justify-between mb-8 md:mb-36'>
          <article className='flex flex-col md:flex-row gap-8 md:gap-36 items-center md:items-start'>
            <div>
              <div className='flex flex-row gap-3'>
                <h2 className='text-4xl flex items-center italic'>FearFace
                </h2>
                <div className='flex items-end'>
                  <Link to='https://fearface.onrender.com/' target='_blank' className="hover:text-blue-500">
                    live
                  </Link>
                </div>
                <div className='flex items-end'>
                  <Link to='https://github.com/jgodfrey324/FearFace' target='_blank' className="hover:text-blue-500">
                    github
                  </Link>
                </div>
              </div>
              <p className="max-w-md mt-2">A team developed, horror-themed social app where users can browse and post comments, interact with others, and explore a haunted marketplace featuring witty horror movie references. Horror fans will enjoy this playful and engaging community.</p>
            </div>
            <img
              src={'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHFpOHc2OGRibGpyYjM4MW9jdXd1YzVoeHBtdW81ZHpvazBxYXBwOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/715gr12wchOLl7BO90/giphy.gif'}
              className='-m-10'
            ></img>
          </article>
        </section>

        <section className='flex flex-col md:flex-row justify-around md:justify-between mb-8 md:mb-36'>
          <article className='flex flex-col md:flex-row gap-8 md:gap-36 items-center md:items-start'>
            <div>
              <div className='flex flex-row gap-3'>
                <h2 className='text-4xl flex items-center italic'>FearFace
                </h2>
                <div className='flex items-end'>
                  <Link to='https://fearface.onrender.com/' target='_blank' className="hover:text-blue-500">
                    live
                  </Link>
                </div>
                <div className='flex items-end'>
                  <Link to='https://github.com/jgodfrey324/FearFace' target='_blank' className="hover:text-blue-500">
                    github
                  </Link>
                </div>
              </div>
              <p className="max-w-md mt-2">A team developed, horror-themed social app where users can browse and post comments, interact with others, and explore a haunted marketplace featuring witty horror movie references. Horror fans will enjoy this playful and engaging community.</p>
            </div>
            <img
              src={'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHFpOHc2OGRibGpyYjM4MW9jdXd1YzVoeHBtdW81ZHpvazBxYXBwOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/715gr12wchOLl7BO90/giphy.gif'}
              className='-m-10'
            ></img>
          </article>
        </section>
      </div>
    </main>
  )
}

export default Projects


// < section className = 'flex flex-col md:flex-row justify-around md:justify-between mb-8 md:mb-36' >
//   <article className='flex flex-col md:flex-row gap-8 md:gap-36 items-center md:items-start'>
//     <div>
//       <h2 className='text-4xl flex items-center gap-2 md:block sm:block lg:hidden'><Link to='https://flix-dyz2.onrender.com/' target='_blank'>Flix 🎥</Link>
//       </h2>
//       {/* <p className="max-w-md">Lorem Ipsum</p> */}
//     </div>
//     <img
//       src={'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHFpOHc2OGRibGpyYjM4MW9jdXd1YzVoeHBtdW81ZHpvazBxYXBwOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/715gr12wchOLl7BO90/giphy.gif'}
//       className='-m-10'
//     ></img>
//     <h2 className='text-4xl flex items-center gap-2 hidden lg:block'><Link to='https://flix-dyz2.onrender.com/' target='_blank'>Flix 🎥</Link>
//     </h2>
//   </article>
//       </section >
// <section className='flex flex-col md:flex-row justify-around'>
//   <article className='flex flex-col md:flex-row gap-8 md:gap-36 items-center md:items-start'>
//     <h2 className='text-4xl flex items-center gap-2'><Link to='https://raoul-airbnb.onrender.com/' target='_blank'>ValBnb</Link>
//       <div>🎮</div>
//     </h2>
//     {/* <p className="max-w-md">Lorem Ipsum</p> */}
//     <img
//       src={'https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHFpOHc2OGRibGpyYjM4MW9jdXd1YzVoeHBtdW81ZHpvazBxYXBwOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/715gr12wchOLl7BO90/giphy.gif'}
//       className='-m-10'
//     ></img>
//   </article>
// </section>
