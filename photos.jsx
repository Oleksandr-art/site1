export default function Photos() {
  const images = Array.from({ length: 6 }, (_, i) => `/images/image${i + 1}.jpg`);
  return (
    <div className="min-h-screen pt-20 px-4">
      <h1 className="text-4xl text-center font-bold mb-6">Photo Gallery</h1>
      <div className="grid grid-cols-2 gap-4 max-w-3xl mx-auto">
        {images.map((src, i) => (
          <a key={i} href={src} target="_blank" rel="noopener noreferrer">
            <img src={src} alt={`Photo ${i + 1}`} className="w-full aspect-square object-cover rounded-xl hover:scale-105 transition" />
          </a>
        ))}
      </div>
    </div>
  );
}