import { FunctionComponent, useContext } from "react";
import { AppContext } from "../context/AppContext"

const Hero: FunctionComponent = () => {
  const {searchItem, setSearchItem} = useContext(AppContext);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  }
  console.log(searchItem)

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
          Finding your next home made easy!
        </p>
        <input 
          className="z-10 flex justify-between items-center text-neutral-600 placeholder-neutral-600 bg-neutral-500/40 rounded-lg shadow-2xl w-full px-[20px] py-[10px] min-[1200px]:my-[50px] my-[25px] font-bold focus:outline focus:ring-neutral-400" 
          placeholder="Search for PG&apos;s and Apartments." 
          type="text" 
          value={searchItem} 
          onChange={handleChange}
        /> 
        <div className="absolute top-[20%] left-[25%] bg-[#A49DEA] p-[200px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob1"></div>
        <div className="absolute top-[-20%] left-[-15%] bg-[#9CD2F4] p-[200px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob2"></div>
    </div>
    </>
  )
}

export default Hero;

