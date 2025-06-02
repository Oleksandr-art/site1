import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const photos = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg",
];

const videos = [
  "https://www.youtube.com/embed/kXYiU_JCYtU",
  "https://www.youtube.com/embed/3YxaaGgTQYM",
  "https://www.youtube.com/embed/L_jWHffIx5E",
];

export default function PortfolioLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState("EN");
  const [photoIndex, setPhotoIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="fixed top-0 w-full bg-white z-50 shadow-md flex justify-between items-center px-4 py-2">
        <div>
          <Button variant="ghost" onClick={() => setLang(lang === "EN" ? "DE" : "EN")}>{lang}</Button>
        </div>
        <div>
          <Button variant="ghost" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center text-2xl space-y-6 z-40">
          {['About me', 'Photos', 'Videos', 'Contacts'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>
          ))}
        </motion.div>
      )}

      <div className="pt-20 px-4">
        <section id="photos" className="my-10 text-center">
          <img
            src={photos[photoIndex]}
            alt="Gallery preview"
            className="w-full max-w-xl mx-auto rounded-2xl"
          />
          <div className="flex justify-center mt-4 space-x-4">
            <Button onClick={() => setPhotoIndex((photoIndex - 1 + photos.length) % photos.length)}>&larr;</Button>
            <Button onClick={() => setPhotoIndex((photoIndex + 1) % photos.length)}>&rarr;</Button>
          </div>
        </section>

        <section id="videos" className="my-10 text-center">
          <div className="relative w-full max-w-xl mx-auto aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={videos[videoIndex]}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-2xl"
            ></iframe>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <Button onClick={() => setVideoIndex((videoIndex - 1 + videos.length) % videos.length)}>&larr;</Button>
            <Button onClick={() => setVideoIndex((videoIndex + 1) % videos.length)}>&rarr;</Button>
          </div>
        </section>

        <section id="contacts" className="my-10 text-center space-y-4">
          <h2 className="text-xl font-semibold">Contact Me</h2>
          <div className="flex justify-center space-x-6">
            <a href="mailto:your@email.com" className="underline">Email</a>
            <a href="https://instagram.com/yourprofile" target="_blank" className="underline">Instagram</a>
            <a href="https://wa.me/123456789" target="_blank" className="underline">WhatsApp</a>
          </div>
        </section>
      </div>
    </div>
  );
}