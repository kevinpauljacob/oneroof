import { FunctionComponent } from 'react'
import { HiOutlineMapPin } from 'react-icons/hi2'
import { MdOutlineCall, MdOutlineFastfood } from 'react-icons/md'
import { FaFan, FaToilet } from 'react-icons/fa'
import { CgSmartHomeRefrigerator } from 'react-icons/cg'
import { GiWashingMachine, GiPathDistance, GiRotaryPhone } from 'react-icons/gi'
import { IoIosPeople } from 'react-icons/io'
import { BsFillPersonFill, BsWifi, BsHouseDoor } from 'react-icons/bs'

const Modal: FunctionComponent = () => {
  return (
    <div className='flex flex-col lg:flex-row bg-white/90 lg:bg-white/70 rounded-xl lg:h-[85%] lg:w-[80%] xl:w-[70%]'>
    <section className='flex flex-col justify-between max-[450px]:p-[15px] p-[30px] lg:w-[50%] xl:w-[45%]'>
        <div>
            <h3 className='text-[30px] font-bold mt-[10px]'>
                Estancia Appartments
            </h3>
            <p className='flex mb-[10px]'>
                <span><HiOutlineMapPin size={20}/></span>
                Thailavaram, Chennai
            </p>
            <ul className='flex flex-col'>
                <li className='text-[20px] font-semibold border-b border-neutral-400 py-[2px] mt-[30px] mb-[10px]'>
                    Property Details:
                </li>
                <li className='flex justify-between my-[2px]'>
                    <div className="flex items-center">
                        <span className='text-neutral-700 pr-[10px]'><BsFillPersonFill size={25}/></span>
                        <span>Gender</span>
                    </div>
                    <div>
                        <span>Male</span>
                    </div>
                </li>
                <li className='flex justify-between my-[2px]'>
                    <div className="flex items-center">
                        <span className='text-neutral-700 pr-[10px]'><GiPathDistance size={25}/></span>
                        <span>Distance from Campus</span>
                    </div>
                    <div>
                        <span>2km</span>
                    </div>
                </li>
                <li className='flex justify-between my-[2px]'>
                    <div className="flex items-center">
                        <span className='text-neutral-700 pr-[10px]'><BsHouseDoor size={25}/></span>
                        <span>Rooms</span>
                    </div>
                    <div>
                        <span>{5}</span>
                    </div>
                </li>
                <li className='flex justify-between my-[2px]'>
                    <div className="flex items-center">
                        <span className='text-neutral-700 pr-[10px]'><FaToilet size={25}/></span>
                        <span>Bathrooms</span>
                    </div>
                    <div>
                        <span>{2}</span>
                    </div>
                </li>
                <li className='flex justify-between my-[2px]'>
                    <div className="flex items-center">
                        <span className='text-neutral-700 pr-[10px]'><MdOutlineFastfood size={25}/></span>
                        <span>Food</span>
                    </div>
                    <div>
                        <span>Not Provided</span>
                    </div>
                </li>
                <li className='flex justify-between my-[2px]'>
                    <div className="flex items-center">
                        <span className='text-neutral-700 pr-[10px]'><BsWifi size={25}/></span>
                        <span>Wifi</span>
                    </div>
                    <div>
                        <span>Provided</span>
                    </div>
                </li>
                <li className='flex justify-between my-[2px]'>
                    <div className="flex items-center">
                        <span className='text-neutral-700 pr-[10px]'><CgSmartHomeRefrigerator size={25}/></span>
                        <span>Refrigerator</span>
                    </div>
                    <div>
                        <span>Provided</span>
                    </div>
                </li>
                <li className='flex justify-between my-[2px]'>
                    <div className="flex items-center">
                        <span className='text-neutral-700 pr-[10px]'><GiWashingMachine size={25}/></span>
                        <span>Washing Machine</span>
                    </div>
                    <div>
                        <span>Provided</span>
                    </div>
                </li>
                <li className='flex justify-between my-[2px]'>
                    <div className="flex items-center">
                        <span className='text-neutral-700 pr-[10px]'><FaFan size={25}/></span>
                        <span>Air Conditioner</span>
                    </div>
                    <div>
                        <span>Provided</span>
                    </div>
                </li>
                <li className='flex justify-between my-[2px]'>
                    <div className="flex items-center">
                        <span className='text-neutral-700 pr-[10px]'><IoIosPeople size={25}/></span>
                        <span>Sharing Options</span>
                    </div>
                    <div>
                        <span>1 | 2 | 3</span>
                    </div>
                </li>
            </ul>
            <ul className='flex flex-col'>
                <li className='text-[20px] font-semibold border-b border-neutral-400 py-[2px] mt-[30px] mb-[10px]'>
                    Contact Details:
                </li>
                <li className='flex justify-between my-[2px]'>
                    <div className="flex items-center">
                        <span className='text-neutral-700 pr-[10px]'><MdOutlineCall size={25}/></span>
                        <span>Phone Number</span>
                    </div>
                    <div>
                        <span>{1234567891}</span>
                    </div>
                </li>
                <li className='flex justify-between my-[2px]'>
                    <div className="flex items-center">
                        <span className='text-neutral-700 pr-[10px]'><GiRotaryPhone size={25}/></span>
                        <span>Landline</span>
                    </div>
                    <div>
                        <span>{1234567}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div className='flex justify-between text-[30px] font-bold'>
            <span>Rent</span>
            <div className='text-green-600'>
                <span>&#8377;{15000}</span>
            </div>
        </div>
    </section>
    <section className='flex flex-col rounded-r-xl bg-neutral-600/30 w-[65%]'>
        <div className='flex items-center justify-center lg:h-[55%]'>
            Map to be added 
        </div>
        <div className='flex items-center justify-center lg:h-[45%]'>
            Photos to be added
        </div>
    </section>
  </div>
  )
}

export default Modal