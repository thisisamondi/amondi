import Image from 'next/image'
import FiInstagram from 'react-icons/fa'

const ContactComponent = ({
  title,
  name,
  description,
  instagram,
  email,
  phone,
}: any) => {
  return (
    <div className="flex min-h-screen flex-col items-center bg-black text-white">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{email}</p>
    </div>
  )
}

export default ContactComponent
