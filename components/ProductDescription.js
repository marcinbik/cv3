export default function ProductDescription({

  title,
  lead,
  list,
  text,
  id = '#',
}) {
  const listItems = list.map((element) => (
    <div key={title + element} className="p-4">
      <li>{element}</li>
      <br />
    </div>
  ))
  return (
    <div className=" relative">
      <div
        id={id}
        className=""
      >
        <div className="md:flex bg-primary-800   rounded-xl">
          <h1 className="z-10 font-display font-bold tracking-wide p-5  text-accent-100  text-3xl">
            {title}
          </h1>
          <div className="text-primary-100 xl:text-xl m-10  ">
            <br />
            <h3 className="font-bold">{lead}</h3>
            <br />
            <ul className="list-disc ">{listItems}</ul>
            <br />
            <p className="" >{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
