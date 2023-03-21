import Navbar from 'components/Navbar'
import Head from 'components/Head'
import Contact from 'components/Contact'
import Lead from 'components/Lead'
import ProductDescription from 'components/ProductDescription'
import { useEffect } from 'react'

export default function services() {
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
  return (
    <div className="">
      <Head />
      <div className="bg-primary-900  ">
        <Navbar />
      </div>
      <Lead text={'Wordpress'} />
      <div className="js-show-on-scroll  grid-cols-12 gap-4 bg-[url(/wordpress.jpg)] bg-cover md:p-10 rounded-xl container mx-auto mb-40">
        <div className=" sm:col-span-12 md:col-span-8 rounded-xl ]">
          <ProductDescription
            lead={'Prostota obsługi szybka realizacja'}
            list={[
              'Łatwość obsługi - dzięki prostemu interfejsowi i mnogości dostępnych narzędzi, WordPress jest łatwy do nauki i obsługi.',
              'Duża społeczność - WordPress ma ogromną społeczność użytkowników, którzy dzielą się swoimi doświadczeniami i rozwiązaniami.',
              'Dostępność szablonów i wtyczek - na WordPressie można znaleźć tysiące darmowych i płatnych szablonów oraz wtyczek, co ułatwia tworzenie i rozwijanie strony.',
            ]}
            text={
              ' Podsumowując, WordPress to popularna platforma do tworzenia stron internetowych, która ma wiele zalet. Dzięki prostemu interfejsowi i mnogości dostępnych narzędzi, WordPress jest łatwy do nauki i obsługi. Posiada również dużą społeczność użytkowników, którzy dzielą się swoimi doświadczeniami i rozwiązaniami. Na WordPressie można znaleźć tysiące darmowych i płatnych szablonów oraz wtyczek, co ułatwia tworzenie i rozwijanie strony. Wszystkie te cechy sprawiają, że WordPress jest jedną z najczęściej wybieranych platform do tworzenia stron internetowych.'
            }
          />
        </div>
      </div>
      <Lead text={'Sklep Internetowy'} />
      <div className=" grid-cols-12 gap-4 bg-[url(/pay.jpg)] bg-cover md:p-10 rounded-xl container mx-auto mb-40">
        <div className=" sm:col-span-12 md:col-span-8 rounded-xl ]">
          <ProductDescription
            lead={'Prostota obsługi szybka realizacja'}
            list={[
              'Łatwość obsługi - dzięki prostemu interfejsowi i mnogości dostępnych narzędzi, WordPress jest łatwy do nauki i obsługi.',
              'Duża społeczność - WordPress ma ogromną społeczność użytkowników, którzy dzielą się swoimi doświadczeniami i rozwiązaniami.',
              'Dostępność szablonów i wtyczek - na WordPressie można znaleźć tysiące darmowych i płatnych szablonów oraz wtyczek, co ułatwia tworzenie i rozwijanie strony.',
            ]}
            text={
              ' Podsumowując, WordPress to popularna platforma do tworzenia stron internetowych, która ma wiele zalet. Dzięki prostemu interfejsowi i mnogości dostępnych narzędzi, WordPress jest łatwy do nauki i obsługi. Posiada również dużą społeczność użytkowników, którzy dzielą się swoimi doświadczeniami i rozwiązaniami. Na WordPressie można znaleźć tysiące darmowych i płatnych szablonów oraz wtyczek, co ułatwia tworzenie i rozwijanie strony. Wszystkie te cechy sprawiają, że WordPress jest jedną z najczęściej wybieranych platform do tworzenia stron internetowych.'
            }
          />
        </div>
      </div>
      <Lead text={'Autorska aplikacja'} />
      <div className="js-show-on-scroll  grid-cols-12 gap-4 bg-[url(/code.jpg)] bg-cover md:p-10 rounded-xl container mx-auto mb-40">
        <div className=" sm:col-span-12 md:col-span-8 rounded-xl ]">
          <ProductDescription
            lead={'Prostota obsługi szybka realizacja'}
            list={[
              'Łatwość obsługi - dzięki prostemu interfejsowi i mnogości dostępnych narzędzi, WordPress jest łatwy do nauki i obsługi.',
              'Duża społeczność - WordPress ma ogromną społeczność użytkowników, którzy dzielą się swoimi doświadczeniami i rozwiązaniami.',
              'Dostępność szablonów i wtyczek - na WordPressie można znaleźć tysiące darmowych i płatnych szablonów oraz wtyczek, co ułatwia tworzenie i rozwijanie strony.',
            ]}
            text={
              ' Podsumowując, WordPress to popularna platforma do tworzenia stron internetowych, która ma wiele zalet. Dzięki prostemu interfejsowi i mnogości dostępnych narzędzi, WordPress jest łatwy do nauki i obsługi. Posiada również dużą społeczność użytkowników, którzy dzielą się swoimi doświadczeniami i rozwiązaniami. Na WordPressie można znaleźć tysiące darmowych i płatnych szablonów oraz wtyczek, co ułatwia tworzenie i rozwijanie strony. Wszystkie te cechy sprawiają, że WordPress jest jedną z najczęściej wybieranych platform do tworzenia stron internetowych.'
            }
          />
        </div>
      </div>

      <div />
      <div />

      <Contact />
    </div>
  )
}
