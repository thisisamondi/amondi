import type { NextPage } from 'next'
import { sanityClient } from '../client'
import groq from 'groq'
import Info from '../components/Info'

export const getStaticProps = async () => {
  const query = groq`*[_type == 'about']{
  "imageUrl": image.asset->url,
  description,
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
      <Info
        title={about.title}
        image={about[0].imageUrl}
        description={about.description}
      />
    </div>
  )
}

export default About
