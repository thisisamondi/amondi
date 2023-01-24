import Image from 'next/image'
import Container from './Container'

const CaseComponent = ({ title, description, artist, category }: any) => {
  return (
    <Container>
      <div className="min-h-screen bg-black text-white">
        {/* TITLE */}
        <h1 className="text-center lg:text-6xl">{title}</h1>
        {/* DESCRIPTION */}
        <p className="mb-8 text-center">{description}</p>
        {/* GRID CONTAINER */}
        <div className="flex justify-center">
          {/* GRID */}
          <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {artist.map((artist: any, index: any) => (
              <div key={index}>
                <div className="relative mb-5 h-[18rem] w-[18rem] lg:h-[20rem] lg:w-[20rem]">
                  <Image
                    src={artist.image}
                    layout="fill"
                    objectFit="cover"
                    alt={artist.image.alt}
                  />
                </div>
                <p className="mt-1 text-xl">{artist.name}</p>
                {/* CATEGORY */}
                {console.log(artist.category)}
                {artist.category &&
                  artist.category.map((category: any, index: any) => (
                    <span key={index} className="md:none contents">
                      {(index ? ', ' : index[index.length - 1] ? ',' : '') +
                        category.title}
                    </span>
                  ))}

                {/* COUNTRY */}
                {artist.country.map((country: any, index: any) => (
                  <p key={index}>{(index ? ', ' : '') + country.country}</p>
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
