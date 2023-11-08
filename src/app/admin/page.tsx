"use client"

import MainHeader from "@/components/MainHeader"
import { ContactMessage } from "@prisma/client"

import MessageBlock from "@/components/MessageBlock"

import { useEffect, useState } from "react"

import "./page.scss"

async function getMessages() {
  const response = await fetch('/api/contact');
  const data = await response.json();

  return data.messages;
}

export default function Admin() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  
  useEffect(() => {
    getMessages().then((messages) => {
      setMessages(messages);
    })
  }, [messages])

  return (
    <div id="admin">
      <MainHeader />

      <main>
        <div className="container">
          <h2 className="text-center">Últimas mensagens</h2>

          {messages.length > 0 ? messages.map((message) => (
            <MessageBlock message={message} key={message.id} />
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