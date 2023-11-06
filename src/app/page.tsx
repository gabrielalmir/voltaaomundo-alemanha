import MainHeader from '@/components/MainHeader'
import VideoBackground from '@/components/VideoBackground'
import Link from 'next/link'
import './page.scss'

export default function Home() {
  return (
    <div className="hero">
      <MainHeader navbarClassName="navbar-dark" />

      <VideoBackground sourceURL={'/videos/germany.mp4'} />

      <main className="content">
        <h1>
          Venha conhecer a magnífica <br /><span className="text-decoration-underline">Alemanha</span>
        </h1>
        <Link href="/historia">Explorar</Link>
      </main>

      <footer id="main-footer">
        <p>
          video from:
          <a href="https://www.youtube.com/watch?v=nUutt-8Ys68">
            AbrakadaBaris | CINEMATIC Winter in Germany | DJI Spark
          </a>
          {' '} | site made by:{' '}
          <a href="https://github.com/gabrielalmir">Gabriel Almir</a>{' '}
          for educational purporses
        </p>
      </footer>
    </div>
  )
}
