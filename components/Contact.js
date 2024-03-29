import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="bg-primary-900/90 mt-20">
      <div className=" md:grid grid-cols-12   sm:w-fit md:w-max  rounded-xl justify-items-center items-center justify-center text-primary-100 container font-semibold  text-lg lg:text-xl 2xl:text-4xl   ">
        <div className=" sm:col-span-12 container mx-auto flex justify-center aspect-video relative  md:col-span-4">
          <Image
            src="/logo.png"
            alt="blackLogo"
            fill
          />
        </div>
        <div className="sm:col-span-12  md:col-span-4 hover:text-accent-500 transition-all   ">
            <FontAwesomeIcon icon={faPhone} />
          <Link href="tel:887407337" className="px-2">
            887407337
          </Link>
        </div>
        <div className="sm:col-span-12 md:col-span-4  hover:text-accent-500 transition-all   ">
          <FontAwesomeIcon icon={faEnvelope} />
          <Link href="mailto:marcinbikiewicz@gmail.com" className="px-2">
            marcinbikiewicz@gmail
          </Link>
        </div>
      </div>
    </div>
  )
}
