import Head from 'components/Head'
import Navbar from 'components/Navbar'
import HeroBaner from 'components/HeroBaner'
import CardProduct from 'components/CardProduct'
import Contact from 'components/Contact'
import Image from 'next/image'

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
          <div className=" sm:h-0 overflow-hidden  col-span-12 md:h-32 2xl:h-40 "></div>
          <div className="flex items-center  place-content-center place-items-center justify-center">
            <HeroBaner href="#choice" />
          </div>
        </div>
      </div>
      <div className="col-span-12  text-center text-accent-800  text-6xl my-20 ">
        <h3 id="">Dlaczego warto być w internecie </h3>
      </div>
      <div className="grid container grid-cols-12 mx-auto  items-center gap-8  justify-center   text-primary-50  mb-28  ">
        <div className="  justify-center items-center col-span-8 text-2xl rounded-xl  bg-primary-800 p-10 ">
          <p>
            Strony internetowe i sklepy internetowe są niezbędnymi narzędziami
            dla każdej firmy, która chce dotrzeć do swoich klientów w
            dzisiejszych czasach.<br/> Dzięki nim możesz zaprezentować swoje produkty
            lub usługi w atrakcyjny sposób, dotrzeć do szerszej grupy odbiorców,
            a także zwiększyć swoją sprzedaż.<br/> Posiadanie własnej strony
            internetowej to nie tylko sposób na zwiększenie widoczności Twojej
            firmy w sieci, ale również idealna okazja do nawiązania
            bezpośredniego kontaktu z klientami.<br/><br/> Dzięki stronie internetowej
            możesz przedstawić swoją ofertę, udzielać informacji o swoich
            produktach, a także prowadzić bloga i publikować interesujące
            treści.<br/> Natomiast sklep internetowy to idealne rozwiązanie dla firm,
            które chcą sprzedawać swoje produkty przez Internet.<br/> Dzięki niemu
            klienci mogą łatwo i wygodnie złożyć zamówienie na Twoje produkty, a
            Ty możesz w prosty sposób zarządzać swoimi zapasami i realizować
            zamówienia.<br/><br/> Nie czekaj więc dłużej i zacznij działać już teraz!
            Zaufaj profesjonalistom i załóż swoją własną stronę internetową lub
            sklep internetowy.<br/><br/> Z naszą pomocą
            Twoja firma będzie mogła odnosić jeszcze większe sukcesy!
          </p>
        </div>
        <div className=" col-span-4 mt-40  bg-accent-700 rounded-full p-auto justify-center   w-full aspect-video relative">
          <Image src="/person.png" fill/>
        </div>
      </div>
      <div className="col-span-12 text-center text-accent-800 text-6xl mb-20 ">
        <h3 id="choice">Wybierz usługę dla siebie</h3>
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
      <div className="pt-36"></div>
      <div className="mt-20">
        <Contact />
      </div>
    </>
  )
}
