import Head from 'components/Head'
import Navbar from 'components/Navbar'
import HeroBaner from 'components/HeroBaner'
import CardProduct from 'components/CardProduct'

export default function Home() {
  const Cardhelper = [
    'Sześć miesięcy darmowego wsparcia',
    'Szybka realizacja',
    'Dopasowanie do potrzeb klienta',
  ]

  const Cardhelper2 = [
    'Sześć miesięcy darmowego wsparcia',
    'Pomoc oraz szkolenia z obługi sklepu',
    'PrestaShop/Woocomerce ',
  ]

  const Cardhelper3 = [
    'Najnowsze technologie programistyczne',
    'Osobno przygotowany projekt UI',
    'Aplikacja projektowana pod twój biznes.',
  ]
  return (
    <>
      <Head />
      <Navbar />
      <div className="grid grid-cols-12 grid-rows-12 items-center  justify-center w-screen ">
        <div className=" lg:h-[80vh] bg-[url('/road.jpg')] grid-cols-12 bg-cover w-screen overflow-hidden  relative z-0 ">
          <div className="flex lg:mt-20 content-center justify-center">
            <HeroBaner />
          </div>
        </div>
      </div>
      <div className="h-30  p-10"></div>
      <div className="grid grid-cols-12 gap-12 text-black">
        <CardProduct
          img={'/wordpress.jpg'}
          title={'Strona WordPress'}
          price={1499}
          text={Cardhelper}
        />
        <CardProduct
          img={'/pay.jpg'}
          title={'Sklep Internetowy'}
          price={2999}
          text={Cardhelper2}
        />
        <CardProduct
          img={'/code.jpg'}
          title={'Autorska aplikacja'}
          price={6999}
          text={Cardhelper3}
        />
      </div>
    </>
  )
}
