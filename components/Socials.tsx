import { FunctionComponent } from 'react'
import Link from 'next/link'
import { GiMineralHeart } from 'react-icons/gi'
import { TbExternalLink } from 'react-icons/tb'
import { FaLinkedin, FaTwitterSquare, FaGithubSquare, FaBlackTie } from 'react-icons/fa'

const Socials: FunctionComponent = () => {
  return (
    <div>
        <div className='flex justify-center font-semibold'>
            Made with 
            <span className='mx-[5px]'>
                <GiMineralHeart size={25}/>
            </span> Kevin
        </div>
        <div className='flex justify-center font-semibold my-[10px]'>
            View source code on 
            <span className='underline underline-offset-2 mx-[5px]'>
                <Link href="">Github</Link>
            </span> 
        </div>
        <Link href="/contribute" className='flex items-center font-bold border-2 rounded-lg border-black shadow-2xl hover:bg-neutral-600 hover:text-white transition duration-500 w-max mx-auto p-1.5'>
            <span className='px-[5px]'></span>
            Contribute to the Project
        </Link>
    </div>
  )
}

export default Socials