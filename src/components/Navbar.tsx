import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/90 backdrop-blur-lg border-b border-border/30" : ""}`}>
      <div className="container mx-auto flex items-center justify-between h-16 px-6">
        <a href="#home" className="font-display text-xl font-bold italic text-foreground">
          RND.
        </a>
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg border-b border-border/30">
          <div className="container mx-auto py-6 px-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link" onClick={() => setIsOpen(false)}>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
