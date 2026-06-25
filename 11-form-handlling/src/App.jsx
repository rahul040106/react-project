import React from 'react'

const App = () => {

  const submitHandler =(elem) => {
    elem.preventDefault()
    console.log("Submited")
  }
  return (
    <div>
      <form onSubmit={(elem)=>{
        submitHandler(elem)
      }}>
        <input type="text" placeholder="rahul"/>
        <input type="text" placeholder="rahul"/>
        <input type="text" placeholder="rahul"/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App