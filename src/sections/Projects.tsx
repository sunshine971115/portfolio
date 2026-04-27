import Section from '../components/Section';
import ProjectCard, { type Project } from '../components/ProjectCard';
import restaurant from '../assets/images/ivan-stern-LOLSb7m6XkU-unsplash.jpg';
import chess from '../assets/images/chess.jpg';
import snake from '../assets/images/snake.jpg';
import wiseWay from '../assets/images/wise_way.jpg';

const projects: Project[] = [
  {
    imageUrl: restaurant,
    altText: 'Restaurant website',
    title: 'Restaurant Website',
    description:
      'A dynamic, responsive restaurant site featuring menu, reservations, reviews, and contact info.',
    explore: 'https://github.com/Praneeth2025/zenith-bistro',
  },
  {
    imageUrl: chess,
    altText: 'Chess image recognizer',
    title: 'Chess Image Recognizer',
    description:
      'AI-powered chess system that recognizes physical pieces and plays autonomously using computer vision.',
    explore: 'https://github.com/Praneeth2025/chess-image-recognizer',
  },
  {
    imageUrl: snake,
    altText: 'Gesture Snake Game',
    title: 'Gesture Snake Game',
    description:
      "A fresh take on the classic Snake — control the snake's movement with hand gestures via webcam.",
    explore: 'https://github.com/Praneeth2025/Gesture-Snake',
  },
  {
    imageUrl: wiseWay,
    altText: 'WiseWay',
    title: 'WiseWay',
    description:
      'A web app that finds the most cost-effective route between two points using advanced algorithms.',
    explore: 'https://github.com/Praneeth2025/WiseWay-website',
  },
];

const Projects = () => (
  <Section id="projects" eyebrow="Selected work" title="Projects">
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((p) => (
        <ProjectCard key={p.title} {...p} />
      ))}
    </div>
  </Section>
);

export default Projects;
