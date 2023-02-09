import Head from '../components/Head.js'
import Image from 'next/image'
import Navbar from '@/components/Navbar.js'



export default function Home() {
  return (
    <>
      <Head/>
      <Navbar/>
      <div className="grid-cols-12   m-10">
      
        <div className="flex col-span-2 row-span-2">
        <h1 className=' font-display font-bold tracking-wide text-center text-3xl'>
          Rozwiń skrzydła dla swojego biznesu z naszymi innowacyjnymi rozwiązaniami
        </h1>
        </div>

      </div>
      
      
    </>

  )
}
