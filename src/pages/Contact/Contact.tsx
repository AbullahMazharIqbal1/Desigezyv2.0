import ContactForm from './ContactForm';
import Hero from './Hero';
export default function Contact() {
  return (
    <div className="min-h-screen bg-[#0C0C0C]">
      <main>
        <Hero />
        <ContactForm />
        {/* We will drop the Contact Form and Info section right here next! */}
      </main>
    </div>
  );
}