import { HERO } from "../constants";
import Img from "../assets/earth.png";
import { motion } from "framer-motion";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      className="flex min-h-screen flex-wrap"
      id="home"
    >
      <motion.div className="w-full lg:w-1/2 mt-20 ">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className=" mb-3 lg:my-8 text-xl font-bold md:text-4xl lg:text-[2rem] text-center"
        >
          {HERO.intro}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mb-3 font-light lg:font-normal lg:mt-10 lg:mb-16 lg:p-2 lg:text-xl text-center"
        >
          {HERO.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: -150 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="wrapper mb-4"
        >
          <a href="#products" className="button">
            <div className="button__content">
              <span className="button__text font-light lg:font-normal">
                Voir Nos Produits
              </span>

              <div className="button__shape-1"></div>
              <div className="button__shape-2"></div>
              <div className="button__shape-3"></div>
              <div className="button__shape-4"></div>
            </div>

            <div className="button__shadow"></div>
          </a>
        </motion.div>
      </motion.div>
      <motion.div className="  place-items-center w-full     md:mx-0 lg:mt-14 lg:px-2 lg:w-1/2">
        <div className="lg:pl-14 lg:mt-2 ">
          <motion.img
            initial={{ opacity: 0, x: 100, rotate: 180 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            src={Img}
            width={500}
            height={500}
            alt="Earth Image"
            className="rounded-3xl "
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
