import { Button } from "./ui/button";
import { useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (sectionId: string) => {
    if (sectionId === "projects") {
      navigate("/projects");
      return;
    }

    // If we're on the projects page, navigate back to home first
    if (location.pathname === "/projects") {
      navigate("/", { state: { scrollTo: sectionId } });
      return;
    }

    // If we're on the home page, just scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1
              className="text-xl font-bold cursor-pointer"
              onClick={() => handleNavigation("about")}
            >
              Portfolio
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-1">
              <Button
                variant="ghost"
                size="default"
                onClick={() => handleNavigation("about")}
                className="hover:bg-accent hover:text-accent-foreground text-base font-bold"
              >
                About
              </Button>
              <Button
                variant="ghost"
                size="default"
                onClick={() => handleNavigation("experience")}
                className="hover:bg-accent hover:text-accent-foreground text-base font-bold"
              >
                Experience
              </Button>
              <Button
                variant="ghost"
                size="default"
                onClick={() => handleNavigation("projects")}
                className="hover:bg-accent hover:text-accent-foreground text-base font-bold"
              >
                Projects
              </Button>
              <Button
                variant="ghost"
                size="default"
                onClick={() => handleNavigation("skills")}
                className="hover:bg-accent hover:text-accent-foreground text-base font-bold"
              >
                Skills
              </Button>
              <Button
                variant="ghost"
                size="default"
                onClick={() => handleNavigation("contact")}
                className="hover:bg-accent hover:text-accent-foreground text-base font-bold"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                if (mobileMenuRef.current) {
                  mobileMenuRef.current.classList.toggle("hidden");
                }
              }}
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden hidden" ref={mobileMenuRef}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
            <Button
              variant="ghost"
              size="default"
              onClick={() => handleNavigation("about")}
              className="w-full justify-start hover:bg-accent hover:text-accent-foreground text-base"
            >
              About
            </Button>
            <Button
              variant="ghost"
              size="default"
              onClick={() => handleNavigation("experience")}
              className="w-full justify-start hover:bg-accent hover:text-accent-foreground text-base"
            >
              Experience
            </Button>
            <Button
              variant="ghost"
              size="default"
              onClick={() => handleNavigation("projects")}
              className="w-full justify-start hover:bg-accent hover:text-accent-foreground text-base"
            >
              Projects
            </Button>
            <Button
              variant="ghost"
              size="default"
              onClick={() => handleNavigation("skills")}
              className="w-full justify-start hover:bg-accent hover:text-accent-foreground text-base"
            >
              Skills
            </Button>
            <Button
              variant="ghost"
              size="default"
              onClick={() => handleNavigation("contact")}
              className="w-full justify-start hover:bg-accent hover:text-accent-foreground text-base"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
