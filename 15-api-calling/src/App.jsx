import axios from 'axios'
import React from 'react'
import { useState } from 'react'

const App = () => {
  // async function getData(){
  //   const response =await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response)
  // }

  // const getData =async() => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos')

  //   console.log(response)
  // //  console.log(response.jason())  also a async
  //   const data = await response.json()

  //   console.log(data);

  // }

  // const getData = async () => {
  //   const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
  //   console.log(response.data)
  // }

  //   const getData = async () => {
  //   const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos')
  //   console.log(data)   //data destructuring used
  // }

  const [data, setData] = useState([])
    const getData = async () => {
    const response = await axios.get('https://picsum.photos/v2/list')
    console.log(response.data)   //data destructuring used

    setData(response.data)
  }


  return (
    <div>
      <button onClick={getData}>GetData</button>
      <div>
        {data.map(function(elem, idx){

          return <img src="elem.url"/>
        })}
      </div>
    </div>
  )
}

export default App