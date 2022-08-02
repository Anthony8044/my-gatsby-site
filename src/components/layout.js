import * as React from 'react'
import { Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
    return (
        <div className='flex'>
            <title>{pageTitle}</title>
            <div className='w-16'>
                <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col 
                bg-gray-900 text-white shadow-lg'>
                    <i><Link to="/">Home</Link></i>
                    <i><Link to="/about">About</Link></i>
                </div>
            </div>

            <main>
                <div className='text-5xl text-purple-800'>{pageTitle}</div>
                {children}
            </main>
        </div>
    )
}

export default Layout