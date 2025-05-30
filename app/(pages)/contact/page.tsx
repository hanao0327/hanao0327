import Contact from './Contact';
import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">お問い合わせ</h1>
      <ContactForm />
      <Contact />
    </div>
  );
}
