import Container from './Container'
const HomePage = ({ title, image }: any) => {
  return (
    <Container>
      <div className="min-h-screen bg-black text-white sm:relative md:py-10">
        <div className="mt-40 w-6/12">
          <h1 className="animate-fade-in-down text-6xl text-white">{title}</h1>
        </div>
      </div>
    </Container>
  )
}

export default HomePage
