import Image from 'next/image'

export default function Photos() {
  const images = Array.from({ length: 12 }, (_, i) => `/images/photo${i + 1}.jpg`)

  return (
    <div className="py-10 px-4 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">Photo Gallery</h1>
      <div className="grid grid-cols-2 gap-4">
        {images.map((src, index) => (
          <a key={index} href={src} target="_blank">
            <img
              src={src}
              alt={`photo${index + 1}`}
              className="rounded-lg object-cover aspect-square w-full hover:opacity-80 transition"
            />
          </a>
        ))}
      </div>
    </div>
  )
}
