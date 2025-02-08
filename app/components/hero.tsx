import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2 space-y-8">
          <h1 className="text-4xl font-bold sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
            Track Your Job Search Journey
          </h1>
          <p className="text-xl text-muted-foreground">
            Organize, manage, and optimize your job applications with JobTrackr.
            Never miss an opportunity again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Job Tracker Dashboard"
            width={400}
            height={400}
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
