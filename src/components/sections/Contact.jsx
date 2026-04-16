import { useState } from "react";
import ScrollReveal from "../animations/ScrollReveal";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message cannot be empty";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    // EmailJS integration
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          toast.success("Message sent successfully 🚀");

          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });

          setErrors({});
        },
        () => {
          toast.error("Failed to send message ❌");
        },
      );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-[#0a0a0a] text-black dark:text-white px-6 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Contact Me
          </h2>

          <p className="text-center text-gray-500 dark:text-gray-400 mb-12">
            Have a question or want to work together? Send me a message!
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-10 items-start">
          <ScrollReveal>
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <MdEmail />
                  <div>
                    <p className="font-semibold text-sm">Email</p>
                    <p className="text-gray-500 text-sm">
                      saubhagyaushani03@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaPhone />
                  <div>
                    <p className="font-semibold text-sm">Phone</p>
                    <p className="text-gray-500 text-sm">+94 76 937 8518</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MdLocationOn />
                  <div>
                    <p className="font-semibold text-sm">Location</p>
                    <p className="text-gray-500 text-sm">Kalutara, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 focus:outline-none focus:border-green-500"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Your email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 focus:outline-none focus:border-green-500"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 focus:outline-none focus:border-green-500"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Your message"
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-white/5 focus:outline-none focus:border-green-500 resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:opacity-80 transition"
                  >
                    <LuSend size={16} />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
