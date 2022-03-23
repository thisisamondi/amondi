import Container from './Container'
import { NextImage } from './images/NextFigure'

const InfoComponent = ({ description, image, title }: any) => {
  return (
    <Container>
      {' '}
      <div className="flex min-h-screen justify-center">
        <div className="w-4/5 bg-black text-white">
          <h1 className="mb-10 text-center text-white lg:text-6xl">{title}</h1>
          <NextImage image={image} />
          <div className="mt-5 max-w-[500px]">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default InfoComponent
