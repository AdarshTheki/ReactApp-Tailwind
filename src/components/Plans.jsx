import React from 'react'
import {MdOutlineManageAccounts} from 'react-icons/md';
import {GiDigitalTrace} from 'react-icons/gi';

export default function Plans() {
  return (
    <div className='py-[100px] px-20 '>
      <div className=' max-w[1240px] mx-auto sm:grid lg:grid-cols-3 md:grid-cols-2 gap-x-6 '>
        <div className='shadow-xl  my-4 bg-green-100 hover:scale-105 duration-500 rounded'>
          <main className='flex flex-col justify-center font-bold items-center p-4 gap-4'>
            <MdOutlineManageAccounts className=' text-5xl ' />
            <h2 className='text-2xl' >Web Development</h2>
            <h1 className='text-3xl' >$149</h1>
            <div className='flex flex-col text-center m-2'>
              <p className=' border-b-2 border-[#00000052] py-2'>Lorem, ipsum dolor.</p>
              <p className=' border-b-2 border-[#00000052] py-2'>Lorem ipsum dolor sit.</p>
              <p className=' border-b-2 border-[#00000052] py-2'>Lorem ipsum dolor, sit consectetur adipisicing elit.</p>
            </div>
            <button className=' bg-[#31d39d] w-[10rem] p-2 rounded mb-4 hover:bg-[#26926e] hover:text-white' >Start Trail</button>
          </main>
        </div>
        <div className='shadow-xl my-4 bg-gray-100 hover:scale-105 duration-500 rounded '>
        <main className='flex flex-col justify-center font-bold items-center p-4 gap-4'>
            <GiDigitalTrace className=' text-5xl ' />
            <h2 className='text-2xl'>Digital Marketing</h2>
            <h1 className='text-3xl' >$999</h1>
            <div className='flex flex-col text-center m-5' >
              <p className=' border-b-2 border-[#00000052] py-2'>Lorem, ipsum dolor.</p>
              <p className=' border-b-2 border-[#00000052] py-2'>Lorem ipsum dolor sit.</p>
              <p className=' border-b-2 border-[#00000052] py-2'>Lorem ipsum dolor, sit consectetur adipisicing elit.</p>
            </div>
            <button className=' bg-[#b1aeae] w-[10rem] p-2 rounded mb-4 hover:bg-[#494949] hover:text-white' >Start Trail</button>
          </main>
        </div>
        <div className='shadow-xl my-4 bg-pink-100 hover:scale-105 duration-500 rounded '>
        <main className='flex flex-col justify-center font-bold items-center p-4 gap-4'>
            <MdOutlineManageAccounts className=' text-5xl ' />
            <h2 className='text-2xl'>Full Stack Development</h2>
            <h1 className='text-3xl' >$949</h1>
            <div className='flex flex-col text-center m-5'>
              <p className=' border-b-2 border-[#00000052] py-2'>Lorem, ipsum dolor.</p>
              <p className=' border-b-2 border-[#00000052] py-2'>Lorem ipsum dolor sit.</p>
              <p className=' border-b-2 border-[#00000052] py-2'>Lorem ipsum dolor, sit consectetur adipisicing elit.</p>
            </div>
            <button className=' bg-[#f894a5] w-[10rem] p-2 rounded mb-4 hover:bg-[#f34f6b] hover:text-white ' >Start Trail</button>
          </main>
        </div>
      </div>
    </div>
  )
}
