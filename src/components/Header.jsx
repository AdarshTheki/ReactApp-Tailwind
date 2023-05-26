import React, { useState } from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
function Header() {
  // Create Toggle
  const [toggle, setToggle] = useState(false);

  return (
    <div className=' bg-[#526D82] p-4 '>
      <div className=' text-white font-bold text-md max-w-[1240px] py-[12px] item-center flex mx-auto justify-between '>
        Adarsh Verma
      
      {
        toggle ? 
        ( <AiOutlineClose onClick={()=> setToggle(!toggle)}
        className="text-white cursor-pointer text-2xl md:hidden block fixed right-[30px] font-bold z-10" />) 
        : 
        ( <AiOutlineMenu onClick={()=> setToggle(!toggle)}
        className="text-white cursor-pointer text-2xl md:hidden block fixed right-[30px] font-bold z-10" />) 
      }
      <ul className='hidden md:flex gap-4'>
        <li><a href='/' className='hover:bg-[#de72e7] duration-500 p-2 rounded '>Home</a></li>
        <li><a href='/' className='hover:bg-[#de72e7] duration-500 p-2 rounded '>Company</a></li>
        <li><a href='/' className='hover:bg-[#de72e7] duration-500 p-2 rounded '>Resource</a></li>
        <li><a href='/' className='hover:bg-[#de72e7] duration-500 p-2 rounded '>About</a></li>
        <li><a href='/' className='hover:bg-[#de72e7] duration-500 p-2 rounded '>Contact</a></li>
      </ul>
      {/* Responsive Website */}
      <ul className={` p-10 duration-300 md:hidden w-full h-screen text-white fixed bg-black pt-14 top-[0px] 
      ${toggle ? `left-[0]` : `left-[-100%]`} flex gap-10 flex-col `}>
        <li className="hover:bg-[#de72e7] w-[30%] duration-300 p-2 rounded" >Home</li>
        <li className="hover:bg-[#de72e7] w-[30%] duration-300 p-2 rounded" >Company</li>
        <li className="hover:bg-[#de72e7] w-[30%] duration-300 p-2 rounded" >Resource</li>
        <li className="hover:bg-[#de72e7] w-[30%] duration-300 p-2 rounded" >About</li>
        <li className="hover:bg-[#de72e7] w-[30%] duration-300 p-2 rounded" >Contact</li>
      </ul>
      </div>
    </div>
  );
};

export default Header;