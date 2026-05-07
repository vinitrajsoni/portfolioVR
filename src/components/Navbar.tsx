import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["certificates", "Certificates"],
  ["education", "Education"],
  ["experience", "Experience"],
  ["projects", "Projects"],
  ["contact", "Contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1100px,calc(100%-2rem))]">
      <div className="glass rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="font-bold tracking-tight text-gradient text-lg" style={{ fontFamily: "Poppins" }}>
          VR<span className="text-foreground/70 font-normal">.dev</span>
        </a>
        <div className="hidden md:flex items-center gap-1">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground rounded-lg transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="glass rounded-2xl mt-2 p-2 md:hidden flex flex-col">
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
