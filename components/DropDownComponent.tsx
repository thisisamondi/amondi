import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropwdown() {
  return (
    <Menu
      as="div"
      className="relative z-40 mr-10 bg-black text-right lg:hidden
      "
    >
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex w-full justify-center text-lg ">
              {open ? <AiOutlineClose /> : <AiOutlineMenu />}
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className="text-l absolute right-0 mt-2 min-h-screen w-32 origin-top-right bg-black focus:outline-none
        "
            >
              <div className="mr-5 inline-flex flex-col gap-1 py-1 font-normal">
                <Menu.Item>
                  <p>
                    <Link href="/about"> About</Link>
                  </p>
                </Menu.Item>

                <Menu.Item>
                  <p>
                    <Link href="/case">Case</Link>
                  </p>
                </Menu.Item>

                <Menu.Item>
                  <p>
                    <Link href="/contact">Contact</Link>
                  </p>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}
