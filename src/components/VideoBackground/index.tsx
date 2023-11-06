import './page.scss'

type VideoBackgroundProps = {
  sourceURL: string
}

export default function VideoBackground({ sourceURL }: VideoBackgroundProps) {
  return (
    <video autoPlay={true} muted loop playsInline className="video-background img-fluid">
      <source src={sourceURL} type="video/mp4" />
    </video>
  )
}
