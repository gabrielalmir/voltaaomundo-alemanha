"use client";

import { useState } from 'react';

import { api } from "@/services/axios";
import { ContactMessage } from "@prisma/client";

export default function MessageBlock({ message }: { message: ContactMessage }) {
  const [disabled, setDisabled] = useState(false);

  async function handler(id: string) {
    setDisabled(true)
    const response = await api.put(
      "contact",
      { id, active: false },
    );

    if (response.status === 200) {
      return alert("Mensagem apagada com sucesso!");
      // return window.location.href = window.location.href;
    }

    return alert("Falha ao apagar mensagem");
  }

  return (
    <>
      <div key={message.id}>
        <div className="message-block">
          <div className="message">
            <div className="message-header">
              <h3>
                #{message.id.substring(0, 4)} {message.name}
              </h3>
              <span>{message.createdAt.toLocaleString()}</span>
            </div>
            <div className="message-content">
              <p>{message.message}</p>
            </div>
          </div>
          <div className="message-actions">
            {disabled ? (
              <button className="btn btn-sm btn-warning" disabled={true}>Processando</button>
            ) : (
              <button
                className="btn btn-sm btn-danger"
                onClick={() => handler(message.id)}
              >
                Apagar
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
