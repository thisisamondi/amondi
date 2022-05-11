import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HomePage from '../components/HomeComponent'
import { sanityClient } from '../utils/client'
import groq from 'groq'

export const getStaticProps = async () => {
  const query = groq`*[_type == "home"][0]{
    ...,
    title,
    image,
  }`

  const data = await sanityClient.fetch(query)

  return {
    props: {
      data,
    },
  }
}

const Home: NextPage = ({ data }: any) => {
  console.log(data.image)

  return (
    <div>
      <head>
        <title>Rebecka Isberg</title>
        <link rel="icon" href="" />
        <meta name="description" content="Rebecka Isbergs portfolio where she has case work of her as a keyboard player, music director and musician."></meta>
      </head>
      <HomePage title={data.title} />
    </div>
  )
}

export default Home
