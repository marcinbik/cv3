import Image from 'next/image'

export default function CardProduct({ img, title, text, price }) {  // eslint-disable-line
  const listItems = text.map((element) => (
    <div key={title + element} className="p-4">
      <p>{element}</p>
    </div>
  ))

  return (
    <div className="bg-primary-500 rounded-lg col-span-12 lg:col-span-4 z-0 overflow-hidden grid">
      <div className="aspect-video object-contain relative overflow-hidden ">
        <Image
          src={img}
          alt={title}
          fill
          className=" "
        />
      </div>
      <div className="px-12 text-primary-50 py-16 grow">
        <h2 className="text-center text-3xl font-display font-bold mb-2">
          {title}
        </h2>
        <p className="mb-8 text-center font-display text-3xl font-bold text-accent-700">
          od {price} zł
        </p>
        <div>{listItems}</div>
        <p  text={text} />
      </div>
    </div>
  )
}
