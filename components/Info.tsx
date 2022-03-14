import Image from 'next/image'

const Info = ({ title, description, image }: any) => {
  console.log(description)

  return (
    <div className="flex min-h-screen justify-center bg-black text-white sm:relative md:py-10">
      <div className="absolute h-3/5 w-3/5">
        <Image src={image} layout="fill" objectFit="cover" />
      </div>
      <p className="text-white">{description}</p>
    </div>
  )
}

export default Info
