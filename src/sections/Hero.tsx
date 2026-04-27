import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import codechef from '../assets/images/codechef1.png';
import github from '../assets/images/github.png';
import linkedIn from '../assets/images/linked_in.png';
import leetcode from '../assets/images/leetcodes.png';

const ROLES = ['Full Stack Developer', 'AI/ML Enthusiast', 'Problem Solver'];

const socials = [
  { href: 'https://www.codechef.com/users/dark_knight31', src: codechef, alt: 'CodeChef' },
  { href: 'https://github.com/Praneeth2025', src: github, alt: 'GitHub' },
  {
    href: 'https://www.linkedin.com/in/vamsi-praneeth-92458a259',
    src: linkedIn,
    alt: 'LinkedIn',
  },
  { href: 'https://leetcode.com/u/pG477o7BXM/', src: leetcode, alt: 'LeetCode' },
];

const RoleRotator = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setIndex((i) => (i + 1) % ROLES.length), 2200);
    return () => window.clearInterval(id);
  }, []);
  return (
    <span className="relative inline-block min-h-[1.5em] min-w-[14ch] align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLES[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35 }}
          className="absolute left-0 top-0 font-semibold text-accent"
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const Hero = () => (
  <section
    id="home"
    className="container-page relative flex min-h-screen items-center pt-24 md:pt-16"
  >
    <div className="grid w-full items-center gap-12 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="space-y-6"
      >
        <p className="text-lg font-medium text-white/70">Hey! It's me 👋</p>
        <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-r from-accent via-accent-soft to-fuchsia-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-pan">
            Vamsi Praneeth
          </span>
        </h1>
        <p className="text-xl text-white/70 md:text-2xl">
          I am a <RoleRotator />
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a href="mailto:vamsipraneeth2004@gmail.com" className="btn-outline">
            E-Mail Me
          </a>
          <a
            href="https://drive.google.com/file/d/1D0MarEA_vK0HZWumDiLTwoMApKx4UkQT/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Resume
          </a>
        </div>

        <div className="flex items-center gap-4 pt-4">
          <span className="text-sm text-white/50">follow me</span>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.alt}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.alt}
                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-0.5 hover:border-accent/50 hover:shadow-glow"
              >
                <img src={s.src} alt={s.alt} className="h-5 w-5 object-contain" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative mx-auto w-full max-w-md"
      >
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-accent/40 via-fuchsia-500/20 to-transparent blur-3xl" />
        <div className="aspect-square animate-float">
          <svg viewBox="0 0 1000 1000" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="hero-grad" gradientTransform="rotate(-45 .5 .5)">
                <stop offset="0%" stopColor="#03B0FD" />
                <stop offset="100%" stopColor="#3c1d4b" />
              </linearGradient>
            </defs>
            <path
              fill="url(#hero-grad)"
              d="M921 673.5q-74 173.5-247.5 191t-347 0Q153 847 86.5 673.5T130 370q110-130 240-234.5t281-21Q802 198 898.5 349T921 673.5Z"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
