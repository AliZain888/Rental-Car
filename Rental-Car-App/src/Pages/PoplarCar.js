import React from 'react'
import { GasStation, Heart, Profile2User, Story } from "iconsax-react";

const PoplarCar = () => {
  return (
    <>
      <div className="mt-8 px-16 lg:px-16 flex justify-between items-center mb-5  lg:mb-[30px] ">
        <p className="text-[#90A3BF] text-sm font-semibold">Popular Car</p>
        <p className="text-[#3563E9] text-xs font-semibold">View All</p>
        </div>

        <div className="mt-8 px-6 flex  lg:px-16  ">
            {/* Car 1 */}
       <div className="rounded-[10px] bg-white p-4  mr-5 w-60 lg:mr-8 lg:w-[304px] ">
      <div className="flex justify-between items-center ">
        <p className="flex flex-col">
            <span className="font-semibold text-base text-[#1A202C] lg:text-xl lg:font-bold">
              Koenlgsegg
            </span>
          <span className="font-medium text-xs text-[#90A3BF] lg:text-sm lg:font-bold">
            sport
          </span>
        </p>

        <span >
            <Heart color="#ed3f3f" variant="Bold" />
        </span>
      </div>

      <div className="relative flex justify-center items-center">
        <img className="my-8 " src="https://static.vecteezy.com/system/resources/previews/019/069/363/original/sport-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png" alt="koenlgsegg" />
        <div className="bg-gradient-to-t from-white to-white[/50%]  absolute w-full bottom-6 h-11 "></div>
      </div>

      <ul className="flex justify-center items-center">
        <li className="flex items-center">
          <GasStation
            className="w-[14px] h-[14px] md:w-6 lg:h-6"
            color="#90a3bf"
            variant="Bold"
          />
          <span className="font-medium text-xs text-[#90A3BF] ml-1 md:text-sm">
            90L
          </span>
        </li>

        <li className="flex items-center mx-4">
          <Story
            className="w-[14px] h-[14px] md:w-6 lg:h-6"
            color="#90a3bf"
            variant="Bold"
          />
          <span className="font-medium text-xs text-[#90A3BF] ml-1 md:text-sm">
            Manual
          </span>
        </li>

        <li className="flex items-center">
          <Profile2User
            className="w-[14px] h-[14px] md:w-6 lg:h-6"
            color="#90a3bf"
            variant="Bold"
          />
          <span className="font-medium text-xs text-[#90A3BF] ml-1 md:text-sm">
            2 People
          </span>
        </li>
      </ul>

      <div className="flex justify-between items-center mt-7">
        <div>
          <section className="flex justify-between items-end font-bold">
            <div className="text-[#1A202C] text-base lg:text-xl">
              $99.00/ day
            </div>
          </section>


        </div>

          <button
            className="bg-[#3563E9] rounded-[4px] text-white text-xs lg:text-base font-semibold px-4 py-[10px] lg:px-5 "
          >
            Rental Now
          </button>
      </div>
    </div>

                {/* Car 2 */}
  
       <div className="rounded-[10px] bg-white p-4  mr-5 w-60 lg:mr-8 lg:w-[304px] ">
      <div className="flex justify-between items-center ">
        <p className="flex flex-col">
            <span className="font-semibold text-base text-[#1A202C] lg:text-xl lg:font-bold">
              Nissan GT-R
            </span>
          <span className="font-medium text-xs text-[#90A3BF] lg:text-sm lg:font-bold">
            sport
          </span>
        </p>

        <span >
            <Heart  />
        </span>
      </div>

      <div className="relative flex justify-center items-center">
        <img className="my-8 " src="https://st5.depositphotos.com/46264048/66150/i/450/depositphotos_661504546-stock-photo-white-sport-car-white-background.jpg" alt="nissan" />
        <div className="bg-gradient-to-t from-white to-white[/50%]  absolute w-full bottom-6 h-11 "></div>
      </div>

      <ul className="flex justify-center items-center">
        <li className="flex items-center">
          <GasStation
            className="w-[14px] h-[14px] md:w-6 lg:h-6"
            color="#90a3bf"
            variant="Bold"
          />
          <span className="font-medium text-xs text-[#90A3BF] ml-1 md:text-sm">
            80L
          </span>
        </li>

        <li className="flex items-center mx-4">
          <Story
            className="w-[14px] h-[14px] md:w-6 lg:h-6"
            color="#90a3bf"
            variant="Bold"
          />
          <span className="font-medium text-xs text-[#90A3BF] ml-1 md:text-sm">
            Manual
          </span>
        </li>

        <li className="flex items-center">
          <Profile2User
            className="w-[14px] h-[14px] md:w-6 lg:h-6"
            color="#90a3bf"
            variant="Bold"
          />
          <span className="font-medium text-xs text-[#90A3BF] ml-1 md:text-sm">
            2 People
          </span>
        </li>
      </ul>

      <div className="flex justify-between items-center mt-7">
        <div>
          <section className="flex justify-between items-end font-bold">
            <div className="text-[#1A202C] text-base lg:text-xl">
              $80.00/ day
            </div>
          </section>


        </div>

          <button
            className="bg-[#3563E9] rounded-[4px] text-white text-xs lg:text-base font-semibold px-4 py-[10px] lg:px-5 "
          >
            Rental Now
          </button>
      </div>
    </div>
                {/* Car 3 */}
  
       <div className="rounded-[10px] bg-white p-4  mr-5 w-60 lg:mr-8 lg:w-[304px] ">
      <div className="flex justify-between items-center ">
        <p className="flex flex-col">
            <span className="font-semibold text-base text-[#1A202C] lg:text-xl lg:font-bold">
              Rolls-Royce
            </span>
          <span className="font-medium text-xs text-[#90A3BF] lg:text-sm lg:font-bold">
            sport
          </span>
        </p>

        <span >
            <Heart color="#ed3f3f" variant="Bold" />
        </span>
      </div>

      <div className="relative flex justify-center items-center">
        <img className="my-8 " src="https://static.vecteezy.com/system/resources/previews/019/069/363/original/sport-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png" alt="rollasroyce" />
        <div className="bg-gradient-to-t from-white to-white[/50%]  absolute w-full bottom-6 h-11 "></div>
      </div>

      <ul className="flex justify-center items-center">
        <li className="flex items-center">
          <GasStation
            className="w-[14px] h-[14px] md:w-6 lg:h-6"
            color="#90a3bf"
            variant="Bold"
          />
          <span className="font-medium text-xs text-[#90A3BF] ml-1 md:text-sm">
            70L
          </span>
        </li>

        <li className="flex items-center mx-4">
          <Story
            className="w-[14px] h-[14px] md:w-6 lg:h-6"
            color="#90a3bf"
            variant="Bold"
          />
          <span className="font-medium text-xs text-[#90A3BF] ml-1 md:text-sm">
            Manual
          </span>
        </li>

        <li className="flex items-center">
          <Profile2User
            className="w-[14px] h-[14px] md:w-6 lg:h-6"
            color="#90a3bf"
            variant="Bold"
          />
          <span className="font-medium text-xs text-[#90A3BF] ml-1 md:text-sm">
            4 People
          </span>
        </li>
      </ul>

      <div className="flex justify-between items-center mt-7">
        <div>
          <section className="flex justify-between items-end font-bold">
            <div className="text-[#1A202C] text-base lg:text-xl">
              $96.00/ day
            </div>
          </section>


        </div>

          <button
            className="bg-[#3563E9] rounded-[4px] text-white text-xs lg:text-base font-semibold px-4 py-[10px] lg:px-5 "
          >
            Rental Now
          </button>
      </div>
    </div>
                {/* Car 4 */}
  
       <div className="rounded-[10px] bg-white p-4  mr-5 w-60 lg:mr-8 lg:w-[304px] ">
      <div className="flex justify-between items-center ">
        <p className="flex flex-col">
            <span className="font-semibold text-base text-[#1A202C] lg:text-xl lg:font-bold">
             Ferrari
            </span>
          <span className="font-medium text-xs text-[#90A3BF] lg:text-sm lg:font-bold">
            sport
          </span>
        </p>

        <span >
            <Heart />
        </span>
      </div>

      <div className="relative flex justify-center items-center">
        <img className="my-8 " src="https://st5.depositphotos.com/46264048/66150/i/450/depositphotos_661504546-stock-photo-white-sport-car-white-background.jpg" alt="ferrari" />
        <div className="bg-gradient-to-t from-white to-white[/50%]  absolute w-full bottom-6 h-11 "></div>
      </div>

      <ul className="flex justify-center items-center">
        <li className="flex items-center">
          <GasStation
            className="w-[14px] h-[14px] md:w-6 lg:h-6"
            color="#90a3bf"
            variant="Bold"
          />
          <span className="font-medium text-xs text-[#90A3BF] ml-1 md:text-sm">
            90L
          </span>
        </li>

        <li className="flex items-center mx-4">
          <Story
            className="w-[14px] h-[14px] md:w-6 lg:h-6"
            color="#90a3bf"
            variant="Bold"
          />
          <span className="font-medium text-xs text-[#90A3BF] ml-1 md:text-sm">
            Manual
          </span>
        </li>

        <li className="flex items-center">
          <Profile2User
            className="w-[14px] h-[14px] md:w-6 lg:h-6"
            color="#90a3bf"
            variant="Bold"
          />
          <span className="font-medium text-xs text-[#90A3BF] ml-1 md:text-sm">
            2 People
          </span>
        </li>
      </ul>

      <div className="flex justify-between items-center mt-7">
        <div>
          <section className="flex justify-between items-end font-bold">
            <div className="text-[#1A202C] text-base lg:text-xl">
              $99.00/ day
            </div>
          </section>


        </div>

          <button
            className="bg-[#3563E9] rounded-[4px] text-white text-xs lg:text-base font-semibold px-4 py-[10px] lg:px-5 "
          >
            Rental Now
          </button>
      </div>
    </div>

    </div>


    
      


    </>
  )
}

export default PoplarCar
