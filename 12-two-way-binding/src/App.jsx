import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("")

  const submitHandler = (elem) => {
    elem.preventDefault()
    console.log("Submited by", title)
    setTitle("")
  }
  return (
    <div>
      <form onSubmit={(elem) => {
        submitHandler(elem)
      }}>
        <input type="text"

          placeholder="Enter Your Name"

          value={title}

          onChange={(elem) => {
            // console.log(elem.target.value)
            setTitle(elem.target.value)
          }} />


        <button>Submit</button>
      </form>
    </div>
  )
}

export default App