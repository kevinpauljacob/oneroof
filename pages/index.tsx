import Head from 'next/head'
import Link from 'next/link'
import Hero from '../components/Hero'
import Cards from '../components/Cards'
import Socials from '../components/Socials'
import { HiOutlineMapPin } from 'react-icons/hi2'

import { PropertyType } from '../typings'
import { createClient }from 'next-sanity'
import config from '../sanity.config'

export const sanityClient = createClient(config);

interface Props {
  properties: [PropertyType];
}

const Home = ({ properties }: Props) => {
  console.log(properties);
  return (
    <>
      <Head>
        <title>OneRoof</title>
        <meta name="description" content="Renting options near SRM made easy." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='flex flex-col lg:flex-row justify-end min-h-screen'>
        <section 
          className='lg:fixed lg:left-0 flex flex-col justify-center lg:w-[35%] lg:h-screen mt-[50px] lg:mt-[0px] mb-[20px] lg:mb-[0px]'>
          <Hero/>
          <Socials/>
        </section>
        <section className='relative bg-gradient-to-tr from-[#C2B9F2]/60 to-[#ACDFF2]/60 lg:w-[65%]'>
          <Cards properties={properties} />
        </section>
      </main>
    </>
  )
}

export default Home;

export const getServerSideProps = async () => {
  const query = `*[_type == "properties"]{
   _id,
   property,
   location,
   slug,
   gender,
   distance,
   rooms,
   imageURL->{
     imageURL
   },
   rent,
 }`;

  const properties = await sanityClient.fetch(query);

  return {
   props: {
     properties,
   },
 }
}