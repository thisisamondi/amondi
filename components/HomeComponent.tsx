import Container from './Container'
const HomePage = ({ title, image }: any) => {
  return (
    <Container>
      <div className="mt-40 ml-10 mr-10 min-h-screen bg-black text-white lg:w-7/12">
        <h1 className="animate-fade-in-down text-3xl text-white md:text-6xl ">
          {title}
        </h1>
      </div>
    </Container>
  )
}

export default HomePage
