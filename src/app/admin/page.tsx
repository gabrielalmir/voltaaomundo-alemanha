"use client"

import MainHeader from "@/components/MainHeader"
import { ContactMessage } from "@prisma/client"

import MessageBlock from "@/components/MessageBlock"
import { api } from "@/services/axios"
import { useEffect, useState } from "react"

async function getMessages() {
  const response = await api.get('contact');

  if (response.status !== 200) {
    throw new Error('Failed to fetch data');    
  }
  
  const messages: ContactMessage[] = response.data.messages || [];

  return messages;
}

export default function Admin() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  
  useEffect(() => {
    getMessages().then((messages) => {
      setMessages(messages);
    })
  })

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