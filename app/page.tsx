import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Credentials from "@/components/Credentials";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Credentials />
        <Services />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
