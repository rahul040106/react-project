import './App.css'
import Card from "./components/card"


// const App = () => {
//   const user = "Rahul"
//   const age = 89;
//   return (
//     <div>

      // <h1>Rahul</h1>
      // <div className="card">
      //   <h1>Helo Guys I am {user}</h1>
      //   <h2>I am {age} year old</h2>
      // </div>
      // {/* {Card()} can also be written as below*/}
      // <Card />
      // {Card()}
//     </div>
//   )
// }

// export default App

import React from 'react'
import Navbar from './components/Navbar'


const App = () => {
  return (
    <div>
      <Navbar/>
      {Card()}
      <Navbar/>
    </div>
  )
}

export default App