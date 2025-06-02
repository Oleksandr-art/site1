export default function Videos() {
  const videos = [
    "https://www.youtube.com/embed/kXYiU_JCYtU",
    "https://www.youtube.com/embed/3YxaaGgTQYM",
    "https://www.youtube.com/embed/L_jWHffIx5E",
  ];
  return (
    <div className="min-h-screen pt-20 px-4 text-center">
      <h1 className="text-4xl font-bold mb-6">Videos</h1>
      {videos.map((src, i) => (
        <div key={i} className="my-6">
          <iframe
            width="80%"
            height="400"
            src={src}
            title={`Video ${i}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-xl"
          ></iframe>
        </div>
      ))}
    </div>
  );
}