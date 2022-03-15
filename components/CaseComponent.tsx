import Image from 'next/image'

const CaseComponent = ({ title, description, artist }: any) => {
  console.log(artist)

  return (
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
              <div className="relative h-[23rem] w-[23rem]">
                <Image
                  src={artist.image}
                  layout="fill"
                  objectFit="cover"
                  alt={artist.image.alt}
                />
              </div>
              <p className="mt-1">{artist.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CaseComponent
