import React from 'react'
import blogging from "../components/assets/blogging.jpg";
export default function Expert() {
  return (
    <div>
      <div className=" max-w-[1240px] mx-auto my-10 p-2 lg:grid grid-cols-2 ">
        <div className=" col-span-1 grid mx-auto bg-cover ">
          <img src={blogging} alt="img" className='mx-auto bg-cover inline mb-10 w-[70%] ' />
        </div>
        <div className=" col-span-1 flex flex-col items-center m-2 ">
          <h1 className=' font-bold uppercase text-[#df34ba] m-2 ' >
            LEARN FOR EXPERT
          </h1>
          <p className='italic mx-10 my-2 text-justify'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, dolorum? Minus laudantium dignissimos consectetur perspiciatis blanditiis quasi impedit asperiores vero praesentium dolor, eveniet deleniti laudantium dignissimos consectetur nobis laboriosam deserunt at pariatur id!
          </p>
          <button className=' w-[30%] bg-black text-white p-3 rounded font-bold m-2 hover:scale-105' >Get Started</button>
        </div>
      </div>
    </div>
  )
};
