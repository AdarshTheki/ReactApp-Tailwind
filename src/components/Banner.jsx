// rfc shortcut
import React from 'react'
import Typewriter from 'typewriter-effect';  

export default function Banner() {
  return (
    <div className=' bg-[#0ec1ee] w-full py-[100px] '>
      <div className=' max-w-[1240px] mx-auto text-center'>
        <h3 className=" lg:p-2 md:p-1 text-xl md:text-2xl capitalize lg:text-3xl font-bold ">learn with us</h3>
        <h2 className=' lg:p-2 md:p-1 text-3xl text-white capitalize font-bold md:text-5xl lg:text-6xl'>grow with us</h2>
        <h2 className=' lg:p-3 md:p-2 text-2xl text-[#374259] capitalize font-bold'>
          <span className='lg:p-2 md:p-1 text-2xl text-white capitalize md:text-3xl lg:text-4xl font-bold'>learn</span> 
          {/* TypeWriter Effect */}
          <Typewriter
            options={{
              strings: ['Web Development', 'Digital Marketing', 'Ethical Hacking'],
              autoStart: true,
              loop: true,
              delay: 50,
            }}  />
        </h2>
        <button className=' bg-black text-white p-3 rounded mt-4 font-bold hover:scale-105 ' >Get Started</button>
      </div>
    </div>
  )
}
