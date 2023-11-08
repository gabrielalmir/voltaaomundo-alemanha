"use client";

import { useState } from 'react';

import { api } from "@/services/axios";
import { ContactMessage } from "@prisma/client";

export default function MessageBlock({ message }: { message: ContactMessage }) {
  const [disabled, setDisabled] = useState(false);

  async function handler(id: string) {
    setDisabled(true);
    return await api.put(
      "contact",
      { id, active: false },
    );
  }

  return (
    <div key={message.id}>
      <div className="message-block" style={{ opacity: disabled ? 0.5 : 1 }}>
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
            <button className="btn btn-sm btn-warning" disabled={true}>
              Processando
            </button>
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
  );
}
