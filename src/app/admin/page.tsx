"use client"
import MainHeader from "@/components/MainHeader"
import { ContactMessage } from "@prisma/client"

import { useEffect, useMemo, useState } from "react"
import './page.scss'

function setLocalStorage(key: string, value: any) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, value)
  }
}

function getLocalStorage(key: string) {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(key)
  }
}

export default function Admin() {
  const [messages, setMessages] = useState<ContactMessage[]>([])

  async function fetchMessages()  {
    const response = await fetch('/api/contact', { method: 'GET' })
    const data = await response.json()
    setLocalStorage('messages', JSON.stringify(data.messages))
    setMessages(data.messages)
  }

  const formattedMessages = useMemo(() => {
    return messages.map((message) => ({
      id: message.id,
      name: message.name,
      createdAt: new Date(message.createdAt).toLocaleString(),
      message: message.message,
    }));
  }, [messages]);

  useEffect(() => {
    const messages = getLocalStorage('messages')
    if (messages && typeof messages === 'string') { setMessages(JSON.parse(messages)) }
    else { fetchMessages() }

    const interval = setInterval(() => {
      fetchMessages()
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  async function handleActiveMessage(id: string) {
    await fetch(`/api/contact`, { method: 'PUT', body: JSON.stringify({ id, active: false }) })
      .then(async response => await response.json())
      .then(async data => {
        if (data.success) {
          await fetchMessages()
        }
      })
    alert('Mensagem apagada com sucesso!')
  }

  return (
    <div id="admin">
      <MainHeader />

      <main>
        <div className="container">
          <h2 className="text-center">Últimas mensagens</h2>

          {formattedMessages.length > 0 ? formattedMessages.map((message) => (
            <div key={message.id}>
              <div className="message-block">
                <div className="message">
                  <div className="message-header">
                    <h3>#{message.id.substring(0, 4)} {message.name}</h3>
                    <span>{message.createdAt.toLocaleString()}</span>
                  </div>
                  <div className="message-content">
                    <p>{message.message}</p>
                  </div>
                </div>
                <div className="message-actions">
                  <button className="btn btn-sm btn-danger" onClick={() => handleActiveMessage(message.id)}>Apagar</button>
                </div>
              </div>
            </div>
          )) : (
            <div className="message-block text-center mt-4">
              <h4>Nenhuma mensagem recebida</h4>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
