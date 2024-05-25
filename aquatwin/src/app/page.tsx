import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Partners from "@/components/partners";
import Problem from "@/components/problem";
import Solution from "@/components/solution";
import Team from "@/components/team";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex flex-col relative bg-primary-1 -z-20">
      <Hero />
      <About />
      <Problem/>
      <Solution/>
      <Team />
      <Partners />
      <Contact />
      <Footer />

    </main>
  );
}
