const videos = [
  "https://www.youtube.com/embed/kXYiU_JCYtU",
  "https://www.youtube.com/embed/3YxaaGgTQYM",
  "https://www.youtube.com/embed/L_jWHffIx5E"
]

export default function Videos() {
  return (
    <div className="py-10 text-center">
      <h1 className="text-4xl font-bold mb-6">My Videos</h1>
      {videos.map((src, index) => (
        <div key={index} className="my-6">
          <iframe
            width="80%"
            height="400"
            src={src}
            title={`video-${index}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl"
          ></iframe>
        </div>
      ))}
    </div>
  )
}
