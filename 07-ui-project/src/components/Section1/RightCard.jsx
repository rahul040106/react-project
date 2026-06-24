import React from 'react'
import RightCardcontent from './RightCardcontent'

const RightCard = (props) => {
  return (
    <div className="h-full overflow-hidden w-80 rounded-3xl ">
      <img className="w-full h-full object-cover" src={props.img} alt="" />
      <RightCardcontent tag={props.tag}/>
    </div>
    
  )
}

export default RightCard