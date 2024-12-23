import { motion } from "framer-motion";
import Carousel from "./Carousel";
import { ABOUTUS } from "../constants";

const AboutUs = () => {
  return (
    <section className="mx-10 pb-10 border-t-4 w-full" id="about">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="my-5 text-center text-4xl font-semibold tracking-tighter"
      >
        À Propos de Nous
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col justify-center items-center  mt-5"
      >
        <Carousel data={ABOUTUS} />
        
      </motion.div>
    </section>
  );
};

export default AboutUs;
