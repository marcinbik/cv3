import Form from 'components/Form'
import Navbar from 'components/Navbar'
import Contact from 'components/Contact'

export default function services() {
  return (
    <div className="">
      <div className="bg-primary-900 mb-20">
      <Navbar/>

      </div>
      <div className="col-span-12 text-center text-accent-800 text-6xl mb-10 ">
        <h3>Napisz do mnie wiadmość</h3>
      </div>
      <Form />
      <div className="mb-20"></div>
      <Contact />
    </div>
  )
}
