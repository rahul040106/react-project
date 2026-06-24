

const app = () => {
  return (
    // "hello"+
    // <div>
    //       <div id="dad">
    //       <h1 id="chaild1">Kaise ho App</h1>
    //       <h1 id="child2">Rahul First time playing with react</h1>
    // </div>
    // <div id="chacha">
    //             <h1 id="chaild1">Kaise ho App</h1>
    // </div>
    // </div>
    // can not pass more than one thing , so wraped inside div and exported it 

    <>
      <div id="dad">
        <h1 id="chaild1">Kaise ho App</h1>
        <h1 id="child2">Rahul First time playing with react</h1>
      </div>
      <div id="chacha">
        <h1 id="chaild1">Kaise ho App</h1>
      </div>

    </> //another way wrapper (called fragments)

  )
}

export default app

