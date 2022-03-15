import { FaInstagram } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

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
      <div>
        <FaInstagram />
        <p>
          {email}
          <span>
            {' '}
            <FiMail />
          </span>
        </p>
      </div>
    </div>
  )
}

export default ContactComponent
