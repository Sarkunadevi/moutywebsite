import emailjs from "@emailjs/browser";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiSend } from "react-icons/fi";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Le nom est requis.";
    if (!formData.email) {
      errors.email = "L'e-mail est requis.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "L'e-mail n'est pas valide.";
    }
    if (!formData.message) errors.message = "Le message est requis.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);
      emailjs
        .send(
          "service_vnh0qul",
          "template_zl1cjvc",
          formData,
          "KDxJUVtLaiV1AevKl"
        )
        .then((response) => {
          toast.success("Message envoyé avec succès.");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("Échoué...", error);
          toast.error(
            "Échec de l'envoi du message. Veuillez réessayer plus tard."
          );
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };
  return (
    <section className=" md:w-3/4 lg:w-full  border-t-4" id="contact">
      <div className="lg:w-3/4 mx-auto">
        <Toaster />
        <h2 className="my-6 text-center text-2xl lg:text-4xl font-semibold tracking-tighter">
          Connectons-Nous
        </h2>
        <div>
          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
          >
            <div className="mb-4 flex space-x-4">
              <div className="lg:w-1/2">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  placeholder="Nom"
                  onChange={handleChange}
                  className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-sm text-yellow-300"
                  >
                    {errors.name}
                  </motion.p>
                )}
              </div>
              <div className="lg:w-1/2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  placeholder="E-mail"
                  onChange={handleChange}
                  className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-sm text-yellow-300"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </div>
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                placeholder="Message"
                onChange={handleChange}
                className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
                rows="6"
              />
              {errors.message && (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-sm text-yellow-300"
                >
                  {errors.message}
                </motion.p>
              )}
            </div>
            <button
              type="submit"
              className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${
                isSending ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={isSending}
            >
              <div className="flex items-center justify-center gap-2 ">
                {isSending ? "Envoi..." : "Envoyer"}
                <FiSend />
              </div>
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
