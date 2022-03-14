import type { NextPage } from 'next'
import { sanityClient } from '../client'
import groq from 'groq'
import CaseComponent from '../components/CaseComponent'

export const getStaticProps = async () => {
  const query = groq`*[_type == "work"][0]{
    title,
    description,
    artist, 
    country,
    category
  }`

  const work = await sanityClient.fetch(query)

  return {
    props: {
      work,
    },
  }
}

const Case: NextPage = ({ work }: any) => {
  return (
    <div>
      <CaseComponent title={work.title} description={work.description} />
    </div>
  )
}

export default Case
