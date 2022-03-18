import { createClient, createImageUrlBuilder } from 'next-sanity'

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: '90qbhger',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2021-03-25',
}

export const urlFor = (source) => createImageUrlBuilder(config).image(source)

export const sanityClient = createClient(config)
