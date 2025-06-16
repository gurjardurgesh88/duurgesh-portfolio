import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const ContactSection = () => {
  const contactRef = useRef();
  const formRef = useRef();
  const isVisible = useIntersectionObserver(contactRef, { threshold: 0.3 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_4ylvhkt",
        "template_2nnneka",
        formRef.current,
        "HhZExZ2M17HCwGGVd"
      )
      .then(() => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((err) => alert("Failed to send: " + err.text));
  };

  return (
    <section
      id="contact"
      ref={contactRef}
      className="pt-24 scroll-mt-32 py-20 px-4 sm:px-8 bg-black text-white dark:bg-white dark:text-black transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 orbitron neon-glow-pink dark:neon-glow-none ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div
            className={`${
              isVisible ? "animate-slide-left" : "opacity-0"
            } space-y-6`}
          >
            <h3 className="text-2xl font-bold text-cyan-400 dark:text-cyan-600">
              Let's Connect
            </h3>
            <p className="text-gray-300 dark:text-gray-700 text-base sm:text-lg">
              I'm open to freelance work, collaborations, or full-time
              opportunities. Feel free to reach out.
            </p>

            <div className="space-y-4 text-sm sm:text-base">
              <div className="flex items-center gap-3">
                <i className="fas fa-envelope text-cyan-400 text-lg"></i>
                <a
                  href="mailto:pateldurgesh9399@gmail.com"
                  className="hover:underline"
                >
                  pateldurgesh9399@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-phone text-purple-400 text-lg"></i>
                <a href="tel:+918839935490" className="hover:underline">
                  +91 8839935490
                </a>
              </div>
              <div className="flex items-center gap-3">
                <i className="fab fa-instagram text-pink-500 text-lg"></i>
                <a
                  href="https://instagram.com/gurjar_durgesh_88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @gurjar_durgesh_88
                </a>
              </div>
              <div className="flex items-center gap-3">
                <i className="fab fa-github text-gray-300 text-lg"></i>
                <a
                  href="https://github.com/gurjardurgesh88"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  @gurjardurgesh88
                </a>
              </div>
              <div className="flex items-center gap-3">
                <i className="fab fa-linkedin text-blue-500 text-lg"></i>
                <a
                  href="https://linkedin.com/in/durgesh-gurjar-195533369"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  durgesh-gurjar-195533369
                </a>
              </div>
              <div className="flex items-center gap-3">
                <i className="fas fa-map-marker-alt text-pink-400 text-lg"></i>
                <a
                  href="https://www.google.com/maps?q=India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  India
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className={`glass-effect dark:bg-gray-100 dark:text-black p-6 rounded-lg space-y-6 ${
              isVisible ? "animate-slide-right" : "opacity-0"
            }`}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full p-3 bg-transparent neon-border dark:border-gray-400 rounded text-white dark:text-black dark:placeholder-gray-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your Email"
              className="w-full p-3 bg-transparent neon-border dark:border-gray-400 rounded text-white dark:text-black dark:placeholder-gray-500"
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full p-3 bg-transparent neon-border dark:border-gray-400 rounded text-white dark:text-black dark:placeholder-gray-500"
            />
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              className="w-full p-3 bg-transparent neon-border dark:border-gray-400 rounded resize-none text-white dark:text-black dark:placeholder-gray-500"
            />
            <button
              type="submit"
              className="w-full py-3 neon-border-pink dark:border-gray-400 rounded font-semibold hover:bg-pink-500/10 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
