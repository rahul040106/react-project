import React from 'react'
import { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Nav2 = () => { //can also use {children, theme} by destructuring concept
// const data = useContext(ThemeDataContext)
const [theme, setTheme] = useContext(ThemeDataContext)
console.log(theme)
    return (
        <div className="nav2">
            {/* {props.children[0]}
            {props.children[1]} */}
            <h4>Home</h4>
            <h4>About</h4>
            <h4>Contact</h4>
            <h4>Services</h4>
            <h4>{theme}</h4>

        </div>
    )
}

export default Nav2