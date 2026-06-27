import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="flex items-center  justify-between bg-blue-900 py-4 px-8">
            <h2 className="text-2xl font-bold">Wow-city</h2>
            <div className="flex gap-10">
                <Link className="text-lg font-medium" to='/'>Home</Link>
                <Link className="text-lg font-medium" to='/about'>About</Link>
                <Link className="text-lg font-medium" to='/product'>Product</Link>
                <Link className="text-lg font-medium" to='/courses '>Courses</Link>
            </div>
        </div>
    )
}

export default Navbar