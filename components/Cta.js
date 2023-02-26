import Link from 'next/link'

export default function Cta(href = '#') {
  return (
    <Link href={href.href} passHref>
      <button
        className="bg-primary-300  shadow-primary/20 drop-shadow-xl
          hover:bg-primary-700 text-primary-900 hover:text-primary-50 font-semibold py-3 px-6
          rounded-lg shadow-xl uppercase tracking-wider text-lg hover:from-primary-200 hover:to-primary-700
          hover:-translate-y-1 hover:scale-150 hover:ring-offset-2 hover:ring-primary-300 transition-all ease-out duration-500
          animate-bounce hover:animate-none"
      >
        Zamów Teraz
      </button>
    </Link>
  )
}
