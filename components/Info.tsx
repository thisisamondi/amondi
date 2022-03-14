import Image from 'next/image'

const Info = ({ title, description, image }: any) => {
  console.log('description', description)

  return (
    <div className="bg-black">
      <div className="ml-72 mr-64 flex min-h-screen flex-wrap justify-center text-white sm:relative md:py-10">
        <div className="relative h-[36rem] w-[70rem]">
          <Image src={image} layout="fill" objectFit="cover" />
        </div>
        <div className="grid-cols-2 lg:grid">
          <p className="sm:mt-4 md:-mt-32 lg:-mt-32">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Info
