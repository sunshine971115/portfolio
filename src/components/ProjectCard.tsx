import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export type Project = {
  imageUrl: string;
  altText: string;
  title: string;
  description: string;
  explore: string;
};

const ProjectCard = ({ imageUrl, altText, title, description, explore }: Project) => (
  <motion.article
    whileHover={{ y: -6 }}
    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    className="group glass overflow-hidden"
  >
    <div className="relative aspect-[16/10] overflow-hidden">
      <img
        src={imageUrl}
        alt={altText}
        loading="lazy"
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
    </div>
    <div className="flex flex-col gap-3 p-6">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-sm leading-relaxed text-white/60">{description}</p>
      <a
        href={explore}
        target="_blank"
        rel="noreferrer"
        className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-accent transition group-hover:gap-3"
      >
        Explore
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="h-3.5 w-3.5" />
      </a>
    </div>
  </motion.article>
);

export default ProjectCard;
