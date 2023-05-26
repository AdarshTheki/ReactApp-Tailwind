import React from "react";

export default function NewsLetter() {
  return (
    <div className=" bg-[#0ec1ee] w-full p-4 justify-between">
      <div className="max-w-[1240px] flex mx-auto justify-between py-20 px-5 gap-5 ">
        <div className="grid grid-cols-2 max-w-[1240px]">
          <div className=" mx-auto p-4">
            <h1 className=" font-bold lg:text-5xl text-4xl my-2 text-white ">
              Want to lear latest I.T Skills?
            </h1>
            <p>Sign up to our NewsLetter and stay up to date. </p>
          </div>
          <div className=" mx-auto p-4 ">
            <div className="flex flex-start gap-4 flex-col">
              <input
                type="text"
                className="rounded font-bold p-2 w-[70%] "
                placeholder="Email..."
              />
              <button className=" rounded font-bold p-2 w-[100px] text-[white] bg-[black] hover:scale-105">
                Notify Me
              </button>

              <p className=" text-white ">
                We care about the protections of your data. Read our
              </p>
              <p className="text-black font-bold hover:scale-105 cursor-pointer"> Privacy Police. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
