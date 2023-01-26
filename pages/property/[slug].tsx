import { sanityClient } from '../index'
import { PropertyType } from '../../typings'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import PropertyDetails from '../../components/Property'

interface Props {
    property: PropertyType,
}

const PropertyPage = ( { property }: Props ) => {
    const title = property.property;
  return (
    <>
        <Head>
            <title>OneRoof | {title}</title>
            <meta name="description" content="Property details page" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='min-h-screen flex items-center justify-center'>
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
    const query = `*[_type == "properties" && slug.current == $slug] [0]{
        _id,
        property,
        location,
        slug,
        gender,
        distance,
        rooms,
        bathrooms,
        food,
        wifi,
        refrigerator,
        washingmachine,
        airconditioner,
        sharingoptions,
        phonenumber->{
          phonenumber,
          landline
        },
        imageURL->{
          imageURL
        },
        rent,
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