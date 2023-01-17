import { FunctionComponent, useState } from 'react'
import { HiOutlineMapPin } from 'react-icons/hi2'
import { CgClose } from 'react-icons/cg'
import Image from 'next/image'
import City from '../public/assets/city.jpg'
import Modal from './Modal'

const Card: FunctionComponent = () => {

  const [modal, setModal] = useState(false);

  const handleModal = () => {
    modal
      ? setModal(false)
      : setModal(true)
  }

  return (
    <>
    <div onClick={handleModal} className='relative text-neutral-600 bg-neutral-200/50 shadow-2xl rounded-2xl max-w-[320px] p-[15px]'>
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
                    <span>&#8377;{15000}</span>
                  </div>
                </li>
              </ul>
            </div>
        </div>
    </div>
    { modal &&
      <div className='z-10 fixed top-0 left-0 flex justify-center items-center bg-neutral-600/60 backdrop-blur-lg h-screen w-full'>
        <div onClick={handleModal} className='fixed top-[5%] right-[6.5%] text-white'>
          <CgClose size={40}/>
        </div>
        <Modal/>
      </div>
    }
    </>
  )
}

export default Card