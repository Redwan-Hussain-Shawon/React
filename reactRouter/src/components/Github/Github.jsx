import React, { useEffect, useState } from "react";
function Github(){
    const [data,setData]= useState({});
    useEffect(()=>{
        fetch('https://api.github.com/users/Redwan-Hussain-Shawon')
        .then(response => response.json())
        .then(data=>{
            setData(data);
        })
    },[])
    const accessToken = 'YOUR_ACCESS_TOKEN';

    fetch(`https://graph.facebook.com/v12.0/me?fields=id,name,email&access_token=${accessToken}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Handle the response data here
      })
      .catch(error => {
        console.error('Error fetching data from Facebook Graph API:', error);
      });
    
    
    
   return(
    <div>Github Followers: {data.name}</div>
    )
}
export default Github