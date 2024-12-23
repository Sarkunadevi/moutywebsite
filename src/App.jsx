import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Products from "./components/Products";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative h-full overflow-y-auto antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center"></div>
      <div className="relative z-10 flex flex-col items-center container p-4 mx-auto ">
        <Hero />
        <Navbar />
        <AboutUs />
        <Products />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}
