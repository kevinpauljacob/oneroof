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


const NewProperty = ({ property }: Props) => {
  return (
    <>
        <div className="flex">
            <div className="w-[60%]">
            </div>
            <div className="min-h-screen bg-black fixed top-0 right-0 w-[40%]">
                <div className="min-h-screen w-full">
                    <Map property={property}/>
                </div>
            </div>
        </div>
    </>
  )
}

export default NewProperty; 