export default function CardProduct({ title, text, price }) {// eslint-disable-line
  const listItems = text.map((element) => (
    <div key={title + element} className="p-4">
      <p>{element}</p>
    </div>
  ))

  return (
    <div className=" max-w-md mb-10  justify-center bg-gradient-to-r from-primary-700 to-primary-400 rounded-lg col-span-12  md:col-span-6 xl:col-span-3 z-0   overflow-hidden grid">
      <div className="  text-primary-50 py-16  grow">
        <h2 className="text-center text-xl lg:text-3xl font-display font-bold mb-2">
          {title}
        </h2>
        <p className="mb-10 text-center font-display text-xl lg:text-3xl font-bold text-accent-800">
          od {price} zł
        </p>
        <div className="lg:text-lg px-5">{listItems}</div>
        <p text={text} />
      </div>
    </div>
  )
}
