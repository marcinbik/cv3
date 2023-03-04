export default function ProductDescription({ title, lead, list, text, id='#' }) { // eslint-disable-line
  const listItems = list.map((element) => (
    <div key={title + element} className="p-4">
      <li>{element}</li>
      <br />
    </div>
  ))
  return (
    <div
      id={id}
      className=" h-fit  container mx-auto  md:p-10  rounded-lg my-40 bg-cover col-span-12 overflow-hidden  relative z-0 "
    >
      <div className=" flex-initial  lg:w-[80vw] backdrop-blur-xl   bg-black/80   relative rounded-xl">
        <h1 className="z-10 font-display font-bold tracking-wide p-10 text-accent-100  text-3xl">
          {title}
        </h1>
        <div className="text-primary-50 xl:text-xl pt-0 p-10">
          <br />
          <h3 className="font-bold">{lead}</h3>
          <br />
          <ul className="list-disc">{listItems}</ul>
          <br />
          <br />
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}
