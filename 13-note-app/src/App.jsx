import { useState } from "react"

const App = () => {
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")


  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Form submited")
    console.log(title)
    setTitle("")
    setDetails("")
  }


  return (
    <div className="h-screen bg-black p-10 text-white lg:flex ">

      <form onSubmit={(e) => {
        submitHandler(e)
      }} className="flex items-start p-10 lg:w-1/2 flex-col gap-4 ">
        <h1 className="text-xl font-bold">Add Notes</h1>



        <input
          type="text"
          placeholder="Enter Task"
          className="px-5 outline-none font-medium w-full py-2 border-2 rounded "
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <textarea
          type="text"
          placeholder="Enter Details"
          className="px-5 font-medium outline-none w-full h-20 py-2 border-2 rounded "
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        />
        <button className="bg-white font-medium outline-none w-full text-black px-5 py-2 rounded">Add Notes</button>




        {/* <img className="h-80" src="https://imgs.search.brave.com/RW0HqQuAV5F4m3R7zv778DvM2hjNWDL85AFxYKTUSsg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvOC9QZW4t/SGFuZHdyaXRpbmct/UE5HLUNsaXBhcnQu/cG5n" /> */}
      </form>
      <div className=" lg:w-1/2  lg:border-l-2 p-10">
        <h1 className="text-xl font-bold">Your Notes</h1>
        <div className="flex flex-wrap mt-5 gap-5 h-full overflow-auto ">
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
          <div className="h-52 w-40 rounded-2xl bg-white"></div>
        </div>
      </div>
    </div>
  )
}

export default App