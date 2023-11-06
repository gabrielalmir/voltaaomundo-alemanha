import './page.scss'

type BgBannerProps = {
  title: string
}

export default function BgBanner({ title }: BgBannerProps) {
  return (
    <div className="bg-banner">
      <div className="d-flex justify-content-center align-items-center">
        <h1>{title}</h1>
      </div>
    </div>
  )
}
