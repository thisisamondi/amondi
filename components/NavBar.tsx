import Link from 'next/link'
import { useRouter } from 'next/router'

function NavBar() {
  const router = useRouter()

  return (
    <header className="flex items-center justify-between bg-black py-6 px-6 text-white sm:relative md:py-10">
      <h1 className="ml-10 cursor-pointer text-lg font-normal">
        <Link href="/">Rebecka Isberg</Link>
      </h1>

      <nav className="ml-4 pr-60 font-light">
        <ul className="flex gap-4">
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
    </header>
  )
}

export default NavBar
