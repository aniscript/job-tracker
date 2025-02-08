import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Supercharge Your Job Search?
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join thousands of job seekers who have streamlined their job search
          process with JobTrackr.
        </p>
        <Button size="lg">Sign Up Now - Its Free!</Button>
      </div>
    </section>
  );
}
