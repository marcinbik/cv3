export default function Lead({ id, text }) {
  return (
    <div className="col-span-12 text-center text-accent-800 p-2 text-xl md:text-6xl mb-20 ">
      <h3 id={id}>{text}</h3>
    </div>
  )
}
