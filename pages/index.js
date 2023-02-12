import Head from 'components/Head'
import Navbar from 'components/Navbar'
import HeroBaner from 'components/HeroBaner'

export default function Home() {
  return (
    <>
      <Head />
      <Navbar />
      <div className="grid container grid-cols-12 grid-rows-12 items-center  justify-center w-screen ">
        <div className=" lg:h-[80vh] bg-[url('/road.jpg')] grid-cols-12 bg-cover w-screen overflow-hidden  relative z-0 ">
          <div className="flex lg:mt-20 content-center justify-center">
            <HeroBaner />
          </div>
        </div>
      </div>
    </>
  )
}
