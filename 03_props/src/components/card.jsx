import React from 'react'

const Card = (props) => {
      console.log(props.user, props.age);
  return (
      <div className="card">
        <img src={props.img}/>
        <h1>{props.user}</h1>
        <p>Description: Age1:{props.age},Age2:{props.age2}</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card