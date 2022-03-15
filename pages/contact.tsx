import type { NextPage } from 'next'
import ContactComponent from '../components/ContactComponent'
import { sanityClient } from '../client'
import groq from 'groq'

export const getStaticProps = async () => {
  const query = groq`*[_type == 'contact']{
  title,
  name,
  "description": description[0].children[0].text,
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
  console.log(contact[0].email)
  const info = contact[0]

  return (
    <div>
      <ContactComponent
        title={info.title}
        name={info.name}
        description={info.description}
        instagram={info.instagram}
        email={info.email}
        phone={info.phone}
      />
    </div>
  )
}

export default Contact
