"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import logo from '@/assets/img/logo.svg';
import { useLogin } from "@/hooks/use-login";
import { useState } from "react";
import './page.scss';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true)

  const router = useRouter()
  const copyrightFirstYear = 2023;

  const {login} = useLogin();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email || !password) return;

    const response = await login(email, password);
    if (response['error']) return alert(response['error']);

    router.push('/admin');
  }

  return (
    <div id="login">
      <main className="text-center form-signin">
        <form onSubmit={handleSubmit}>
          <Image className="mb-4" src={logo} alt="Volta ao Mundo - Alemanha" width={72} height={57} />

          <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="nome@email.com" required
              onChange={event => setEmail(event.target.value)} value={email}
            />
            <label htmlFor="floatingInput">E-mail</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="senha" required
              onChange={event => setPassword(event.target.value)} value={password}
            />
            <label htmlFor="floatingPassword">Senha</label>
          </div>
          <button className="w-100 btn btn-lg btn-danger" type="submit"
            disabled={!disabled || !email || !password ? true : false}
          >Entrar</button>
          <p className="mt-5 mb-3 text-muted">
            &copy; Volta ao Mundo, Alemanha - {' '}
            { new Date().getFullYear() === copyrightFirstYear ? copyrightFirstYear : `${copyrightFirstYear} - ${new Date().getFullYear()}`}
          </p>
        </form>
      </main>
    </div>
  )
}
