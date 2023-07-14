export default function Contact() {
  return (
    <section>
      <form>
        <h2>Contact Me</h2>
        <input type="text" name="name" id="name" placeholder="Your Name" required />
        <input type="text" name="email" id="email" placeholder="Your Email" required />
        <textarea name="message" id="message" rows="4" placeholder="Your Message"></textarea>
        <button type="submit" name="send">Send</button>
      </form>
    </section>
  );
}