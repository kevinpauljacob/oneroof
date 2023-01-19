import { FunctionComponent } from "react";
import { GoSearch } from 'react-icons/go'

const Hero: FunctionComponent = () => {
  return (
    <>
    <div className="relative flex flex-col items-center bg-gray-50 text-neutral-700 bg-clip-text w-[80%] mx-auto">
        <div className="flex">
          <div className="bg-neutral-700 py-[2px] px-[50px] -rotate-[20deg]"></div>
          <div className="bg-neutral-700 py-[2px] px-[50px] rotate-[20deg]"></div>
        </div>
        <div className="text-[50px] mt-[15px]">
          OneRoof
        </div>
        <p className="text-[20px] text-center font-semibold">
          Renting options near SRMIST made easy!
        </p>
        <div className="flex justify-between items-center text-neutral-600 bg-neutral-300 rounded-lg shadow-2xl w-full px-[30px] py-[10px] mt-[50px] mb-[30px]">
          <span className="font-bold">
            Search for PG&apos;s and Apartments.
          </span>
          <span>
            <GoSearch/>
          </span>
        </div> 
        <div className="absolute top-[20%] left-[25%] bg-[#A49DEA] p-[200px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob1"></div>
        <div className="absolute top-[-20%] left-[-15%] bg-[#9CD2F4] p-[200px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob2"></div>
        {/* <div className="absolute top-[30%] left-[30%] bg-pink-300 p-[150px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob3"></div>
        <div className="absolute top-[15%] right-[25%] bg-yellow-300 p-[170px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob3"></div> */}
    </div>
    </>
  )
}

export default Hero;

