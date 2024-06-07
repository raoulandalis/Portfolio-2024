import React from 'react'

const Arrow = () => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className='flex justify-center mt-20 cursor-pointer' onClick={scrollToTop}>
            <img
                src='https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdm9sbGN2M2tmd3BsemlkM2E0aW5sdWRjYW02OTlpbGR4bnlyZG0xdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/IdBiAh2duAjpglhihh/giphy.gif' className='h-16'>
            </img>
        </div>
    )
}

export default Arrow
