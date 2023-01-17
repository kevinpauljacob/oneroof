import { FunctionComponent } from 'react'
import Card from './Card'

const Listing: FunctionComponent = () => {
  return (
    <div className='flex justify-center w-[90%] mx-auto'>
        <div className='grid sm:grid-cols-2 2xl:grid-cols-3 grid-rows-auto gap-8 py-[100px]'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Listing;