import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

function NavLink({ to, children }) {
  return (
    <Link
      href={to}
      passHref
      className="font-bold uppercase tracking-wide text-primary-100 py-2 px-8 hover:text-primary-900 hover:bg-primary-100 rounded-lg transition-colors"
    >
      {children}
    </Link>
  )
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute z-10 top-0 left-0 h-screen w-screen  md:hidden  font-bold bg-gradient-to-r from-primary-900 to-accent-700  transform ${
        open ? '-translate-x-0' : '-translate-x-full'
      } transition-tranform duration-200 else-in-out filter drop-shadow-md`}
    >
      <div
        className={
          'flex items-center justify-center filter drop-shadow-md shadow-primary-100 h-30'
        }
      >
        <Link className={'text-2xl h-[15vh] font-bold lg:hidden'} href="/">
          <Image src="/logo.png" width={150} height={150} alt="logo" />
        </Link>
      </div>
      <div className={'flex flex-col text-2xl py-20 mx-20 uppercase lg:hidden'}>
        <Link
          className=" p-2 text-center transition-colors hover:border-2 hover:bg-primary-900 rounded-md  my-4"
          href="/services"
          onClick={() => {
            setTimeout(() => {
              setOpen(!open)
            }, 100)
          }}
        >
          Moje usługi
        </Link>
        <Link
          className=" p-2 text-center transition-colors hover:border-2 hover:bg-primary-900 rounded-md  my-4"
          href="/about"
          onClick={() => {
            setTimeout(() => {
              setOpen(!open)
            }, 100)
          }}
        >
          O Mnie
        </Link>
        <Link
          className=" p-2 text-center transition-colors hover:border-2 hover:bg-primary-900 rounded-md  my-4"
          href="/contact"
          onClick={() => {
            setTimeout(() => {
              setOpen(!open)
            }, 100)
          }}
        >
          Kontakt
        </Link>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="flex filter   shadow-lg shadow-primary/5 text-primary-100   font-bold bg-gradient-to-r from-primary-900 to-accent-700   px-5 p-10 h-30  items-center">
      <MobileNav open={open} setOpen={setOpen} />

      <div
        className=" z-10 flex sticky w-8 min-h-900  flex-col justyfy-between  items-center md:hidden"
        onClick={() => {
          setOpen(!open)
        }}
      >
        <span
          className={`h-1 w-full mt-1 bg-primary-200 rounded-lg  transform transition duraton-300 ease-in-out ${
            open ? 'rotate-45 -translate-y-3.5' : ''
          }`}
        />
        <span
          className={` h-1 w-full mt-1 bg-primary-200 rounded-lg  transform transition duraton-300 ease-in-out ${
            open ? 'rotate-45 -translate-y-3.5' : ''
          }`}
        />
        <span
          className={`h-1 w-full mt-1 bg-primary-200 rounded-lg transform transition duraton-300 ease-in-out ${
            open ? 'rotate-45 -translate-y-3.5' : ''
          }`}
        />
        <span
          className={`h-1 w-full mt-1 bg-primary-200 rounded-lg transform transition duraton-300 ease-in-out ${
            open ? 'rotate-45 -translate-y-3.5' : ''
          }`}
        />
      </div>

      <div className="hidden md:sticky filter  w-[100vw] h-fit md:flex items-center">
        <Link href="/" passHref className="mr-4">
          <Image src="/logo.png" alt="logonav" width={100} height={100} />
        </Link>
        <NavLink to="/services">Moje Usługi</NavLink>
        <NavLink to="/about">O Mnie</NavLink>
        <NavLink to="/contact">Kontakt</NavLink>
      </div>
    </nav>
  )
}
