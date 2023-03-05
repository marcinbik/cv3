import Form from 'components/Form'
import Navbar from 'components/Navbar'
import Contact from 'components/Contact'
import Head from 'components/Head'
import Lead from 'components/Lead'

export default function services() {
  return (
    <div className="">
      <Head/>
      <div className="bg-primary-900 mb-20">
      <Navbar/>

      </div>
      <Lead text="Napisz do mnie wiadmość"/>
      <Form />
      <div className="mb-20"></div>
      <Contact />
    </div>
  )
}
