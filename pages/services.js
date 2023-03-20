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
      <div className="mt-20 grid-cols-12 gap-4 bg-[url(/wordpress.jpg)] bg-cover p-10 rounded-xl container mx-auto">
        <Lead text={'Wordpress'} />

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
      <div className="mt-20 grid-cols-12 gap-4 bg-[url(/wordpress.jpg)] bg-cover p-10 rounded-xl container mx-auto">
        <Lead text={'Wordpress'} />

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
      <div className="mt-20 grid-cols-12 gap-4 bg-[url(/wordpress.jpg)] bg-cover p-10 rounded-xl container mx-auto">
        <Lead text={'Wordpress'} />

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
      <div className="mt-20 grid-cols-12 gap-4 bg-[url(/wordpress.jpg)] bg-cover p-10 rounded-xl container mx-auto">
        <Lead text={'Wordpress'} />

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
