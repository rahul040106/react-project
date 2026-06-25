import { useState } from "react"
import { X } from 'lucide-react';
const App = () => {
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log("Form submited")
    // console.log(title)
    // console.log(details)

    const copyTask = [...task]
    copyTask.push({ title, details })


    setTask(copyTask)

    // console.log(task)

    setTitle("")
    setDetails("")
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    // console.log(copyTask[idx])

    copyTask.splice(idx,1)
    setTask(copyTask)
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
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />
        <button className="bg-white active:bg-gray-500 font-medium outline-none w-full text-black px-5 py-2 rounded">Add Notes</button>




        <img className="h-80" src="https://imgs.search.brave.com/RW0HqQuAV5F4m3R7zv778DvM2hjNWDL85AFxYKTUSsg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvOC9QZW4t/SGFuZHdyaXRpbmct/UE5HLUNsaXBhcnQu/cG5n" />
      </form>
      <div className=" lg:w-1/2  lg:border-l-2 p-10">
        <h1 className="text-xl font-bold">Your Notes</h1>
        <div className="flex flex-wrap items-start mt-5 gap-5 h-[90%] overflow-auto ">

          {task.map(function (elem, idx) {
            return <div key={idx} className="relative h-52 w-40 rounded-2xl bg-cover bg-[url('https://imgs.search.brave.com/ZY-NtQFgXLVtpFXiPmLmRjFplcw5zJNGFdiUBnvc9cE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzljLzIw/Lzg1LzljMjA4NWU5/ZjgyYWVmMWZiYWMx/NWJmYWMzMmYwZjJh/LmpwZw')] py-6 px-8 text-black ">
              <h2 onClick={()=>{
                deleteNote(idx)
              }} className="absolute cursor-pointer active:scale-95 top-5 right-5 bg-red-500 p-1 rounded-full text-xs" > <X strokeWidth={3} size={18} /></h2>
              <h3 className="text-xl font-bold leading-tight">{elem.title}</h3>
              <p className="mt-2 leading-tight font-medium text-gray-500">{elem.details}</p>
            </div>
          })}

        </div>
      </div>
    </div>
  )
}

export default App