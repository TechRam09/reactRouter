/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"

// import React from 'react'
import { useLoaderData } from "react-router-dom"

function Github() {

    //Using Normal Method 
    // const [data ,setData] = useState([])
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/TechRam09`)   
    //     .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //     })
    // },[])
    //More optimised method using Loader
    const data = useLoaderData()
  return (
      <div className=" flex flex-col py-12  md:mx-[500px]  justify-center min-h-[700px]">
          <div className=" bg-black text-white px-12 pb-12">
              <h1 className="m-5 text-center text-2xl font-bold">Github Username:{data.login }</h1>
              <div className="flex w-full gap-20 items-center">
               
                      <img src={data.avatar_url} alt="githubpic" className=" rounded-full h-[200px] w-[200px]" />
          
                  <div className="px-3 text-2xl">
                      <h2>Userid:{data.id} </h2>
                      <h2>Repository: { data.public_repos} </h2>
                      <h2>Followers: { data.followers} </h2>
                      <h2>Following: {data.following} </h2>
                  </div>
              </div>   
        </div>
    </div>
  )
}

export default Github

export const GithubInfo = async () => {
    const response = fetch(`https://api.github.com/users/TechRam09`)  
    return (await response).json()
}