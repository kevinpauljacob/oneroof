import { sanityClient } from '../index'
import { PropertyType } from '../../typings'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import PropertyDetails from '../../components/Property'

interface Props {
    property: PropertyType,
}

const PropertyPage = ( { property }: Props ) => {
    const title = property.propertyName;
  return (
    <>
        <Head>
            <title>OneRoof | {title}</title>
            <meta name="description" content="Property details page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='bg-[#f8f8f8] flex items-center justify-center'>
            <PropertyDetails property={property} />
        </div>
    </>
  )
}

export default PropertyPage

export const getStaticPaths = async () => {
    const query = `*[_type == "properties"]{
        _id,
        slug{
            current
        }
      }`;

    const properties = await sanityClient.fetch(query);

    const paths = properties.map((property: PropertyType) => ({
        params: {
            slug: property.slug.current
        },  
    }))

    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type == "properties" && slug.current == $slug] [0] {
        _id,
        propertyName,
        location,
        slug,
        gender,
        distance,
        rooms,
        sharingOptions,
        bathrooms,
        food,
        ro,
        canWater,
        powerBackup,
        wifi,
        refrigerator,
        washingMachine,
        airConditioner,
        extraEB,
        inTime,
        bookingCharges,
        propertyInChargeName,
        phoneNumber[0],
        landline[0],  
        rent,
        images[],
        latitude,
        longitude,  
      }`;
    
    const property = await sanityClient.fetch(query, {
        slug: params?.slug
    })

    if (!property) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            property,
        },
        revalidate: 60
    }
}