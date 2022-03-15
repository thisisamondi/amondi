import type { NextPage } from 'next'
import { sanityClient } from '../client'
import groq from 'groq'
import CaseComponent from '../components/CaseComponent'

export const getStaticProps = async () => {
  const query = groq`*[_type == 'work']{
  title,
  description,
  "artist": artist[]->{name, "image": image.image.asset->url},
  "country": country[]->{country},
  "category": category[]->{title}
  }
`
  const work = await sanityClient.fetch(query)

  return {
    props: {
      work,
    },
  }
}

const Case: NextPage = ({ work }: any) => {
  const workCase = work[0]
  const artists = workCase?.artist
  const category = workCase?.category
  const country = workCase?.country

  return (
    <div>
      <CaseComponent
        title={work[0].title}
        description={work[0].description}
        category={category}
        country={country}
        artist={artists}
      />
    </div>
  )
}

export default Case
