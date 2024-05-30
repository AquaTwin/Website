import CustomParticles from "@/components/particles";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function NotFoundPage() {
  return (
    <section className="flex flex-col justify-center items-center h-screen bg-primary-1">
      <h2 className="text-7xl text-title">404</h2>
      <h3 className="text-2xl text-title mt-3">Page Not Found</h3>
      <p className="text-lg opacity-65 mt-4 text-title">
        Sorry we can&rsquo;t find the page you&apos;re looking for.
      </p>
      <Button className="rounded-full mt-5" asChild>
        <Link href={"/"}>Back to Home</Link>
      </Button>
    </section>
  );
}

export default NotFoundPage;
