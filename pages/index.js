import Head from 'components/Head'
import Image from 'next/image'
import Navbar from 'components/Navbar'

export default function Home() {
  return (
    <>
      <Head />
      <Navbar />
      <div className="grid container grid-cols-12 grid-rows-12 items-center justify-center   ">
        <div className="col-span-12 h-[70vh] bg-[url('/road.jpg')] bg-cover  overflow-hidden w-screen relative z-0 ">
          <h1 className=" content-end font-display  font-bold tracking-wide  text-center text-3xl">
            Rozwiń skrzydła dla swojego biznesu z naszymi innowacyjnymi
            rozwiązaniami
          </h1>
        </div>
      </div>
    </>
  )
}
