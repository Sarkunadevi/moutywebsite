import { MdArrowOutward } from "react-icons/md";
import { PRODUCTS } from "../constants";
import { motion } from "framer-motion";

const Products = () => {
  return (
    <section className="pt-6 border-t-4" id="products">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center text-3xl lg:text-4xl"
      >
        Nos Produits
      </motion.h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {PRODUCTS.map((product) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            key={product.id}
            className="group relative overflow-hidden rounded-3xl opacity-0 w-5/6 h-5/6"
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className=" absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100 space-y-8"
            >
              <h3 className=" text-xl">{product.name}</h3>
              <p className="text-center">{product.description}</p>
              <div class="wrapper">
                <a href="#contact" class="button">
                  <div class="button__content">
                    <span class="button__text">Commande</span>

                    <div class="button__shape-1"></div>
                    <div class="button__shape-2"></div>
                    <div class="button__shape-3"></div>
                    <div class="button__shape-4"></div>
                  </div>

                  <div class="button__shadow"></div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
