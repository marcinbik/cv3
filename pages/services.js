import Navbar from 'components/Navbar'
import Head from 'components/Head'
import Contact from 'components/Contact'
import Lead from 'components/Lead'
import ProductDescription from 'components/ProductDescription'

 
export default function services() {
  return (
    <div className="">
      <Head />
      <div className="bg-primary-900  ">
        <Navbar />
      </div>
      <div className="mt-20"></div>
      <Lead text={'Opis Usług'} />
      <div className="bg-[url('/wordpress.jpg')] bg-cover h-fit">
        <div
          id="wordpress"
          className=" h-fit  container mx-auto  md:p-10  rounded-lg my-40 bg-cover col-span-12 overflow-hidden  relative z-0 "
        >
          <div className=" flex-initial  lg:w-[80vw] backdrop-blur-xl   bg-black/80   relative rounded-xl">
            <h1 className="z-10 font-display font-bold tracking-wide p-10 text-accent-100  text-3xl">
              Strona Wordpress dla twojej Firmy
            </h1>
            <div className="text-primary-50 xl:text-xl pt-0 p-10">
              <br />
              <h3 className="font-bold">Zalety WordPress:</h3>
              <br />
              <ul className="list-disc">
                <li>
                  Łatwość obsługi - dzięki prostemu interfejsowi i mnogości
                  dostępnych narzędzi, WordPress jest łatwy do nauki i obsługi.
                </li>
                <br />
                <li>
                  Duża społeczność - WordPress ma ogromną społeczność
                  użytkowników, którzy dzielą się swoimi doświadczeniami i
                  rozwiązaniami.
                </li>
                <br />
                <li>
                  Dostępność szablonów i wtyczek - na WordPressie można znaleźć
                  tysiące darmowych i płatnych szablonów oraz wtyczek, co
                  ułatwia tworzenie i rozwijanie strony.
                </li>
              </ul>
              <br />
              <br />

              <p>
                Podsumowując, WordPress to popularna platforma do tworzenia
                stron internetowych, która ma wiele zalet. <br />
                Dzięki prostemu interfejsowi i mnogości dostępnych narzędzi,
                WordPress jest łatwy do nauki i obsługi.
                <br /> Posiada również dużą społeczność użytkowników, którzy
                dzielą się swoimi doświadczeniami i rozwiązaniami.
                <br /> Na WordPressie można znaleźć tysiące darmowych i płatnych
                szablonów oraz wtyczek, co ułatwia tworzenie i rozwijanie
                strony. <br /> Wszystkie te cechy sprawiają, że WordPress jest
                jedną z najczęściej wybieranych platform do tworzenia stron
                internetowych.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Contact />
    </div>
  )
}
