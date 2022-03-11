import Link from 'next/link'
function NavBar() {
  return (
    <header className="flex items-center justify-between bg-black py-6 px-6 text-white sm:relative md:py-10">
      <h1 className="ml-10 cursor-pointer text-lg font-normal">
        <Link href="/">Rebecka Isberg</Link>
      </h1>

      <nav className="ml-4 flex flex-shrink-0 items-center gap-4 pr-60 font-light">
        <Link href="/about">About Me</Link>
        <Link href="/case">Case</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default NavBar
