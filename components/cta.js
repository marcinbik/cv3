import Link from 'next/link'

export default function Cta() {
  return (
    <Link href="/services" passHref>
      <button
        className="bg-accent-300  transition-colors  shadow-primary/20 drop-shadow-xl
          hover:bg-accent-700 text-accent-900 hover:text-accent-100 font-semibold py-3 px-6
          rounded-lg shadow uppercase tracking-wider text-lg"
      >
        Sprawdź Ofertę
      </button>
    </Link>
  )
}
