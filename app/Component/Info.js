import React from 'react'

const Info = () => {
    return (
        <>
            <div className='flex mx-28 my-24'>
                <div className='w-1/2'>
                    <h1 className='text-7xl font-bold mb-7'>YOUR FEET DESERVE<br />THE BEST</h1>
                    <p className='text-lg mb-6'>Step into a world of unparalleled comfort and style with our latest shoe collection. From supportive arches to cushioned insoles, our shoes are meticulously engineered to cradle your feet in luxury. You can trust that you're giving your feet the very best, no matter where your day takes you. It's time to prioritize your comfort and elevate your style.</p>
                    <button className=' bg-red-600 py-3 px-4 mr-4 font-normal border border-black hover:bg-gray-500 hover:text-white'>Shop Now</button>
                    <button className='py-3 px-4 border border-black'>Category</button>
                </div>
                <div className='w-1/2 flex'>
                    <img className='self-center' src="/Images/shoes.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Info