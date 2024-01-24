import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
// const [data, setData] = useState([])
//     useEffect(()=>{
//         fetch('https://api.github.com/users/Radha2786')
//         .then(response => response.json())
//         .then(data =>{
//             console.log(data);
//             setData(data);
            
//         })
//     },[])
  return (
    <div className='text-center m-4 bg-pink-300 text-white p-4 text-3xl text-pink-900'>Github followers: {data.followers}
     <img src={data.avatar_url} alt="Git picture" width={300} />
     
    </div>
    )
}

export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/Radha2786')
    return response.json()
} 