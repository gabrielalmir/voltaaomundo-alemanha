import MainHeader from "@/components/MainHeader"
import { ContactMessage } from "@prisma/client"

import MessageBlock from "@/components/MessageBlock"
import { api } from "@/services/axios"
import './page.scss'

export default async function Admin() {
  const response = await api.get('contact', {
    headers: {
      'token': process.env.API_KEY
    }
  });

  const data = response.data;

  const messages: ContactMessage[] = data.messages;

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
