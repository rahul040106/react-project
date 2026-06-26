import React from 'react'

const Card = (elem) => {
    return (
        <div>
            <a href={elem.elem.url} target="_blank">
                <div className="h-40 rounded-xl overflow-hidden w-44 bg-white">
                    <img className="h-full w-full  object-cover" src={elem.elem.download_url} />
                </div>
                <h1 className="font-bold text-lg">{elem.elem.author}</h1>
            </a>
        </div>
    )
}

export default Card