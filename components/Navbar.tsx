import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [lang, setLang] = useState<'EN' | 'DE'>('EN')

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow z-50 px-4 py-3 flex justify-between items-center">
      <button onClick={() => setLang(lang === 'EN' ? 'DE' : 'EN')}>
        {lang}
      </button>
      <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-white flex flex-col items-center space-y-4 py-4 text-xl">
          <Link href="/about">About</Link>
          <Link href="/photos">Photos</Link>
          <Link href="/videos">Videos</Link>
          <Link href="/contacts">Contacts</Link>
        </div>
      )}
    </div>
  )
}
