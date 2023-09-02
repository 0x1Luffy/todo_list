import React from 'react'

const page = () => {
  return (
    <>
    <div className='wrapper h-full w-full flex items-center justify-center'>
      <div className='title w-full h-36 bg-black text-center font-extrabold text-8xl p-4 text-white'>MY TO-DO-LIST</div>
    </div>

      <div className='main-wrapper flex justify-center items-center'>
        <form className='bg-gray-700 w-full h-[760px] m-10 rounded-xl flex justify-center'>
          <input type='text' placeholder='Enter Your Task ' className=' h-32 w-80 text-2xl border-green-400 border-2 rounded-md mt-20 text-center'></input>
          <input type='text' placeholder='Explain Your Task ' className='  h-32 w-80 text-2xl border-green-400 border-2 rounded-md ml-10 mt-20 text-center'></input>
          <input type='submit'  className=' h-16 w-28 border-green-400 bg-zinc-600 text-white font-extrabold border-2 rounded-md ml-10 mt-28'></input>
        </form>
      </div>
      </>
  )
}

export default page