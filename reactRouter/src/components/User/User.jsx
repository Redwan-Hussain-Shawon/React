import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {id} = useParams();
    return(
        <h2 className="p-3 bg-gray-500 text-white text-center">User: {id} </h2>
    )
}
export default User