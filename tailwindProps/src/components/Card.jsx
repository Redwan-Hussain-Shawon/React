import React from "react";

function Card({username,textColor}){
    console.log(username)
    return(
        <h1 className="text-yellow-400 bg-white p-5 mb-3">{username}</h1>
    )
}

export default Card