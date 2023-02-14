export default function CardProduct({ title, text, price }) {// eslint-disable-line
  const listItems = text.map((element) => (
    <div key={title + element} className="p-4">
      <p>{element}</p>
    </div>
  ))

  return (
    <div className=" max-w-md  container mb-10  justify-center bg-gradient-to-r from-primary-900 to-accent-700 rounded-lg col-span-12 ring-4 md:col-span-6 lg:col-span-3 z-0   overflow-hidden grid">
      <div className="  text-primary-50 py-16 container grow">
        <h2 className="text-center text-xl lg:text-3xl font-display font-bold mb-2">
          {title}
        </h2>
        <p className="mb-10 text-center font-display text-xl lg:text-3xl font-bold text-accent-300">
          od {price} zł
        </p>
        <div className="lg:text-lg">{listItems}</div>
        <p text={text} />
      </div>
    </div>
  )
}
