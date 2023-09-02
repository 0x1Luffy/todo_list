"use client"
import { Cagliostro } from 'next/font/google'
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler=(e)=>{
    e.preventDefault();
            console.log(title)
            console.log(desc)
            settitle("")
            setdesc("")
  }

  let renderTask = <h3>NO TASK AVAILABLE</h3>
  return (
    
    <>
    <div className='wrapper h-full w-full flex items-center justify-center'>
      <div className='title w-full h-36 bg-black text-center font-extrabold text-8xl p-4 text-white'>MY TO-DO-LIST</div>
    </div>

      <div className='main-wrapper flex justify-center items-center'>
        <form onSubmit={submitHandler} className='bg-gray-700 w-full h-[760px] m-10 rounded-xl flex justify-center'>

          <input type='text' placeholder='Enter Your Task ' className=' h-32 w-80 text-2xl border-green-400 border-2 rounded-md mt-20 text-center'
          
            value={title}
            onChange={(e)=>{
              settitle(e.target.value)
            }}  
          />
          <input type='text' placeholder='Explain Your Task ' className='  h-32 w-80 text-2xl border-green-400 border-2 rounded-md ml-10 mt-20 text-center'
            value={desc}
            onChange={(e)=>{
              setdesc(e.target.value)
            }}
          />
          <input type='submit' value={"ADD TASK"}  className=' h-16 w-28 border-green-400 bg-zinc-600 text-white font-extrabold border-2 rounded-md ml-10 mt-28' />
        </form>
        <div className='h-20 w-[1833px] bg-cyan-500 absolute flex items-center justify-center font-extrabold text-black text-3xl'>
                <ul>
                  {renderTask}
                </ul>
      </div>
      </div>
      </>
  )
}

export default page