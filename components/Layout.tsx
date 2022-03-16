import Footer from './Footer'
import NavBar from './NavBar'

interface children {
  children: JSX.Element
}

export default function Layout({ children }: children) {
  return (
    <div className="bg-black">
      <NavBar />
      {children}
      <Footer />
    </div>
  )
}
