import Cta from "./cta";

export default function HeroBaner() {

    return(
        
         <div className=" lg:w-[40vw] backdrop-blur-xl bg-black/30 rounded-xl">
              <h1 className="  z-10 font-display  font-bold tracking-wide text-accent-100 p-10 text-3xl">
                Rozwiń skrzydła dla swojego biznesu z naszymi innowacyjnymi
                rozwiązaniami
              </h1>
              <p className="text-accent-100 xl:text-xl  pt-0 p-10">
                Jeśli jesteś właścicielem firmy lub prowadzisz działalność, to z
                pewnością wiesz, jak ważne jest posiadanie własnej strony
                internetowej. To właśnie tam Twoi potencjalni klienci będą
                szukać informacji o Tobie i Twojej ofercie. W dobie internetu,
                strona internetowa jest nieodzownym narzędziem, które pomaga
                budować wizerunek i zaufanie do Twojej marki.
              </p>
              <div className="flex p-10 mb-10 justify-center content-center">
                <Cta />
            </div>
       </div>
    )
}