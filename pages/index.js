import Head from 'components/Head'
import Image from 'next/image'
import Navbar from 'components/Navbar'

export default function Home() {
  return (
    <>
      <Head />
      <Navbar />
      <div className="grid container grid-cols-12 grid-rows-12 gap-4 m-3  lg:m-20  ">
        <div className="col-span-4"></div>
        <div className=" sm:col-span-12 lg:col-span-6">
          <h1 className=" font-display font-bold tracking-wide  text-center text-3xl">
            Rozwiń skrzydła dla swojego biznesu z naszymi innowacyjnymi
            rozwiązaniami
          </h1>
        </div>
        <div className="lg:col-span-4  row-span-5 col-span-12 h-[65vh]  overflow-hidden relative z-0 ">
          <Image src="/heropic.jpg" alt='hero' fill />
        </div>
      </div>
    </>
  )
}
