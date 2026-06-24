import React from 'react'
import Card from "./components/card.jsx"
const App = () => {
  return (
    <div className="parent">
      <Card user="Aman" age={18} age2="18" img="https://images.unsplash.com/photo-1698758004450-1f9da080f9b4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D"/> 
      <Card user="Rahul" age={18} age2="18" img="https://images.unsplash.com/photo-1777799034756-b07fdb93a5cf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D"/> 
    </div>
  )
}

export default App