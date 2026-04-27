import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition ${
        scrolled ? 'border-b border-white/10 bg-bg/70 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between">
        <ScrollLink
          to="home"
          smooth
          duration={500}
          className="cursor-pointer text-xl font-bold tracking-tight"
        >
          <span className="text-accent">{'<'}</span>Portfolio
          <span className="text-accent">{' />'}</span>
        </ScrollLink>

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <ScrollLink
                to={item.id}
                spy
                smooth
                offset={-80}
                duration={500}
                activeClass="!text-accent"
                className="cursor-pointer rounded-full px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 md:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-white transition ${open ? 'translate-y-2 rotate-45' : ''}`}
            />
            <span className={`block h-0.5 w-5 bg-white transition ${open ? 'opacity-0' : ''}`} />
            <span
              className={`block h-0.5 w-5 bg-white transition ${open ? '-translate-y-2 -rotate-45' : ''}`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <ul className="container-page flex flex-col gap-1 border-t border-white/10 bg-bg/95 py-3 md:hidden">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <ScrollLink
                to={item.id}
                smooth
                offset={-80}
                duration={500}
                onClick={() => setOpen(false)}
                className="block cursor-pointer rounded-lg px-3 py-2 text-white/80 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
