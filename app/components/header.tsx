import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          JobTrackr
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link
            href="#features"
            className="text-muted-foreground hover:text-primary"
          >
            Features
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            Pricing
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            About
          </Link>
        </nav>
        <div className="flex space-x-2">
          <Button variant="outline">Log in</Button>
          <Button>Sign up</Button>
        </div>
      </div>
    </header>
  );
}
