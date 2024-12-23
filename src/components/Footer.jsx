import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import CreditCards from "../assets/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <section className=" pt-2 lg:p-0 md:px-4 sm:px-4 border-t-4" id="footer">
      <div className="grid grid-cols-1 text-center gap-3  md:grid-cols-3  lg:text-left py-4">
        {/* company details section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6 lg:border-r-4 border-b-4 lg:border-b-0 pb-4 md:border-b-0"
        >
          <h1 className="text-xl font-bold uppercase">
            Conçu pour les entreprises
          </h1>
          <p className="text-sm  ">
            Spécialisé dans le commerce B to B, nous offrons une gamme de
            packaging à base de papiers barrières pour les industries
            Agroalimentaires.
          </p>
          <div>
            <p className="flex items-center gap-2">
              <FaPhone />
              +33 (123) 456-7890
            </p>
            <p className="flex items-center gap-2 mt-2">
              {""}
              <FaMapLocation /> Paris, France
            </p>
          </div>
        </motion.div>
        {/* Footer Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-6 lg:border-r-4 border-b-4 lg:border-b-0  md:border-b-0"
        >
          <h1 className="text-xl font-bold uppercase">Adresse</h1>
          <div className="grid grid-cols-2 gap-3">
            {/* First column section */}
            <div>
              <ul className="space-y-2">
                <li>Mouty Cups</li>
                <li>Rue de l'artisanat</li>
                <li>72320 Vibraye</li>
                <li>France</li>
              </ul>
            </div>

            {/* Second column section */}
            <div>
              <ul className="space-y-2">
                <li>
                  Numéro SIRET :<br /> 824 933
                </li>
                <li>279 000 39</li>
                <li>Numéro TVA :</li>
                <li>FR49824933279</li>
              </ul>
            </div>
          </div>
        </motion.div>
        {/* Social Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-xl font-bold uppercase">Suivez-nous</h1>
          <div className="flex justify-center items-center gap-3">
            <FaFacebook className="text-3xl hover:scale-105 duration-300" />
            <FaInstagram className="text-3xl hover:scale-105 duration-300" />
            <FaTelegram className="text-3xl hover:scale-105 duration-300" />
            <FaGoogle className="text-3xl hover:scale-105 duration-300" />
          </div>
          <div>
            <h1 className="text-xl font-semibold mb-2 uppercase">
              Méthodes de paiement
            </h1>
            <img
              src={CreditCards}
              alt="Credit Cards"
              className="w-[80%] ml-10"
            />
          </div>
        </motion.div>
      </div>
      {/* Copyright section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        // viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="border-t-4"
      >
        <p className="text-white text-center pt-4 text-sm mt-2 ">
          Droits d'auteur &copy; 2024 Mouty Cups. Tous droits réservés.
        </p>
      </motion.div>
      {/* </div> */}
      {/* </div> */}
    </section>
  );
};

export default Footer;
