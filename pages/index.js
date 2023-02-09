import Head from '../components/Head.js'
import Image from 'next/image'
import Navbar from '@/components/Navbar.js'



export default function Home() {
  return (
    <>
      <Head/>
      <Navbar/>
      <div className="grid container grid-cols-12 mt-5 lg:m-20  ">
      
        <div className="col-span-4"></div>
        <div className=' sm:col-span-12 lg:col-span-6'>
        <h1 className=' font-display font-bold tracking-wide  text-center text-3xl'>
          Rozwiń skrzydła dla swojego biznesu z naszymi innowacyjnymi rozwiązaniami
        </h1>
        </div>

      </div>
      
      
    </>

  )
}
