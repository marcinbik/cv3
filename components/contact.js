import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="">
      <div className="col-span-12 text-center text-accent-800 text-6xl m-10">
        <h3>Kontakt</h3>
      </div>
      <div className=" md:grid grid-cols-12 p-10 bg-primary-200 sm:w-fit md:w-max rounded-xl justify-items-center items-center justify-center text-primary-900 container font-semibold  mx-auto text-xl 2xl:text-4xl   ">
        <div className=" sm:col-span-12  place-items-center  aspect-video relative  md:col-span-4">
          <Image
            src="/blackLogo.png"
            alt="blackLogo"
            width={300}
            height={300}
          />
        </div>
        <div className="sm:col-span-12 md:col-span-3 hover:text-accent-900 transition-all   ">
          <FontAwesomeIcon icon={faPhone} />
          <Link href="tel:887407337" className="px-2">
            887407337
          </Link>
        </div>
        <div className="sm:col-span-12 md:col-span-5 hover:text-accent-900 transition-all   ">
          <FontAwesomeIcon icon={faEnvelope} />
          <Link href="mailto:marcinbikiewicz@gmail.com" className="px-2">
            marcinbikiewicz@gmail
          </Link>
        </div>
      </div>
    </div>
  )
}
