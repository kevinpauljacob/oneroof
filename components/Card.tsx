import { FunctionComponent } from 'react'
import Image from 'next/image'
import City from '../public/assets/city.jpg'

const Card: FunctionComponent = () => {
  return (
    <div className='relative text-neutral-600 shadow-2xl rounded-2xl max-w-[320px]'>
        <div className='relative'>
            <Image className='rounded-t-2xl' src={City} alt="Property"/>
            <div className='bg-neutral-200 opacity-50 h-[180px] rounded-b-2xl w-full'>

            </div>
        </div>
        
    </div>
  )
}

export default Card