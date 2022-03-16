import type { NextPage } from 'next'
import { sanityClient } from '../client'
import groq from 'groq'
import InfoComponent from '../components/InfoComponent'

export const getStaticProps = async () => {
  const query = groq`*[_type == 'about']{
    image {
      "url": asset->url,
      "dimensions": asset->metadata.dimensions
    },

  "description": description[0].children[0].text,
}`

  const about = await sanityClient.fetch(query)

  return {
    props: {
      about,
    },
  }
}

const About: NextPage = ({ about }: any) => {
  console.log(about)
  return (
    <div>
      <InfoComponent
        title={about.title}
        image={about[0].image}
        description={about[0].description}
      />
    </div>
  )
}

export default About
