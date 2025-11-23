import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-["Neue"] text-[4vw] leading-[4.5vw] tracking-tight'>
        We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.
      </h1>
      <div className='w-full border-t-[1px] flex gap-5 pt-10 mt-20 border-[#a1b562]'>
        <div className='w-1/2'>
           <h1 className='text-7xl'>Our Approach:</h1>
           <button className='flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Read More
            <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
           </button>
        </div>
        <div className='w-1/2 h-[70vh] rounded-3xl overflow-hidden'>
           <img 
             src="https://images.unsplash.com/photo-1574015974293-817f0ebebb74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZhc2hpb24lMjBtb2RlbHxlbnwwfHwwfHx8MA%3D%3D" 
             className="w-full h-full object-cover"
           />
        </div>
      </div>
    </div>
  )
}

export default About
