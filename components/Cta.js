import Link from 'next/link'

export default function Cta(href = '#') {
  return (
    <Link href={href.href} passHref>
      <button
        className="bg-accent-300  shadow-accent/20 drop-shadow-xl
          hover:bg-accent-700 text-accent-900 hover:text-accent-50 font-semibold py-3 px-6
          rounded-lg shadow-xl uppercase tracking-wider text-lg hover:from-accent-200 hover:to-accent-700
          hover:-translate-y-1 hover:scale-150 hover:ring-offset-2 hover:ring-accent-300 transition-all ease-out duration-500
          animate-bounce hover:animate-none"
      >
        Zamów Teraz
      </button>
    </Link>
  )
}
