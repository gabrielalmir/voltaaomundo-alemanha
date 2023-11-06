"use client"
import logo from '@/assets/img/logo.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import './page.scss'

import { useLogout } from '@/hooks/use-logout'
import nookies from 'nookies'

export default function MainNavbar(
  { className }: { className?: string }
) {
  const navbarClassName = `navbar navbar-expand-lg ${className ?? 'navbar-dark bg-dark'}`
  const [isLogged, setIsLogged] = useState(false)
  const router = useRouter()

  const { logout } = useLogout()

  useEffect(() => {
    const cookies = nookies.get(null)
    const user = cookies['user']

    if (user) {
      setIsLogged(true)
    }
  }, [])

  async function handleLogout() {
    await logout()
    setIsLogged(false)
    router.push('/')
  }

  return (
    <nav className={navbarClassName} id="main-nav">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <Image src={logo} id="logo" alt="Bandeira da Alemanha" className="d-inline-block align-text-top" />
          <span className="fw-bold">Volta ao Mundo</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse justify-content-lg-end d-sm-none">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" className="nav-link" aria-current="true">
                Início
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/historia" className="nav-link">
                História
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/culinaria" className="nav-link">
                Culinária
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/fale-conosco" className="nav-link">
                Fale Conosco
              </Link>
            </li>

            {isLogged && (
              <li className="nav-item">
                <Link href="/logout" className="nav-link" onClick={handleLogout}>
                  Log out
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}
