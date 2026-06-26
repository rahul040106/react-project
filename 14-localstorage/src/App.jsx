// import React from 'react'

// const App = () => {
// //  localStorage.setItem("user", "Rahul")
// const user = localStorage.getItem("user") //from key to get the valu for respective key
// // localStorage.clear() //to clear whole local storage clear
// localStorage.setItem("Age", "18") // to create new key value pair
// localStorage.removItem("user")  //to remove a particular key value pair by key

// const age =localStorage.getItem("Age")
// console.log(user, age)
//   return (
//     <div>App</div>
//   )
// }

// export default App







//to save array object or retrive them

import React from 'react'

const App = () => {

  const user = {
    userName:"Rahul",
    age:18,
    city:"Bhopal"
  }

  

  localStorage.setItem("user", JSON.stringify(user))  //value have to be passed in string form
  
  console.log(JSON.parse(localStorage.getItem("user")))
  return (
    <div>App</div>
  )
}

export default App