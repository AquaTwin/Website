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
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Problem/>
      <Solution/>
      <Team />
      <Patners />
      <Contact />
      <Footer />
      
    </main>
  );
}
