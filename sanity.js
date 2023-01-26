import { 
    createImageUrlBuilder,
    createCurrentUserHook,
    createClient
} from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_STUDIO_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_STUDIO_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_STUDIO_API_VERSION;

export const config = {
    projectId,
    dataset,
    apiVersion,
    useCdn: process.env.NODE_ENV === "production",
}

export const sanityClient = createClient(config);
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
export const useCurrentUser = createCurrentUserHook(config);