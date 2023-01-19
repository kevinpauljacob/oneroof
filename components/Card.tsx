import { FunctionComponent } from 'react'
import { HiOutlineMapPin } from 'react-icons/hi2'
import Image from 'next/image'
import Link from 'next/link'
import City from '../public/assets/city.jpg'

const Card: FunctionComponent = () => {
  return (
    <>
    <Link href="/property" className='relative text-neutral-600 bg-neutral-200/50 shadow-2xl rounded-xl max-w-[320px] p-[15px]'>
        <div className='relative'>
            <Image className='rounded-2xl' src={City} alt="Property"/>
            <div className='h-[170px] w-full'>
              <h3 className='text-[20px] font-bold mt-[10px]'>
                Estancia Appartments
              </h3>
              <p className='flex mb-[10px]'>
                <span><HiOutlineMapPin size={20}/></span>
                Thailavaram, Chennai
              </p>
              <ul className='flex flex-col'>
                <li className='flex justify-between py-[1px]'>
                  <span>Distance</span>
                  <div>
                    <span>2km</span>
                  </div>
                </li>
                <li className='flex justify-between py-[1px]'>
                  <span>Rooms</span>
                  <div>
                    <span>{5}</span>
                  </div>
                </li>
                <li className='flex justify-between py-[1px]'>
                  <span>Gender</span>
                  <div>
                    <span>Male</span>
                  </div>
                </li>
                <li className='flex justify-between text-[22px] font-bold py-[1px]'>
                  <span>Rent</span>
                  <div>
                    <span className='text-green-600'>&#8377;{15000}</span>
                  </div>
                </li>
              </ul>
            </div>
        </div>
    </Link>
    </>
  )
}

export default Card