import React from 'react'
import { useState } from 'react';
const App = () => {
  const [num, setNum] = useState(10)
  const batchUpdate = () =>{
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
  }
  return (
    <div>
      <button onClick={batchUpdate}>Update in batch</button>
      <h1>{num}</h1>
    </div>
  )
}

export default App


// import React from 'react'


// const App = () => {
//   // let a=20;

//   // const b=30;

//   let [a, setA] = useState(0)
//   function decCount() {
//     setA(--a);
//   }
//   //object wala 

//   // const [num, setNum] = useState({ user: "Rahul", age: 20 })
//   // const btnClicked = () => {
//   //   console.log(num.user, num.age)
//   //   const newNum = {...num}; //destructure not by reference just by copying value   {} used because it was an object
//   //   newNum.user="Aman"
//   //   newNum.age = "23"
//   //   setNum(newNum)
//   //   console.log(num.user, num.age)
//   // }

//   //for array


//   // const [num, setNum] = useState([10,50,86,95,44])
//   // const btnClicked2 = () => {
//   //   console.log(num.user, num.age)
//   //   const newNum = [...num]
//   //   newNum.push(99)
//   //   console.log(newNum)
//   //   setNum(newNum)
//   // }0

//     const [num, setNum] = useState({ user: "Rahul", age: 20 })
//   const btnClicked2 = () => {
//     setNum(prev=>({...prev,age:50}))

//   }

//   return (
//     <div>
//       <h1>Value of a {a}</h1>
//       <button onClick={
//         () => {
//           setA(a + 1); //assync fnction
//           console.log(a)  //ve same value then react will not rerender it 
//         }
//       }>IncreseCount</button>
//       <h1>Value of a {a}</h1>
//       <button onClick={decCount}>`Decrease count ${a}`</button>


//       {/* <button onClick={btnClicked}>Click Object</button> */}
//       {console.log(num.user, num.age)}
//       <button onClick={btnClicked2}>Click Object new </button>
//       <h1>{num.user}</h1>

//     </div>
//   )
// }

// export default App

