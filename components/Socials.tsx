import { FunctionComponent } from 'react'
import Link from 'next/link'
import { GiMineralHeart } from 'react-icons/gi'
import { TbExternalLink } from 'react-icons/tb'
import { FaLinkedin, FaTwitterSquare, FaGithubSquare, FaBlackTie } from 'react-icons/fa'

const Socials: FunctionComponent = () => {
  return (
    <div>
        <div className='flex justify-center font-semibold mt-[30px]'>
            Made with 
            <span className='mx-[5px]'>
                <GiMineralHeart size={25}/>
            </span> Kevin
        </div>
        <div className='flex justify-center font-semibold my-[10px]'>
            View source code on 
            <span className='underline underline-offset-2 animate-pulse mx-[5px]'>
                <Link href="">Github</Link>
            </span> 
        </div>
        <Link href="/contribute" className='flex justify-center font-semibold' >
            <p>
                Contribute to the Page
            </p>
            <p>
                <TbExternalLink/>
            </p>
        </Link>
    </div>
  )
}

export default Socials