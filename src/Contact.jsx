import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="contact-card">
      <h2>Contact Me</h2>

      {submitted ? (
        <p className="success-text">Thank you! I’ll get back to you soon.</p>
      ) : (
        <form>
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />

          {/* Message */}
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
}

export default Contact;
