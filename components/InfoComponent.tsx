import Image from 'next/image'
import Container from './Container'

const InfoComponent = ({ description, image }: any) => {
  return (
    <Container>
      <div className="flex min-h-screen flex-col bg-black text-white">
        <div className="relative">
          <Image
            src={image.url}
            width={image.dimensions.width}
            height={image.dimensions.height}
          />
        </div>

        <div className="max-w-[500px]">
          <p>{description}</p>
        </div>
      </div>
    </Container>
  )
}

export default InfoComponent
