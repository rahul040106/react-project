import React from 'react'

const App = () => {
  function btnClicked() {
    console.log("Button Clicked")
  }

  function mouseEnter() {
    console.log("Mouse Enter")
  }

  function howToCallOnClick(elem) {
    console.log(`${elem.target.value} howToCallOnClick Passed value as well`)
  }
  return (
    <div>
      <h1>Hello Guys</h1>
      <button onClick={btnClicked}>Change User</button>
      <button onDoubleClick={btnClicked}>Double User</button>
      <button onMouseEnter={mouseEnter}>Mouse User</button>
      <button onClick={function () {
        console.log("Clicked From inside")
      }}>Making User</button>

      <input onClick={() => {
        console.log("INSIDE INPUT")
      }} onChange={() => {
        console.log("typing")
      }} />


      <button onClick={function () {
        console.log("Clicked From inside")
      }}>Making User2</button>

      <input onClick={(elem) => {
        console.log(elem.target.value)
      }} onChange={(elem) => {
        console.log(elem.target.value)
      }} />

      <input onClick={(elem) => {
        howToCallOnClick(elem)
      }} />

      <input onMouseMove={(elem) => {
        console.log(elem.clientX)
      }}
        className="box" />

      <input onMouseMove={(elem) => {
        console.log(elem.clientY)
      }}
        className="box" />

      <div onWheel={(elem)=>{
        // console.log("Page Scrolling")
        // console.log(elem)
        // console.log(elem.deltaY)

        if(elem.deltaY<0){
          console.log("Ulta Scroll")
        }else{
          console.log("Seedha Scrolling")
        }
      }}>
        <div class="page1">Rahul</div>
        <div class="page2">Patle</div>
        <div class="page3">Kokna</div>
      </div>
    </div>
  )
}

export default App