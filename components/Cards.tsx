import { useContext } from "react";
import { HiOutlineMapPin } from 'react-icons/hi2'
import { AppContext } from "../context/AppContext"
import Link from 'next/link'

import { PropertyType } from '../typings'

interface Props {
  properties: [PropertyType];
}

const Cards = ({ properties }: Props) => {
  const {searchItem} = useContext(AppContext);
  return (
    <div className='grid sm:grid-cols-2 2xl:grid-cols-3 grid-rows-auto gap-8 py-[100px] w-[90%] mx-auto'>
      { 
        properties
        .filter(property => {
          if(searchItem == "") return property
          else if (property.propertyName.toLowerCase().includes(searchItem.toLowerCase())) return property
        })
        .map(property => (
          <Link 
            key={property._id} 
            href={`/property/${property.slug.current}`}
            className="mx-auto"
          >
            <div className='relative text-neutral-600 bg-neutral-200/50 shadow-2xl cursor-pointer ease-in-out duration-300 hover:scale-105 rounded-xl max-w-[300px] p-[15px]'>
              <img className='max-h-[200px] max-w-[250px] object-contain rounded-2xl' src={property.images} alt="Property"/>
              <div className='h-[170px] w-full'>
                <h3 className='text-[20px] font-bold mt-[10px]'>
                  {property.propertyName}
                </h3>
                <p className='flex mb-[10px]'>
                  <HiOutlineMapPin size={20}/>
                  {property.location}
                </p>
                <ul className='flex flex-col'>
                  <li className='flex justify-between py-[1px]'>
                    <span>Distance</span>
                    <span>{property.distance}</span>
                  </li>
                  <li className='flex justify-between py-[1px]'>
                    <span>Rooms</span>
                    <span>{property.rooms}</span>
                  </li>
                  <li className='flex justify-between py-[1px]'>
                    <span>Gender</span>
                    <span>{property.gender}</span>
                  </li>
                  <li className='flex justify-between text-[22px] font-bold py-[1px]'>
                    <span>Rent</span>
                    <span className='text-green-600'>&#8377;{property.rent}</span>
                  </li>
                </ul>
              </div>
            </div>
          </Link>
      ))}
    </div>
  )
}

export default Cards;
