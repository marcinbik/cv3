import Head from 'components/Head'
import Navbar from 'components/Navbar'
import HeroBaner from 'components/HeroBaner'
import CardProduct from 'components/CardProduct'
import Contact from 'components/Contact'
import Image from 'next/image'
import Lead from 'components/Lead'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const callback = function (entries) {
      entries.forEach((entry) => {
        console.log(entry.target.classList)

        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeIn')
        } else {
          entry.target.classList.remove('animate-fadeIn')
        }
      })
    }

    const observer = new IntersectionObserver(callback)

    const targets = document.querySelectorAll('.js-show-on-scroll')
    targets.forEach((target) => {
      target.classList.add('opacity-0')
      observer.observe(target)
    })
  })

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
      <div className="grid grid-cols-12  gap-2    ">
        <div className=" h-fit md:h-screen bg-[url('/road.jpg')]   bg-cover col-span-12 overflow-hidden  relative z-0 ">
          <Navbar />

          <div className=" sm:h-0 overflow-hidden  col-span-12 md:h-28  "></div>
          <div className="flex items-center js-show-on-scroll place-content-center place-items-center justify-center">
            <HeroBaner href="#choice" />
          </div>
        </div>
      </div>

      <div className="xl:grid container font-semibold mt-20 js-show-on-scroll transition-all grid-cols-12 mx-auto  items-center gap-8  justify-center z-10   text-primary-700  mb-48  ">
        <div className="   justify-center items-center transition-all sm:col-span-12 md:col-span-8 text-lg md:text-4xl first-letter:text-5xl md:m-10 first-letter:mr-1 rounded-xl   p-3 md:p-20 ">
          <p>
            Dzięki stronie internetowej możesz przedstawić swoją ofertę,
            udzielać informacji o swoich produktach, a także prowadzić bloga i
            publikować interesujące treści.
          </p>

          <br />
          <p>
            Z naszą pomocą Twoja firma będzie mogła odnosić jeszcze większe
            sukcesy!
          </p>
        </div>

        <div className=" js-show-on-scroll col-span-4 mt-40 flex flex-col items-center z-0 justify-center   aspect-square   relative">
          <Image
            className=" z-0  bg-accent-200 rounded-full mx-auto  "
            src="/person.png"
            fill
            alt="person"
          />
        </div>
      </div>
      <Lead id={'choice'} text={'Wybierz usługę dla siebie'} />
      <div className="grid  place-items-center mx-auto container grid-cols-12  js-show-on-scroll">
        <CardProduct
          title={'Strona WordPress'}
          price={1499}
          text={Cardhelper}
          href={'services/#wordpress'}
        />
        <CardProduct
          title={'Sklep Internetowy'}
          price={2999}
          text={Cardhelper2}
          href={'services/#shop'}
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
          href={'services/#code'}
        />
      </div>
      <div className="pt-36"></div>
      <div className="mt-20">
        <Contact />
      </div>
    </>
  )
}
