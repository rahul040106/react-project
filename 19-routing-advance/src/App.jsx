import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import { Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Courses from './pages/Courses'
import CoursesDetails from './pages/CoursesDetails'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Navbar />
      <Navbar2/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<CoursesDetails/>}/>
        <Route path='/product' element={<Product />}>
          <Route path='men' element={<Men />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App