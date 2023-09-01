import React from 'react'

const page = () => {
  return (
    <>
    <div className='wrapper h-full w-full flex items-center justify-center'>
      <div className='title w-full h-36 bg-black text-center font-extrabold text-8xl p-4 text-white'>MY TO-DO-LIST</div>
    </div>

      <div className='main-wrapper flex justify-center items-center'>
        <form className='bg-gray-700 w-full h-[760px] m-10 rounded-xl flex justify-center items-center flex-col'>
          <input type='text' placeholder='Enter Your Task ' className='text-2xl border-green-400 border-2 rounded-md'></input>
          <input type='text' placeholder='Explain Your Task ' className='text-2xl border-green-400 border-2 rounded-md'></input>
          <input type='button'  className='h-5 w-5 border-green-400 border-2 rounded-md'></input>
        </form>
      </div>
      </>
  )
}

export default page