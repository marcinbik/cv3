import React, { useState } from 'react'

export default function Form() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [form, setForm] = useState('')

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmitForm = async (e) => {
    e.preventDefault()

    if (inputs.name && inputs.email && inputs.message) {
      setForm({ state: 'loading' })
      try {
        const res = await fetch(`api/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(inputs),
        })

        const { error } = await res.json()

        if (error) {
          setForm({
            state: 'error',
            message: error,
          })
          return
        }

        setForm({
          state: 'success',
          message: 'Your message was sent successfully.',
        })
        setInputs({
          name: '',
          email: '',
          message: '',
        })
      } catch (error) {
        setForm({
          state: 'error',
          message: 'Something went wrong',
        })
      }
    }
  }

  return (
    <form
      onSubmit={(e) => onSubmitForm(e)}
      className="grid grid-col-12 text-xl items-center  origin-center  p-10 "
    >
      <div className="grid col-span-8 justify-center mx-auto container">
        <label className="p-5 pl-0">Imie:</label>
        <input
          id='name'
          className="p-3 pl-0 border-2"
          type="text"
          value={inputs.name}
          onChange={handleChange}
          required
        />

        <label className="p-5 pl-0 ">Email:</label>
        <input
          id="email"
          className="p-5 pl-0 border-2"
          type="email"
          value={inputs.email}
          onChange={handleChange}
          required
        />

        <label className="p-5 pl-0">Wiadomość:</label>
        <textarea
          id="message"
          type='text'
          className="p-5 pl-0 border-2"
          value={inputs.message}
          onChange={handleChange}
          rows='5'
          required
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
