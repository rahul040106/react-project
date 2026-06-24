import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './RightCard'
const RightText = (props) => {
  return (
    <div className="h-full w-2/3 p-4  bg-blue-200">
      {props.users.map(function(elem, idx){
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} />
      })}
    </div>

  )
}

export default RightText

