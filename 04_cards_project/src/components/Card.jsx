import React from 'react'
import { Bookmark } from "lucide-react";
const Card = (props) => {
    return (
        <div>
            <div className="card">
                <div>
                    <div className="top">
                        <img src={props.logo} alt="" />
                        <button>Save <Bookmark size={13} /></button>
                    </div>
                    <div className="center">
                        <h3>{props.comp}<span> {props.postD}</span></h3>
                        <h2>{props.post}</h2>
                        <div className="tag">
                            <h4>{props.time}</h4>
                            <h4>{props.level}</h4>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <div>

                        <h3>{props.pay}/hr</h3>
                        <p>{props.loc}</p>

                    </div>
                    <button>Apply Now(nulle ho kya?)</button>
                </div>
            </div>
        </div>
    )
}

export default Card