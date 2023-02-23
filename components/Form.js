import React, { useState } from 'react'

const submitMail = async () => {
  const response = await fetch('/api/server')
}

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name === '' || email === '' || message === '') {
      alert(`Proszę wypełnij wszystkie pola `)
    } else {
      alert(`Dziękuję ${name} za pozostawienie wiadomości`)

      setName('')
      setEmail('')
      setMessage('')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-col-12 text-xl items-center  origin-center  p-10 "
    >
      <div className="grid col-span-8 justify-center mx-auto container">
        <label className="p-5 pl-0">Imie:</label>
        <input
          className="p-3 pl-0 border-2"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="p-5 pl-0 ">Email:</label>
        <input
          className="p-5 pl-0 border-2"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="p-5 pl-0">Wiadomość:</label>
        <textarea
          className="p-5 pl-0 border-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          className="p-5  bg-accent-300   w-60 h-14 xl:w-[20vw]  shadow-primary-200   m-10 drop-shadow-xl
          hover:bg-accent-500 text-gray-800 font-semibold py-2 px-4
          rounded-lg shadow"
          type="submit"
        >
          Wyślij Wiadomość
        </button>
      </div>
      <div></div>
    </form>
  )
}
export default ContactForm
