import Head from 'components/Head'
import Image from 'next/image'
import Navbar from 'components/Navbar'

export default function Home() {
  return (
    <>
      <Head />
      <Navbar />
      <div className="grid container grid-cols-12 grid-rows-12 items-center aspect-auto justify-center w-screen ">
        <div className="col-span-12 h-[70vh] bg-[url('/road.jpg')]  bg-cover w-screen overflow-hidden  relative z-0 ">
          <div className="">
          <h1 className=" z-10 font-display  font-bold tracking-wide text-accent-100 text-center text-3xl">
            Rozwiń skrzydła dla swojego biznesu z naszymi innowacyjnymi
            rozwiązaniami
          </h1>

          </div>
        </div>
      </div>
    </>
  )
}
