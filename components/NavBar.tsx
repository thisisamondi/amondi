import Link from 'next/link'
import { useRouter } from 'next/router'
import Dropwdown from './DropDownComponent'

function NavBar() {
  const router = useRouter()

  return (
    <header className="flex items-center justify-between bg-black py-6 text-white">
      <h1 className="ml-10 cursor-pointer text-lg font-normal md:text-2xl">
        <Link href="/">Malin Amondi Hansén</Link>
      </h1>
      {/* Primary Menu */}
      <nav className="mr-10">
        <ul className="hidden gap-4 font-light md:text-lg lg:flex">
          <li
            className={
              router.pathname == '/about'
                ? 'font-normal'
                : 'hover:text-gray-400'
            }
          >
            <Link href="/about">About Me</Link>
          </li>
          <li
            className={
              router.pathname == '/case' ? 'font-normal' : 'hover:text-gray-400'
            }
          >
            <Link href="/case">Case</Link>
          </li>
          <li
            className={
              router.pathname == '/contact'
                ? 'font-normal'
                : 'hover:text-gray-400'
            }
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Dropwdown />
    </header>
  )
}

export default NavBar
