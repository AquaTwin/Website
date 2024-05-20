import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Patners from "@/components/patners";
import Problem from "@/components/problem";
import Solution from "@/components/solution";
import Team from "@/components/team";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex flex-col bg-primary-1 ">
      <Hero />
      <About />
      <Problem/>
      <Solution/>
      <Team />
      <Patners />
      <Contact />
      <Footer />
      
    </main>
  );
}
