

export default function CardProduct({ title, text, price }) {// eslint-disable-line
  const listItems = text.map((element) => (
    <div key={title + element} className="p-4">
      <p>{element}</p>
    </div>
  ))

  return (
    <div className=" max-w-lg lg:max-w-xl justify-center bg-gradient-to-r from-primary-900 to-accent-700 rounded-lg col-span-12 ring-4  lg:col-span-4 z-0 m-2  overflow-hidden grid">
      <div className="px-12  text-primary-50 py-16 container grow">
        <h2 className="text-center text-xl lg:text-3xl font-display font-bold mb-2">
          {title}
        </h2>
        <p className="mb-20 text-center font-display text-xl lg:text-3xl font-bold text-accent-300">
          od {price} zł
        </p>
        <div className="  lg:text-lg">{listItems}</div>
        <p text={text} />
      </div>
    </div>
  )
}
