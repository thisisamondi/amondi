import Image from 'next/image'
import Container from './Container'
import { urlFor } from '../utils/client'
import { NextImage } from './images/NextFigure'

const InfoComponent = ({ description, image }: any) => {
  return (
    <Container>
      <div className="flex justify-center">
        <div className="flex min-h-screen w-4/5 flex-col bg-black text-white">
          <NextImage
            image={image}
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
