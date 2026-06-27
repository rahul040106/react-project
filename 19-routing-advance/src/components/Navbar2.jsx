import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
const Navbar2 = () => {
    let navigate = useNavigate()
    const btnClicked = () => {
        navigate("/")
    }
    return (
        <div className="py-2 px-5 bg-amber-800">

            <button onClick={() => {
                btnClicked()
            }} className='font-medium bg-emerald-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Back To Home</button>
            <button onClick={() => {
                navigate(-1)
            }} className='font-medium bg-emerald-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Back</button>
            <button onClick={() => {
                navigate(+1)
            }} className='font-medium bg-emerald-800 px-5 py-2 rounded m-2 cursor-pointer active:scale-95'>Next</button>
        </div>
    )
}

export default Navbar2