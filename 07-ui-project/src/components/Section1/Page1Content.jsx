import React from 'react'
import LeftText from './LeftText'
import RightText from './RightText'

const Page1Content = (props) => {
  return (
    <div className="py-10 gap-10 flex items-center  justify-between px-18 h-[90vh]" >
        <LeftText/>
        <RightText users={props.users}/>
    </div>
  )
}

export default Page1Content