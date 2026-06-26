// import React, { useEffect, useState } from 'react'



// const App = () => {
//   const [num, setNum] = useState(0)
//   const [num2, setNum2] = useState(100)

//   useEffect(function () {
//     console.log("Use Effect Is Running")
//   }, [num2])      //passing dependecies like array noew it will run only once on change in state (this arry show the thing on which this useEffect is dependednt on )
//   //now it is depended on num2
//   //side stack me micro queue me 


//   return (
//     <div>
//       <h1>{num}</h1>
//       <h2>{num2}</h2>
//       <button onClick={() => {
//         setNum(num + 1)
//       }}
//         onDoubleClick={() => {
//           setNum2(num2 + 1)
//         }}
//       >click</button>
//     </div>
//   )
// }

// export default App


import React, { useEffect, useState } from 'react'

const App = () => {

  const [A, setA] = useState(0)
  const [B, setB] = useState(100)

  useEffect(function () {
    console.log("Use Effect is running ... ")
  }, [A, B])
  return (
    <div>
      <h1>{A}</h1>
      <h1>{B}</h1>

      <button onClick={() => {
        setA(A + 1)
      }}>Change A</button>

      <button onClick={() => {
        setA(B + 1)
      }}>Change B</button>

    </div>
  )
}

export default App