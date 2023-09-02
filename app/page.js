"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler=(e)=>{
    e.preventDefault();
            setmainTask([...mainTask, {title,desc}])   // mainTask me title aur dec liya aur fir setTask se usko UI pe Render Kiya
            settitle("")
            setdesc("")
            console.log(mainTask)
  };

  const deleteHandler = (i)=>{
        let copyTask = [...mainTask]
        copyTask.splice(i,1)
        setmainTask(copyTask)
  }

  let renderTask = <h3>NO TASK AVAILABLE</h3>

  if (mainTask.length >0)
  {
    renderTask = mainTask.map((t,i)=>{
      return (

        <li key={i}>
          <div className='flex items-center'>
          <div className='text-black font-semibold text-3xl break-words flex justify-between '> <h5>{t.title} :-  {t.desc}</h5>
          </div>
          <div className='flex ml-16 w-auto justify-between bg-red-400 rounded-md text-white px-2 py-2'>
          <button onClick={
            () =>{
              deleteHandler(i)
            }
          }>
          DELETE
          </button>
          </div>
            
              
          </div>
          </li>
          
        

      );
    });
  }





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
        <div className='h-96 w-96 bg-cyan-500 absolute flex  justify-center font-extrabold text-black text-xl rounded-xl mt-24 break-normal'>
            <div className='flex justify-start'>
            <h3 className='text-red-600 font-extrabold mt-5'>TO DO TASKS</h3>
            </div>
            <div className='absolute font-bold text-xl mt-28 text-center'>
            <ul>
            {renderTask}
            
                 
                </ul>
            </div>
        </div>
            
      </div>
      </>
  )
}

export default page