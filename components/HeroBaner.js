import Cta from './Cta'

export default function HeroBaner(href) {
  return (
    <div className=" flex-initial lg:w-[50vw] backdrop-blur-xl bg-black/30 container lg:place-items-end relative rounded-xl">
      <h1 className="z-10 font-display font-bold tracking-wide p-10 text-accent-100  text-3xl">
        Rozwiń skrzydła dla swojego biznesu z naszymi innowacyjnymi
        rozwiązaniami
      </h1>
      <p className="text-primary-50 xl:text-xl pt-0 p-10">
        Jeśli jesteś właścicielem firmy lub prowadzisz działalność, to z
        pewnością wiesz, jak ważne jest posiadanie własnej strony internetowej.
        To właśnie tam Twoi potencjalni klienci będą szukać informacji o Tobie i
        Twojej ofercie. W dobie internetu, strona internetowa jest nieodzownym
        narzędziem, które pomaga budować wizerunek i zaufanie do Twojej marki.
      </p>
      <div className="flex p-10 mb-10 justify-center content-center">
        <Cta href={href.href} />
      </div>
    </div>
  )
}
