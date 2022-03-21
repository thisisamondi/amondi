import Image from 'next/image'
import Container from './Container'

const CaseComponent = ({ title, description, artist, category }: any) => {
  return (
    <Container>
      <div className="min-h-screen bg-black text-white">
        {/* TITLE */}
        <h1 className="text-center text-7xl">{title}</h1>
        {/* DESCRIPTION */}
        <p className="mb-10 text-center">{description}</p>
        {/* GRID CONTAINER */}
        <div className="flex justify-center">
          {/* GRID */}
          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {artist.map((artist: any, index: any) => (
              <div key={index}>
                <div className="relative mb-5 sm:h-[15rem] sm:w-[15rem] md:h-[15rem] md:w-[15rem] lg:h-[23rem] lg:w-[23rem]">
                  <Image
                    src={artist.image}
                    layout="fill"
                    objectFit="cover"
                    alt={artist.image.alt}
                  />
                </div>
                <p className="mt-1">{artist.name}</p>
                {/* CATEGORY */}
                <p>{category[0].title}</p>
                {/* COUNTRY */}
                {artist.country.map((country: any, index: any) => (
                  <span key={index}>
                    {(index ? ', ' : '') + country.country}
                  </span>
                ))}
              </div>
            ))}{' '}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default CaseComponent
