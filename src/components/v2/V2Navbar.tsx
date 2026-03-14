import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "About", href: "#v2-about" },
  { label: "Experience", href: "#v2-experience" },
  { label: "Projects", href: "#v2-projects" },
  { label: "Skills", href: "#v2-skills" },
  { label: "Education", href: "#v2-education" },
  { label: "Contact", href: "#v2-contact" },
];

const V2Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-v2-bg/90 backdrop-blur-md border-b-2 border-v2-accent/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-14 px-6">
        <a href="#" className="font-v2-heading text-2xl font-black tracking-tighter text-v2-accent">
          R.N.D
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-v2-muted hover:text-v2-accent transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <button className="md:hidden text-v2-text" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-v2-accent/10 bg-v2-bg px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm font-bold uppercase tracking-widest text-v2-muted hover:text-v2-accent"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default V2Navbar;
