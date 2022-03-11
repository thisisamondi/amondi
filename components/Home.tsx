const HomePage = ({ title, image }: any) => {
  return (
    <div className="flex min-h-screen bg-black py-6 px-6 text-white sm:relative md:py-10">
      <div className="ml-52 mt-40 w-6/12">
        <h1 className=" text-6xl text-white">{title}</h1>
      </div>
    </div>
  )
}

export default HomePage
