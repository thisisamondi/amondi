import type { NextPage } from 'next'
import ContactComponent from '../components/ContactComponent'
import { sanityClient } from '../utils/client'
import groq from 'groq'

export const getStaticProps = async () => {
  const query = groq`*[_type == 'contact']{
  title,
  name,
  description,
  subDescription,
  instagram,
  email,
  phone,
  }
`
  const contact = await sanityClient.fetch(query)

  return {
    props: {
      contact,
    },
  }
}

const Contact: NextPage = ({ contact }: any) => {
  const info = contact[0]
  

  return (
    <div>
      <ContactComponent
        title={info.title}
        name={info.name}
        description={info.description}
        subDescription={info.subDescription}
        instagram={info.instagram}
        email={info.email}
        phone={info.phone}
      />
    </div>
  )
}

export default Contact
