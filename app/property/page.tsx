"use client"
import { NextPage } from 'next'
import Head from 'next/head'
import Prop from '../../components/Property'

const Property: NextPage = () => {
  return (
    <>
      <Head>
        <title>OneRoof | Property</title>
        <meta name="description" content="Property details page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='min-h-screen flex items-center justify-center'>
        <Prop />
      </main>
    </>
  )
}

export default Property