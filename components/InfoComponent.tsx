import Image from 'next/image'
import Container from './Container'
import { urlFor } from '../utils/client'

const InfoComponent = ({ description, image }: any) => {
  return (
    <Container>
      <div className="flex justify-center">
        <div className="flex min-h-screen w-3/5 flex-col bg-black text-white">
          <Image
            src={urlFor(image.asset).url()!}
            width={image.asset.metadata.dimensions.width}
            height={image.asset.metadata.dimensions.height}
          />
          <div className="max-w-[500px]">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default InfoComponent
