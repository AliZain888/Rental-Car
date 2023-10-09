import React from 'react'
import { ArrangeVertical} from "iconsax-react";

const PicknDrop = () => {
  return (
    <>
       <div className="mt-8 mx-6 lg:mx-0 lg:px-16 lg:flex lg:justify-between lg:items-center">
      {/* Pick */}
      <section className="bg-white rounded-[10px] p-4 lg:p-6 lg:w-2/5">
        <div className="flex items-center mb-4">
          <input
            defaultChecked
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
          />
          <label
            htmlFor="default-radio-1"
            className="ml-2 text-base font-semibold text-[#1A202C]"
          >
            Pick-Up
          </label>
        </div>

        <div className="flex justify-between items-center">
          <div className="w-[30%] border-r-[1px] border-[#C3D4E966]">
            <span className="text-[#1A202C] font-bold text-base">
              Locations
            </span>

            <select className=" w-full py-2 focus:outline-none  text-[#90A3BF] font-normal text-xs bg-white">
              <option defaultValue>Select your city</option>
              <option value="lahore">Lahore</option>

            </select>
          </div>

          <div className="w-[30%] border-r-[1px] border-[#C3D4E966]">
            <span className="text-[#1A202C] font-bold text-base block">
              Date
            </span>
            <select className="w-full py-2 focus:outline-none border-[#C3D4E966] text-[#90A3BF] text-xs bg-white">
              <option defaultValue>Select your date</option>
              <option >8 Oct 2023</option>

            </select>
          </div>

          <div className="w-[30%]">
            <span className="text-[#1A202C] font-bold text-base">Time</span>

            <select className="w-full py-2 focus:outline-none border-[#C3D4E966] text-[#90A3BF] text-xs bg-white">
              <option defaultValue >Select your time</option>

            </select>
          </div>
        </div>
      </section>

      <div className=" lg:mx-[44px] w-[60px] h-[60px] mx-auto z-10 bg-[#3563E9] rounded-[10px] flex justify-center items-center cursor-pointer shadow-[#10329347] shadow-xl ">
        <ArrangeVertical color="#ffffff" />
      </div>

        {/* Drop */}
      <section className="bg-white rounded-[10px] p-4 lg:p-6 lg:w-2/5">
        <div className="flex items-center mb-4">
          <input
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
          />
          <label
            htmlFor="default-radio-2"
            className="ml-2 text-base font-semibold text-[#1A202C]"
          >
            Drop-Off
          </label>
        </div>

        <div className="flex justify-between items-center">
          <div className="w-[30%] border-r-[1px] border-[#C3D4E966]">
            <span className="text-[#1A202C] font-bold text-base">
              Locations
            </span>

            <select className=" w-full py-2 focus:outline-none  text-[#90A3BF] font-normal text-xs bg-white">
              <option defaultValue>Select your city</option>
              <option value="Karachi">Karachi</option>

            </select>
          </div>

          <div className="w-[30%] border-r-[1px] border-[#C3D4E966]">
            <span className="text-[#1A202C] font-bold text-base block">
              Date
            </span>
            <select className="w-full py-2 focus:outline-none border-[#C3D4E966] text-[#90A3BF] text-xs bg-white">
              <option defaultValue >Select your date</option>
              <option >8 Oct 2023</option>
            </select>
          </div>

          <div className="w-[30%]">
            <span className="text-[#1A202C] font-bold text-base">Time</span>

            <select className="w-full py-2 focus:outline-none border-[#C3D4E966] text-[#90A3BF] text-xs bg-white">
              <option defaultValue >
              Select your time
              </option>
            </select>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default PicknDrop
