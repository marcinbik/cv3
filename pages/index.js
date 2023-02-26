import Head from 'components/Head'
import Navbar from 'components/Navbar'
import HeroBaner from 'components/HeroBaner'
import CardProduct from 'components/CardProduct'
import Contact from 'components/Contact'
import Form from 'components/Form'

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
    'Sześć miesięcy darmowego wsparcia',
    'Osobno przygotowany projekt UI',
    'Aplikacja pod twój biznes.',
  ]
  return (
    <>
      <Head />
      <div className="grid grid-cols-12  items-center gap-2  justify-center  ">
        <div className=" h-screen bg-[url('/road.png')]  bg-cover col-span-12 overflow-hidden  relative z-0 ">
          <Navbar />
          <div className="flex items-center  place-content-center place-items-center justify-center">
            <HeroBaner href="#choice" />
          </div>
        </div>
      </div>
      <div className="h-36  m-20"></div>
      <div className="col-span-12 text-center text-accent-800 text-6xl mb-20 ">
        <h3 id="choice" >Wybierz usługę dla siebie</h3>
      </div>
      <div className="grid  place-items-center mx-auto container grid-cols-12 text-black">
        <CardProduct
          title={'Strona WordPress'}
          price={1499}
          text={Cardhelper}
        />
        <CardProduct
          title={'Sklep Internetowy'}
          price={2999}
          text={Cardhelper2}
        />
        <CardProduct
          title={'Autorska aplikacja'}
          price={19999}
          text={Cardhelper3}
        />
        <CardProduct
          title={'Autorska aplikacja'}
          price={19999}
          text={Cardhelper3}
        />
      </div>
      <div className="pt-36">
      
      </div>
      <div className="mt-20">
        <Contact />
      </div>
    </>
  )
}
