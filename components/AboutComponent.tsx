import Container from './Container'
import { NextImage } from './images/NextFigure'

const InfoComponent = ({ description, image }: any) => {
  return (
    <Container>
      <div className="flex min-h-screen justify-center">
        <div className="w-4/5 bg-black text-white">
          <NextImage image={image} />
          <div className="max-w-[500px]">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default InfoComponent
