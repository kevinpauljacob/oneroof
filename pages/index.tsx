import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Hero from '../components/Hero'
import Filter from '../components/Filter'
import Listing from '../components/Listing'
import Socials from '../components/Socials'
interface Props {

}

const styles = {

};

const Home: NextPage<Props> = () => {
  return (
    <>
      <Head>
        <title>OneRoof</title>
        <meta name="description" content="Renting options near SRM made easy." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex flex-col lg:flex-row justify-end min-h-screen'>
        <section className='lg:fixed lg:left-0 flex flex-col justify-center lg:w-[35%] lg:h-screen mt-[50px] lg:mt-[0px] mb-[20px] lg:mb-[0px]'>
          <Hero/>
          <Filter/>
          <Socials/>
        </section>
        <section className='bg-gradient-to-tr from-[#C2B9F2]/60 to-[#ACDFF2]/60 lg:w-[65%]'>
          <Listing/>
        </section>
      </main>
    </>
  )
}

export default Home;