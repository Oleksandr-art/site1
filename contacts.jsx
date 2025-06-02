export default function Contacts() {
  return (
    <div className="min-h-screen text-center pt-20 px-4 space-y-4">
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <div className="flex justify-center space-x-6 mt-6">
        <a href="mailto:your@email.com" className="underline">Email</a>
        <a href="https://instagram.com/yourprofile" target="_blank" className="underline">Instagram</a>
        <a href="https://wa.me/123456789" target="_blank" className="underline">WhatsApp</a>
      </div>
    </div>
  );
}