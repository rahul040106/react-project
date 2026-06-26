import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [index, setIndex] = useState(1)
  const [userData, setUserData] = useState([])
  const getData = async () => {
    // json (array of object ) form mr data aayega
    //  axios.post("https://picsum.photos/v2/list?page=2&limit=100", {user:data, password:data})

    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)

    console.log(response.data)
    setUserData(response.data)

  }

  useEffect(function(){
    getData()
  },[index])



  let printUserData = <h3 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-400 text-xs">Loading...</h3>
  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {
      return <div key={idx}>
        <Card elem={elem}/>
      </div>
    })
  }

  return (
    <div className="bg-black h-screen overflow-auto text-white p-4">
      {/* <h1 className="fixed text-6xl bg-red-500">{index}</h1> */}
      {/* <button
        onClick={getData}
        className="bg-green-600 px-5 mb-3 py-2 rounded text-white active:scale-95">Get Data</button> */}

      <div className="flex flex-wrap gap-2 p-2">
        {printUserData}
      </div>
        <div className="flex gap-6 justify-center items-center">
          <button 
          style={{opacity: index > 1? 1 : 0.5}}
          className="bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95" onClick={()=>{
              console.log("Prev")
              if(index>1){
                setIndex(index-1)
                setUserData([])
              }
          }}>
            Prev
          </button>
          <h1>Page {index}</h1>
          <button className="bg-amber-400 text-black rounded px-4 py-2 font-semibold text-sm cursor-pointer active:scale-95" onClick={()=>{
            console.log("Next")
            setIndex(index+1)
            setUserData([])
          }}>
            Next
          </button>
        </div>
    </div>
  )
}

export default App