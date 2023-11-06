"use client"
import BgBanner from "@/components/BgBanner"
import MainHeader from "@/components/MainHeader"

import { useState } from "react"

import './page.scss'

export default function FaleConosco() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!name || !email || !message) return alert('Preencha todos os campos')

    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ name, email, message })
    })

    if (response.status === 201) {
      alert('Mensagem enviada com sucesso!')
      setName('')
      setEmail('')
      setMessage('')
    }
  }

  return (
    <>
      <MainHeader />
      <BgBanner title="Fale Conosco" />

      <main className="container">
        <h3 className="my-5 text-center fw-lighter">
          Sinta-se à vontade para entrar em contato conosco
        </h3>

        <form className="my-5" id="contact-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <label htmlFor="nome" className="form-label">
                Nome
              </label>
              <input type="text" className="form-control" id="nome" placeholder="Digite seu nome"
                onChange={event => setName(event.target.value)} value={name}
                required
              />
            </div>
            <div className="col-sm-12 col-md-6">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input type="email" className="form-control" id="email" placeholder="Digite seu e-mail"
                onChange={event => setEmail(event.target.value)} value={email}
                required
              />
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-12">
              <label htmlFor="mensagem" className="form-label">Mensagem</label>
              <textarea className="form-control" id="mensagem" rows={5} placeholder="Nos diga o que você está pensando"
                onChange={event => setMessage(event.target.value)} value={message}
                required
              ></textarea>
            </div>
          </div>

          <button type="submit" className="btn btn-primary mt-5">
            Enviar
          </button>
        </form>
      </main>

      <footer className="text-center">
        <p className="container">© Copyright <a href="https://github.com/gabrielalmir">Gabriel Almir</a> | Todos os direitos reservados</p>
      </footer>
    </>
  )
}
