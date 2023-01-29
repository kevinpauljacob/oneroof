import Link from 'next/link'
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
  return (
    <>
        <div className='relative flex flex-col min-[1200px]:flex-row h-screen min-[1200px]:h-[85%] w-full md:w-[70%] min-[1200px]:w-[90%] 2xl:w-[80%]'>
            <section className='flex flex-col justify-between max-[412px]:p-[15px] p-[30px] min-[1200px]:p-[50px] min-[1200px]:w-[45%] w-full'>
                <div>
                    <Link href="/" className='flex items-center'>
                        <span className='px-[5px]'><IoReturnDownBack/></span>
                        Go Back
                    </Link>
                    <h3 className='text-[30px] font-bold mt-[10px]'>
                        {property.propertyName}
                    </h3>
                    <p className='flex mb-[10px]'>
                        <span><HiOutlineMapPin size={20}/></span>
                        {property.location}
                    </p>
                    <ul className='flex flex-col'>
                        <li className='text-[20px] font-semibold border-b border-neutral-400 py-[2px] mt-[30px] mb-[10px]'>
                            Property Details:
                        </li>
                        <li className='flex justify-between bg-neutral-200/50 rounded-md py-[10px] px-[15px] my-[5px]'>
                            <div className="flex items-center">
                                <span className='text-neutral-700 pr-[10px]'><BsFillPersonFill size={25}/></span>
                                <span>Gender</span>
                            </div>
                            <div>
                                <span>{property.gender}</span>
                            </div>
                        </li>
                        <li className='flex justify-between bg-neutral-200/50 rounded-md py-[10px] px-[15px] my-[5px]'>
                            <div className="flex items-center">
                                <span className='text-neutral-700 pr-[10px]'><GiPathDistance size={25}/></span>
                                <span>Distance from Campus</span>
                            </div>
                            <div>
                                <span>{property.distance}</span>
                            </div>
                        </li>
                        <li className='flex justify-between bg-neutral-200/50 rounded-md py-[10px] px-[15px] my-[5px]'>
                            <div className="flex items-center">
                                <span className='text-neutral-700 pr-[10px]'><BsHouseDoor size={25}/></span>
                                <span>Rooms</span>
                            </div>
                            <div>
                                <span>{property.rooms}</span>
                            </div>
                        </li>
                        <li className='flex justify-between bg-neutral-200/50 rounded-md py-[10px] px-[15px] my-[5px]'>
                            <div className="flex items-center">
                                <span className='text-neutral-700 pr-[10px]'><FaToilet size={25}/></span>
                                <span>Bathrooms</span>
                            </div>
                            <div>
                                <span>{property.bathrooms}</span>
                            </div>
                        </li>
                        <li className='flex justify-between bg-neutral-200/50 rounded-md py-[10px] px-[15px] my-[5px]'>
                            <div className="flex items-center">
                                <span className='text-neutral-700 pr-[10px]'><BsWifi size={25}/></span>
                                <span>Wifi</span>
                            </div>
                            <div>
                                <span>{property.wifi}</span>
                            </div>
                        </li>
                        <li className='flex justify-between bg-neutral-200/50 rounded-md py-[10px] px-[15px] my-[5px]'>
                            <div className="flex items-center">
                                <span className='text-neutral-700 pr-[10px]'><CgSmartHomeRefrigerator size={25}/></span>
                                <span>Refrigerator</span>
                            </div>
                            <div>
                                <span>{property.refrigerator}</span>
                            </div>
                        </li>
                        <li className='flex justify-between bg-neutral-200/50 rounded-md py-[10px] px-[15px] my-[5px]'>
                            <div className="flex items-center">
                                <span className='text-neutral-700 pr-[10px]'><GiWashingMachine size={25}/></span>
                                <span>Washing Machine</span>
                            </div>
                            <div>
                                <span>{property.washingMachine}</span>
                            </div>
                        </li>
                        <li className='flex justify-between bg-neutral-200/50 rounded-md py-[10px] px-[15px] my-[5px]'>
                            <div className="flex items-center">
                                <span className='text-neutral-700 pr-[10px]'><FaFan size={25}/></span>
                                <span>Air Conditioner</span>
                            </div>
                            <div>
                                <span>{property.airConditioner}</span>
                            </div>
                        </li>
                        <li className='flex justify-between bg-neutral-200/50 rounded-md py-[10px] px-[15px] my-[5px]'>
                            <div className="flex items-center">
                                <span className='text-neutral-700 pr-[10px]'><GiElectric size={25}/></span>
                                <span>Power Back-up</span>
                            </div>
                            <div>
                                <span>{property.powerBackup}</span>
                            </div>
                        </li>
                        <li className='flex justify-between bg-neutral-200/50 rounded-md py-[10px] px-[15px] my-[5px]'>
                            <div className="flex items-center">
                                <span className='text-neutral-700 pr-[10px]'><MdWaterDrop size={25}/></span>
                                <span>R.O. Unit</span>
                            </div>
                            <div>
                                <span>{property.ro}</span>
                            </div>
                        </li>
                        <li className='flex justify-between bg-neutral-200/50 rounded-md py-[10px] px-[15px] my-[5px]'>
                            <div className="flex items-center">
                                <span className='text-neutral-700 pr-[10px]'><GiWaterGallon size={25}/></span>
                                <span>Can Water</span>
                            </div>
                            <div>
                                <span>{property.canWater}</span>
                            </div>
                        </li>
                        <li className='flex justify-between bg-neutral-200/50 rounded-md py-[10px] px-[15px] my-[5px]'>
                            <div className="flex items-center">
                                <span className='text-neutral-700 pr-[10px]'><MdOutlineFastfood size={25}/></span>
                                <span>Food</span>
                            </div>
                            <div>
                                <span>{property.food}</span>
                            </div>
                        </li>
                        <li className='flex justify-between bg-neutral-200/50 rounded-md py-[10px] px-[15px] my-[5px]'>
                            <div className="flex items-center">
                                <span className='text-neutral-700 pr-[10px]'><IoIosPeople size={25}/></span>
                                <span>Sharing Options</span>
                            </div>
                            <div>
                                <span>{property.sharingOptions}</span>
                            </div>
                        </li>
                        <li className='flex justify-between bg-neutral-200/50 rounded-md py-[10px] px-[15px] my-[5px]'>
                            <div className="flex items-center">
                                <span className='text-neutral-700 pr-[10px]'><BsCurrencyDollar size={25}/></span>
                                <span>Extra Rates for AC</span>
                            </div>
                            <div>
                                <span>{property.extraEB}</span>
                            </div>
                        </li>
                        <li className='flex justify-between bg-neutral-200/50 rounded-md py-[10px] px-[15px] my-[5px]'>
                            <div className="flex items-center">
                                <span className='text-neutral-700 pr-[10px]'><BsClock size={25}/></span>
                                <span>In-Time</span>
                            </div>
                            <div>
                                <span>{property.inTime}</span>
                            </div>
                        </li>
                        <li className='flex justify-between bg-neutral-200/50 rounded-md py-[10px] px-[15px] my-[5px]'>
                            <div className="flex items-center">
                                <span className='text-neutral-700 pr-[10px]'><BsCashStack size={25}/></span>
                                <span>Booking Charges</span>
                            </div>
                            <div>
                                <span>{property.bookingCharges}</span>
                            </div>
                        </li>
                    </ul>
                    <ul className='flex flex-col'>
                        <li className='text-[20px] font-semibold border-b border-neutral-400 py-[2px] mt-[30px] mb-[10px]'>
                            Contact Details:
                        </li>
                        <li className='flex justify-between bg-neutral-200/50 rounded-md py-[10px] px-[15px] my-[5px]'>
                            <div className="flex items-center">
                                <span className='text-neutral-700 pr-[10px]'><BsFillPersonFill size={25}/></span>
                                <span>Property In-Charge</span>
                            </div>
                            <div>
                                <span>{property.propertyInChargeName}</span>
                            </div>
                        </li>
                        <li className='flex justify-between bg-neutral-200/50 rounded-md py-[10px] px-[15px] my-[5px]'>
                            <div className="flex items-center">
                                <span className='text-neutral-700 pr-[10px]'><MdOutlineCall size={25}/></span>
                                <span>Phone Number</span>
                            </div>
                            <div>
                                <span>{property.phoneNumber}</span>
                            </div>
                        </li>
                        <li className='flex justify-between bg-neutral-200/50 rounded-md py-[10px] px-[15px] my-[5px]'>
                            <div className="flex items-center">
                                <span className='text-neutral-700 pr-[10px]'><GiRotaryPhone size={25}/></span>
                                <span>Landline</span>
                            </div>
                            <div>
                                <span>{property.landline}</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='min-[1199px]:hidden flex justify-between text-[30px] mt-[10px] font-bold bg-neutral-200/50 rounded-md py-[10px] px-[15px]'>
                    <span>Rent</span>
                    <div className='text-green-600'>
                        <span>Rs.{property.rent}</span>
                    </div>
                </div>
            </section>
            <section className='min-[1200px]:fixed min-[1200px]:h-screen min-[1200px]:right-0 flex flex-col justify-between w-[85%] min-[1200px]:w-[55%] max-[1199px]:mb-[60px] p-[4%] mx-auto'>
                <div className='min-h-[300px] min-[1200px]:h-[45%] max-w-[700px] w-full'>
                    <Map property={property}/>
                </div>
                <div className='rounded-xl max-h-[400px] min-[1200px]:h-[45%] w-full max-w-[700px] max-[1199px]:my-[50px] my-[20px]'>
                    <Slider property={property}/>
                </div>
                <div className='hidden min-[1199px]:flex justify-between text-[30px] max-w-[700px] font-bold bg-neutral-200/50 rounded-md py-[10px] px-[15px]'>
                    <span>Rent</span>
                    <div className='text-green-600'>
                        <span>Rs.{property.rent}</span>
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}

export default PropertyDetails