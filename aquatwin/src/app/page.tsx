import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Partners from "@/components/partners";
import Problem from "@/components/problem";
import Solution from "@/components/solution";
import Team from "@/components/team";

export default function Home() {
  return (
    <main className="flex flex-col bg-primary-1 space-y-16">
      <Hero />
      <Problem/>
      <Solution/>
      <Team />
      <Partners />
      <Contact />
      <Footer />
      
    </main>
  );
}
