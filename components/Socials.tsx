import { FunctionComponent } from 'react'
import Link from 'next/link'
import { GiMineralHeart } from 'react-icons/gi'
import { TbExternalLink } from 'react-icons/tb'
import { FaLinkedin, FaTwitterSquare, FaGithubSquare, FaBlackTie } from 'react-icons/fa'

const Socials: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center">
        <div className='flex justify-center font-semibold'>
            Made with 
            <span className='mx-[5px]'>
                <GiMineralHeart size={25}/>
            </span> Kevin
        </div>
        <div className='flex justify-center font-semibold my-[10px]'>
            View source code on 
            <span className='underline underline-offset-2 mx-[5px] animate-pulse'>
                <Link href="https://github.com/itaintkevin/oneroof">Github</Link>
            </span> 
        </div>
        {/* <Link href="/contribute" className='font-bold shadow-2xl rounded-lg bg-neutral-600/30 text-neutral-700 hover:text-neutral-300 hover:bg-neutral-600/60 transition duration-300 w-max p-2 cursor-pointer my-[10px]'>
            <div>
                Add Property
            </div>
        </Link> */}
    </div>
  )
}

export default Socials