export default function Lead({ id, text }) {
  return (
    <div className=" container text-left font-semibold mx-auto  text-accent-600 p-2 text-3xl md:text-6xl m-10 pb-20 ">
      <h3 id={id}>{text}</h3>
    </div>
  )
}
