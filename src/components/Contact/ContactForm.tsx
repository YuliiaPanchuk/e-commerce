import './ContactForm.css';

export function ContactForm() {
  return (
    <form method="POST" name="contactform" className="contactForm">
      <input type="text" name="name" placeholder="Enter your name" />

      <input type="email" name="email" placeholder="Enter your email" />

      <textarea name="message" placeholder="Messaage"></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}
