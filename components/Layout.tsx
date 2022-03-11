import Footer from './Footer'
import NavBar from './NavBar'

interface children {
  children: JSX.Element
}

export default function Layout({ children }: children) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  )
}
