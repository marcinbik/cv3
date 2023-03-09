export default function Lead({ id, text }) {
  return (
    <div className="col-span-12 container text-left mx-auto  text-accent-500 p-2 text-3xl md:text-6xl m-10 pb-20 ">
      <h3 id={id}>{text}</h3>
    </div>
  )
}
