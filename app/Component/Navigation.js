import React from 'react'
const Navigation = () => {
    return (
        <>
            <nav className='flex justify-between self-center mx-28'>
                <div className='w-24 flex self-center m-6'>
                    <a href=""><img src='/Images/brand-logo.png'></img></a></div>
                <ul className='flex self-center'>
                    <li className='self-center m-6 hover:text-red-600'>
                        <a href=''>Menu</a>
                    </li>
                    <li className='self-center m-6 hover:text-red-600'>
                        <a href=''>Location</a>
                    </li>
                    <li className='self-center m-6 hover:text-red-600'>
                        <a href=''>About</a>
                    </li>
                    <li className='self-center m-6 hover:text-red-600'>
                        <a href=''>Contact</a>
                    </li>
                </ul>
                <button className='bg-red-600 h-10 w-12 self-center font-medium text-white m-6' style={{ width: "100px" }}>Login</button>
            </nav>
        </>
    )
}

export default Navigation