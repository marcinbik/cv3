import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className=" grid xl:flex items-center  justify-center text-primary-900  font-semibold  container mx-auto text-2xl md:text-3xl m-5 ">
      <div className="transition-all hover:scale-110">

      <Image src="/blackLogo.png" alt="blackLogo" width={300} height={300} />
      </div>

      <div className="flex items-center hover:p-5 hover:text-accent-900 transition-all hover:scale-110  ">
        <FontAwesomeIcon icon={faPhone} />
        <Link
          href="tel:887407337"
          className="md:m-4 md:p-2 p-1 m-2
         "
        >
          887 407 337
        </Link>
      </div>

      <div className="flex items-center hover:p-5 hover:text-accent-900 transition-all hover:scale-110  ">
        <FontAwesomeIcon icon={faEnvelope} />
        <Link
          href="mailto:marcinbikiewicz@gmail.com"
          className="md:m-4 md:p-2 p-1 m-2"
        >
          marcinbikiewicz@gmail
        </Link>
      </div>
    </div>
  )
}
