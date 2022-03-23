import type { NextPage } from 'next'
import { sanityClient } from '../utils/client'
import groq from 'groq'
import InfoComponent from '../components/AboutComponent'

export const getStaticProps = async () => {
  const query = groq`*[_type == 'about']{
    title,
    image {
      ...,
      asset-> {
        _id,
        url,
        metadata,
      },
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
  return (
    <div>
      <InfoComponent
        image={about[0].image}
        description={about[0].description}
        title={about[0].title}
      />
    </div>
  )
}

export default About
