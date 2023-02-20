import { useState } from 'react'
import Link from 'next/link'
import { AiFillCloseCircle } from 'react-icons/ai'
import { HiOutlineMapPin } from 'react-icons/hi2'
import { MdOutlineCall, MdOutlineFastfood, MdWaterDrop } from 'react-icons/md'
import { FaFan, FaToilet } from 'react-icons/fa'
import { CgSmartHomeRefrigerator } from 'react-icons/cg'
import { GiWashingMachine, GiPathDistance, GiRotaryPhone, GiWaterGallon, GiElectric } from 'react-icons/gi'
import { IoIosPeople } from 'react-icons/io'
import { IoReturnDownBack } from 'react-icons/io5'
import { BsFillPersonFill, BsWifi, BsHouseDoor, BsCurrencyDollar, BsClock, BsCashStack } from 'react-icons/bs'
import Map from './Map'
import Slider from './Slider'

import { PropertyType } from '../typings'
interface Props {
    property: PropertyType,
  }

const PropertyDetails = ({ property }: Props) => {

    const [slider, setSlider] = useState<boolean>(false);

    const handleSlider = () => {
        slider 
            ? setSlider(false)
            : setSlider(true);
    }

  return (
    <>
        <div className='relative flex flex-col md:flex-row w-full'>
            <section className='flex flex-col justify-between px-[15px] sm:px-[50px] xl:px-[100px] py-[60px] md:w-[65%] w-full'>
                <div>
                    <Link href="/" className='flex items-center font-bold border-2 rounded-lg border-black shadow-2xl hover:bg-neutral-400 hover:text-white transition duration-500 w-max p-1.5'>
                        <span className='px-[5px]'><IoReturnDownBack/></span>
                        Go Back
                    </Link>
                    <div className='bg-gradient-to-tr from-[#C2B9F2]/50 to-[#ACDFF2]/50 rounded-lg drop-shadow-2xl border p-5 my-[30px]'>
                        <h3 className='text-[30px] font-bold'>
                            {property.propertyName}
                        </h3>
                        <p className='flex font-bold'>
                            <span><HiOutlineMapPin size={20}/></span>
                            {property.location}
                        </p>
                        <p className='text-[#228B22] text-xl mt-1.5'>
                                <span>Rs.{property.rent}</span>
                        </p>
                    </div>
                    <ul className='flex flex-col'>
                        <li className='bg-white drop-shadow-xl rounded-lg p-5 my-[10px]'>
                            <p className='text-lg font-bold border-b border-neutral-400/60 pb-1.5 mb-5'>
                                Property Details
                            </p>
                            <div className='flex flex-wrap'>
                                <div className='flex items-center px-4 py-2'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <BsFillPersonFill size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Gender</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            <span>{property.gender}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <GiPathDistance size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Distance from Campus</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            <span>{property.distance}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <BsHouseDoor size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Rooms</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            <span>{property.rooms}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <FaToilet size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Bathrooms</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            <span>{property.bathrooms}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <BsClock size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>In-Time</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            <span>{property.inTime}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='bg-white drop-shadow-xl rounded-lg p-5 my-[10px]'>
                            <p className='text-lg font-bold border-b border-neutral-400/60 pb-1.5 mb-5'>
                                Amenities
                            </p>
                            <div className='flex flex-wrap'>
                                <div className='flex items-center px-4 py-2'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <BsWifi size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Wifi</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            <span>{property.wifi}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <CgSmartHomeRefrigerator size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Refrigerator</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            <span>{property.refrigerator}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <GiWashingMachine size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Washing Machine</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            <span>{property.washingMachine}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <FaFan size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Air Conditioner</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            <span>{property.airConditioner}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <GiElectric size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Power Back-up</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            <span>{property.powerBackup}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <MdWaterDrop size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>R.O. Unit</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            <span>{property.ro}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <GiWaterGallon size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Can Water</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            <span>{property.canWater}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='bg-white drop-shadow-xl rounded-lg p-5 my-[10px]'>
                            <p className='text-lg font-bold border-b border-neutral-400/60 pb-1.5 mb-5'>
                                Variables
                            </p>
                            <div className='flex flex-col'>
                                <div className='flex items-center px-4 py-2'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <MdOutlineFastfood size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Food</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            <span>{property.food}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <IoIosPeople size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Sharing Options</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            <span>{property.sharingOptions}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <BsCurrencyDollar size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Extra Charges for AC</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            <span>{property.extraEB}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <BsCashStack size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Booking Charges</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            <span>{property.bookingCharges}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='bg-white drop-shadow-xl rounded-lg p-5 my-[10px]'>
                            <p className='text-lg font-bold border-b border-neutral-400/60 pb-1.5 mb-5'>
                                Contact Details
                            </p>
                            <div className='flex flex-wrap'>
                                <div className='flex items-center px-4 py-2'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <BsFillPersonFill size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Property In-Charge</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            <span>{property.propertyInChargeName}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <MdOutlineCall size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Phone Number</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            <span>{property.phoneNumber}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center px-4 py-2'>
                                    <div className='text-neutral-700 pr-[10px]'>
                                        <GiRotaryPhone size={25}/>
                                    </div>
                                    <div className=''>
                                        <div className="text-sm font-bold text-neutral-500">
                                            <span>Landline</span>
                                        </div>
                                        <div className="text-md font-bold">
                                            <span>{property.landline}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className='bg-white drop-shadow-xl rounded-lg flex justify-between text-[30px] font-bold py-[10px] px-[15px] my-[10px]'>
                            <span>Rent</span>
                            <div className='text-[#228B22]'>
                                <span>Rs.{property.rent}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className='md:fixed top-0 right-0 flex flex-col justify-between h-[300px] md:h-screen md:w-[35%] w-full drop-shadow-2xl md:drop-shadow-xl px-[15px] sm:px-[50px] md:px-0 mx-auto mb-16'>
                <div className='h-[300px] md:min-h-[70%] w-full'>
                    <Map property={property}/>
                </div>
                <button className='relative md:min-h-[30%]' onClick={handleSlider}>
                    {property.images.map((image: string) => (
                        <div key={property._id} className="flex">
                            <div className="h-full w-full">
                                <img className='h-full w-full object-contain' src={image} alt="Property Image"/>
                            </div>
                            <div className='absolute top-0 left-0 text-white text-left font-bold bg-neutral-600/50 h-full w-full p-3'>
                                <p className='text-xl'>
                                    Photos
                                </p>
                                <p>
                                    Click to View in Full Screen
                                </p>
                            </div>
                        </div>
                    ))}
                </button>
            </section>
            {slider 
                    ? 
                        <div className='fixed top-0 left-0 z-10 flex justify-center items-center bg-neutral-600/70 h-screen w-full'>
                            <div className='w-[60%] h-[60%]'>
                                <Slider property={property}/>
                            </div>
                            <button className='fixed top-10 right-10 z-10 text-white' onClick={handleSlider}>
                                <AiFillCloseCircle size={35}/>
                            </button>
                        </div>
                    : null
            }
        </div>
        </>
    )
}

export default PropertyDetails