import React from 'react'
const user = "Rahul"
const age = 89;
const card = () => {
    return (
        <div>
            <h1>Rahul</h1>
            <div className="card">
                <h1>Helo Guys I am {user}</h1>
                <h2>I am {age} year old</h2>
            </div>
        </div>
    )
}

export default card