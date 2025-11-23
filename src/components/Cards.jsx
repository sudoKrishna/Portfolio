import React from 'react'

const Cards = () => {
  return (
    <div className='w-full h-screen bg-zinc-100 flex items-center px-32 gap-5'>
        <div className='cardcontainer h-[50vh] w-1/2'>
        <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
          <h1 className='w-32 text-[#CDEA68] text-6xl font-[Neue] mr-6 font-semibold'>PORT</h1>
          <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy; hey</button>
        </div>
        </div>
      <div className='cardcontainer flex gap-5 w-1/2 h-[50vh]'>
      <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]'>
      <h1 className='w-32 text-[#CDEA68] text-6xl font-[Neue] mr-6 font-semibold'>PORT</h1>
          <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy; hey</button>
          </div>
      <div className='card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#192826]'>
      <h1 className='w-32 text-[#CDEA68] text-6xl font-[Neue] mr-6 font-semibold'>PORT</h1>
          <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy; hey</button>
      </div>
      </div>
    </div>
    
  )
}

export default Cards
