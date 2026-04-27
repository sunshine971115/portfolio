import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type Props = {
  id?: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

const Section = ({ id, eyebrow, title, children, className = '' }: Props) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    viewport={{ once: true, margin: '-100px' }}
    className={`container-page scroll-mt-24 py-20 md:py-28 ${className}`}
  >
    {(eyebrow || title) && (
      <header className="mb-12 text-center">
        {eyebrow && (
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
        )}
        {title && <h2 className="heading">{title}</h2>}
      </header>
    )}
    {children}
  </motion.section>
);

export default Section;
