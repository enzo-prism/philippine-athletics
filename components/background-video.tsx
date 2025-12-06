type BackgroundVideoProps = {
  src: string
  poster?: string
  className?: string
}

export function BackgroundVideo({ src, poster, className = "" }: BackgroundVideoProps) {
  return (
    <video
      className={`background-video ${className}`.trim()}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-hidden
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
